// src/store/savedStore.js
import { create } from "zustand";
import { supabase } from "../services/supabase";

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
        console.error("[savedStore] loadSaved if(error){}:", error.message);
        throw new Error(error.message);
      }
      set({ savedJobs: data || [] });
    } catch (err) {
      console.error("[savedStore] loadSaved:", err.message);
    } finally {
      set({ isLoading: false });
    }
  },

  toggleSave: async (job) => {
    const { savedJobs } = get();

    const isAlreadySaved = savedJobs.some((j) => j.job_id === job.job_id);

    if (isAlreadySaved) {
      set({ savedJobs: savedJobs.filter((j) => j.job_id !== job.job_id) }); // Remove the job from savedJobs if it is already saved locally

      // Eliminar del backend
      const { error } = await supabase
        .from("saved_jobs")
        .delete()
        .eq("job_id", job.job_id);

      // Revertir si falla
      if (error) {
        console.error("[savedStore] delete:", error.message);
        set({ savedJobs });
      }
    } else {
      set({
        savedJobs: [job, ...savedJobs],
      });

      const { error } = await supabase.from("saved_jobs").insert({
        job_id: job.job_id,
        job_title: job.job_title ?? null,
        employer_name: job.employer_name ?? null,
        job_city: job.job_city ?? null,
        job_country: job.job_country ?? null,
        job_employment_type: job.job_employment_type ?? null,
        job_is_remote: job.job_is_remote ?? false,
        job_min_salary: job.job_min_salary ?? null,
        job_max_salary: job.job_max_salary ?? null,
        job_salary_currency: job.job_salary_currency ?? null,
        job_apply_link: job.job_apply_link ?? null,
        job_posted_at_datetime_utc: job.job_posted_at_datetime_utc ?? null,
      });

      // Revertir si falla
      if (error) {
        console.error("[savedStore] insert:", error.message);
        set({ savedJobs });
      }
    }
  },

  isSaved: (jobId) => {
    return get().savedJobs.some((job) => job.job_id === jobId); // Check if a job is saved based on its job_id
  },

  // ── Limpiar al hacer logout ──
  clearSaved: () => {
    set({ savedJobs: [] });
  },
}));
