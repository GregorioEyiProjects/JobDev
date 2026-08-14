//Fechas, salarios, ubicaciones
// src/utils/formatters.js

export function getInitial(name) {
  return name?.charAt(0)?.toUpperCase() ?? "?";
}

/**
 * Una o dos iniciales para el avatar de perfil.
 * Si el nombre tiene varias palabras, devuelve inicial de la primera y la última.
 * Si es una sola palabra (ej. username sin espacio), devuelve las dos primeras letras.
 * @param {string} name
 * @returns {string}
 */
export function getInitials(name = "") {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function formatSalary(min, max, currency = "USD") {
  if (!min && !max) return "Salario no especificado";
  const fmt = (n) => (n >= 1000 ? `${Math.round(n / 1000)}k` : String(n));
  const isHourly = (min && min < 500) || (max && max < 500);
  const suffix = isHourly ? "/hr" : "";
  if (min && max) return `${currency} ${fmt(min)} – ${fmt(max)}${suffix}`;
  if (min) return `Desde ${currency} ${fmt(min)}${suffix}`;
  return `Hasta ${currency} ${fmt(max)}${suffix}`;
}

export function getTimeAgo(dateString) {
  if (!dateString) return "";
  const diff = Date.now() - new Date(dateString).getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days === 0) return "hoy";
  if (days === 1) return "ayer";
  if (days < 7) return `hace ${days} días`;
  if (days < 30) return `hace ${Math.floor(days / 7)} sem.`;
  return `hace ${Math.floor(days / 30)} meses`;
}
