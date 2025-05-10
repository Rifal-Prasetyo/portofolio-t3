// pages/api/spotify/callback.ts

import type { SpotifyAPIToken } from '@/types/spotify';
import { NextResponse } from 'next/server';
import type {NextRequest} from 'next/server';
export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get('code');
  const clientId = process.env.SPOTIFY_CLIENT_ID!;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!;
  const redirectUri = `${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_DOMAIN : 'http://localhost:3000'}/id/api/spotify/callback`; // ganti jika production
  const baseURL = process.env.NEXT_PUBLIC_DOMAIN;

  if(!code) {
    return NextResponse.json({'status': 'error'}, {
      status: 400
    });
  }
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization:
        'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: redirectUri,
    }),
  });

  const data = await response.json() as SpotifyAPIToken;
  console.log(data);
  if (!response.ok) {
    return NextResponse.json({'status': 'error'}, {
      status: 400
    });
  }

  // === ❗️SIMPAN REFRESH TOKEN SECARA AMAN DI SINI ===
  // Bisa log ke console dulu untuk development:
  console.log('🎧 Access token:', data.access_token);
  console.log('🎧 Refresh Token:', data.refresh_token);
  console.log('🎧 expire Token:', data.expires_in);

  // Misalnya simpan ke file, database, atau hanya tampilkan:
  return NextResponse.redirect(`${baseURL}/id/auth/spotify/success`);
}
