// server/api/routers/spotify.ts
import { getAccessToken } from '@/server/lib/spotifyTokenManager';
import { createTRPCRouter, publicProcedure } from '../trpc';
import type { SpotifyNowPlaying } from '@/types/spotify';



export const spotifyRouter = createTRPCRouter({
  nowPlaying: publicProcedure.query(async function () {
    const accessToken = await getAccessToken() // akses token aktif
    const res = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (res.status === 204) return null; // tidak ada lagu diputar

    if (!res.ok) {
      throw new Error(`Spotify error: ${res.status}`);
    }
    const data = await res.json() as SpotifyNowPlaying;
    return {
      currently_playing_type: data.currently_playing_type,
      trackName: data.item?.name,
      artist: data.item?.artists?.map((a) => a.name).join(', '),
      albumImage: data.item?.album?.images?.[0]?.url,
      progress: data.progress_ms,
      duration: data.item?.duration_ms,
      isPlaying: data.is_playing,
      trackId: data.item?.id,
    };
  }),
});
export type SpotifyRouter = typeof spotifyRouter;