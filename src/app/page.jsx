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
      <div className='place-content-center'>
        🎵 Spotify Taste Mixer
        <br></br>
        <button className='p-2 rounded-full bg-purple-200 text-purple-600 hover:bg-purple-600 hover:text-purple-200' onClick={handleLogin}>LOGIN</button>
      </div>  
  );
}

async function testSpotifyAPI() {
  const token = localStorage.getItem('spotify_token')

  console.log('1. Testing token:', token ? '✓' : '✗')

  // Test search
  try {
    const response = await fetch('https://api.spotify.com/v1/search?type=track&q=test&limit=1', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
    console.log('2. Search endpoint:', response.ok ? '✓' : '✗')
  } catch (e) {
    console.error('2. Search endpoint: ✗', e)
  }

  // Test user profile
  try {
    const response = await fetch('https://api.spotify.com/v1/me', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
    console.log('3. User profile:', response.ok ? '✓' : '✗')
  } catch (e) {
    console.error('3. User profile: ✗', e)
  }
}
