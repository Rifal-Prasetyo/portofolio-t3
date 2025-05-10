import type { SpotifyAccessTokenResponse } from '@/types/spotify';

let accessToken: string | null = null;
let expiresAt: number | null = null; // timestamp in ms

export const getAccessToken = async (): Promise<string> => {
  const now = Date.now();

  // valid token masih aktif?
  if (accessToken && expiresAt && now < expiresAt - 3600) {
    return accessToken;
  }

  // butuh refresh token
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN!;
  const clientId = process.env.SPOTIFY_CLIENT_ID!;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!;

  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  });

  if (!res.ok) {
    throw new Error('Failed to refresh Spotify token');
  }

  const data  = await res.json() as SpotifyAccessTokenResponse;
  accessToken = data.access_token;
  expiresAt = now + data.expires_in * 1000;

  return accessToken;
};
