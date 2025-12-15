'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated, getSpotifyAuthUrl } from '@/lib/auth';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Si ya está autenticado, redirigir al dashboard
    if (isAuthenticated()) {
      router.push('/dashboard');
    }
  }, [router]);

  const handleLogin = () => {
    window.location.href = getSpotifyAuthUrl();
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-purple-900 text-slate-100">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-10 px-6 py-16 md:flex-row">

        <section className="max-w-xl space-y-6 text-center md:text-left">
          <span className="inline-flex items-center rounded-full bg-purple-900/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
            MIXPOTIFY
          </span>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Mezcla tus gustos.
            <span className="block text-purple-400">Crea playlists únicas al instante.</span>
          </h1>

          <p className="text-sm text-slate-300 sm:text-base">
            Conecta tu cuenta de Spotify, fusiona tus artistas y géneros favoritos y genera playlists
            dinámicas para cada mood, plan o persona en segundos.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-start">
            <button
              onClick={handleLogin}
              className="flex items-center gap-2 rounded-full bg-purple-500 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition hover:-translate-y-[1px] hover:bg-purple-400 hover:shadow-purple-400/40"
            >
              Iniciar sesión con Spotify
            </button>
            <p className="text-xs text-slate-400">
              Sin spam. Solo playlists nuevas en tu biblioteca.
            </p>
          </div>

          <ul className="mt-4 grid gap-2 text-xs text-slate-300 sm:text-sm">
            <li>• Mezcla el gusto de varios amigos en una sola playlist.</li>
            <li>• Crea listas personalizadas para cada mood, actividad o evento en segundos.</li>
            <li>• Guarda tus creacioens en spotify.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}