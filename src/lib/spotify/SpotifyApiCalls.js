import { getAccessToken } from "@/lib/auth"

export async function spotifyRequest(url) {
  const token = getAccessToken();

  if (!token) {
    // Intentar refrescar token
    const newToken = await refreshAccessToken();
    if (!newToken) {
      // Redirigir a login
      window.location.href = '/';
      return;
    }
  }

  const response = await fetch(url, {
    headers: { 'Authorization': `Bearer ${token}` }
  });

  if (response.status === 401) {
    // Token expirado, refrescar
    const newToken = await refreshAccessToken();
    // Reintentar petición
  }

  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }

  return response.json();
}