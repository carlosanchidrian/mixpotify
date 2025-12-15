import { getAccessToken } from "@/lib/auth"

export async function spotifyRequest(url) {
  const token = await getAccessToken();

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

export async function spotifyPost(url, body) {
  const token = await getAccessToken();

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
    method: 'POST',
    headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  },
    body: JSON.stringify(body)
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