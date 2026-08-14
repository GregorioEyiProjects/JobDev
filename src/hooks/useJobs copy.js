// src/hooks/useJobs.js
// Esta capa convierte las funciones HTTP en estado reactivo de React.
// Aquí viven el debounce, la paginación y el caché.
//Wrapper sobre Supabase Auth
import { useState, useEffect, useRef, useCallback } from "react";
import { searchJobs } from "../services/jsearch";

// Caché simple en memoria — se resetea cuando se cierra la app
// Evita llamadas duplicadas para la misma query+página

const cache = new Map();

function getCacheKey(query, page, filter) {
  return `${query}__${page}__${filter}`;
}

export function useJobs() {
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState("developer");
  const [activeFilter, setActiveFilter] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [error, setError] = useState(null);

  // Ref para el debounce — no necesita re-render cuando cambia

  const debounceTimer = useRef(null);

  const isFetching = useRef(false); // Ref para evitar llamadas duplicadas mientras se está cargando

  // Ref para la query que se está buscando actualmente
  const currentQuery = useRef(query);

  const fetchJobs = useCallback(
    async (searchQuery, pageNum, filter, append = false) => {
      if (isFetching.current) return; // Evita llamadas duplicadas mientras se está cargando
      isFetching.current = true;

      const cacheKey = getCacheKey(searchQuery, pageNum, filter);

      try {
        // Si tenemos el resultado en caché, usamos eso
        if (cache.has(cacheKey)) {
          const cached = cache.get(cacheKey);

          if (append) {
            setJobs((prev) => [...prev, ...cached]);
          } else {
            setJobs(cached);
          }
          setHasMore(cached.length > 0);
          return;
        }

        append ? setIsLoadingMore(true) : setIsLoading(true);
        setError(null);

        const results = await searchJobs({
          query: searchQuery,
          page: pageNum,
          employment_type: filter,
        });

        // Guardamos en caché
        cache.set(cacheKey, results);

        if (append) {
          setJobs((prev) => [...prev, ...results]);
        } else {
          setJobs(results);
        }

        // JSearch devuelve 10 resultados por página
        // Si devuelve menos, no hay más páginas
        setHasMore(results.length === 10);
      } catch (err) {
        setError(err.message);
        setHasMore(false);
      } finally {
        setIsLoading(false);
        setIsLoadingMore(false);
        isFetching.current = false;
      }
    },
    [],
  );

  // Debounce — espera 500ms después de que el usuario deja de escribir
  function handleQueryChange(newQuery) {
    setQuery(newQuery);
    currentQuery.current = newQuery;

    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(() => {
      setPage(1);
      fetchJobs(newQuery, 1, activeFilter, false);
    }, 500);
  }

  function handleFilterChange(filter) {
    // Si el usuario pulsa el filtro ya activo, vuelve a "Todos" (valor "")
    // Si pulsa "Todos" (value="") estando ya en "Todos", no hace nada útil pero tampoco rompe
    const newFilter = filter === activeFilter ? "" : filter;
    setActiveFilter(newFilter);
    setPage(1);
    fetchJobs(query, 1, newFilter, false);
  }

  function loadMore() {
    if (isLoadingMore || !hasMore || error) return;
    const nextPage = page + 1;
    setPage(nextPage);
    fetchJobs(query, nextPage, activeFilter, true);
  }

  // Carga inicial
  useEffect(() => {
    fetchJobs(query, 1, "", false);
  }, []);

  return {
    jobs,
    isLoading,
    isLoadingMore,
    error,
    hasMore,
    query,
    activeFilter,
    handleQueryChange,
    handleFilterChange,
    loadMore,
  };
}
