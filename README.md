# Mixpotify 🎧

Mixpotify es una aplicación web construida con Next.js que permite mezclar tu gusto musical en base a artistas, géneros, décadas, popularidad y playlists existentes para generar una playlist personalizada en Spotify.

## Características

- Autenticación con Spotify (OAuth) para usar los datos reales de tu cuenta (playlists y canciones favoritas).
- Panel de widgets para construir tus preferencias:
  - Selección de artistas.
  - Selección de géneros.
  - Filtro por décadas.
  - Rango de popularidad.
  - Playlists y tracks de usuario para "seedear" la mezcla.
- Generación de una playlist recomendada en base a las preferencias seleccionadas.
- Posibilidad de eliminar canciones individuales de la playlist generada.
- Guardado de la playlist generada en tu biblioteca de Spotify.

## Stack técnico

- **Framework:** Next.js (App Router, `src/app`)
- **Lenguaje:** JavaScript (React)
- **Estilos:** Tailwind CSS
- **UI:** Componentes propios (widgets de artistas, géneros, décadas, popularidad, playlists y tracks).
- **Integración externa:** Spotify Web API (búsqueda de artistas, tracks, playlists y recomendaciones).

## Requisitos previos

- Node.js 18+
- Cuenta de Spotify
- App creada en el [Spotify Developer Dashboard](https://developer.spotify.com/dashboard) para obtener `CLIENT_ID` y `CLIENT_SECRET`.

## Configuración del proyecto

1. Clona el repositorio:

   ```bash
   git clone https://github.com/carlosanchidrian/mixpotify.git
   cd mixpotify
   ```

2. Crea un archivo `.env.local` en la raíz con tus credenciales de Spotify:

   ```env
   SPOTIFY_CLIENT_ID=tu_client_id
   SPOTIFY_CLIENT_SECRET=tu_client_secret
   SPOTIFY_REDIRECT_URI=http://127.0.0.1:3000/auth/callback
   NEXT_PUBLIC_SPOTIFY_SCOPES=user-top-read playlist-modify-private playlist-modify-public playlist-read-private user-library-read
   ```

   Ajusta los nombres/variables a como finalmente se definan en tu implementación de auth.

3. Instala las dependencias:

   ```bash
   npm install
   ```

## Ejecución en desarrollo

```bash
npm run dev
```

Visita `http://127.0.0.1:3000` para abrir la aplicación.

## Flujo de uso

1. Inicia sesión con tu cuenta de Spotify.
2. Usa los widgets para:
   - Buscar y seleccionar artistas.
   - Elegir géneros.
   - Fijar décadas objetivo.
   - Ajustar la popularidad mínima y máxima.
   - Añadir playlists y tracks como base de la mezcla.
3. Genera la playlist con el botón correspondiente en el panel central.
4. Revisa las canciones propuestas:
   - Elimina las que no te interesen.
5. Guarda la playlist en tu cuenta de Spotify usando la opción de "Guardar en biblioteca".

## Licencia

Proyecto creado con fines educativos dentro de la asignatura de desarrollo web / integración de APIs, inspirado en el repositorio de ejemplo [`rpmaya/nextjs-spotify`](https://github.com/rpmaya/nextjs-spotify).
