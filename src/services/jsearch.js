// src/services/jsearch.js
// Esta capa solo sabe hacer HTTP. No sabe nada de React.
// Si mañana cambias de JSearch a otra API, solo tocas este archivo.

const BASE_URL = "https://jsearch.p.rapidapi.com";

const headers = {
  "X-RapidAPI-Key": process.env.EXPO_PUBLIC_JSEARCH_KEY,
  "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
};

export async function searchJobs({
  query = "React Native",
  page = 1,
  employment_type = "",
}) {
  const params = new URLSearchParams({
    query,
    page: String(page),
    num_pages: "1",
    date_posted: "all",
    ...(employment_type && { employment_types: employment_type }),
  });

  const response = await fetch(`${BASE_URL}/search?${params}`, { headers });

  if (!response.ok) {
    throw new Error(`JSearch error: ${response.status}`);
  }

  const data = await response.json();
  return data.data ?? [];
}

export async function getJobDetail(jobId) {
  const params = new URLSearchParams({ job_id: jobId });
  const response = await fetch(`${BASE_URL}/job-details?${params}`, {
    headers,
  });

  if (!response.ok) {
    throw new Error(`JSearch error: ${response.status}`);
  }

  const data = await response.json();
  return data.data?.[0] ?? null;
}
