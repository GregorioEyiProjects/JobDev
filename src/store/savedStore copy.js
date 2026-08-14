// src/store/savedStore.js
import { create } from "zustand";

export const useSavedStore = create((set, get) => ({
  savedJobs: [],
  isLoading: false,

  // ── Carga inicial — llamar al entrar a la app o al hacer login ──
  loadSaved: async () => {
    set({ isLoading: true });

    try {
      const { data, error } = await supabase
        .from("saved_jobs")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        throw new Error(error.message);
      }
      set({ savedJobs: data || [] });
    } catch (err) {
      console.error("[savedStore] loadSaved:", err.message);
    } finally {
      set({ isLoading: false });
    }
  },

  toggleSave: (job) => {
    const { savedJobs } = get();

    const isAlreadySaved = savedJobs.some((j) => j.job_id === job.job_id);

    if (isAlreadySaved) {
      set({
        savedJobs: savedJobs.filter((j) => j.job_id !== job.job_id), // Remove the job from savedJobs if it is already saved
      });
    } else {
      set({
        savedJobs: [...savedJobs, job],
      });
    }
  },

  isSaved: (jobId) => {
    return get().savedJobs.some((job) => job.job_id === jobId); // Check if a job is saved based on its job_id
  },
}));
