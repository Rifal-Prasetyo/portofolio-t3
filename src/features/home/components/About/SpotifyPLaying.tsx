'use client'
import { api } from '@/trpc/react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Skeleton } from '@mui/material';

export default function SpotifyPlaying() {
  
  const [progress, setProgress] = useState(0);
  const {
    data,
    isLoading,
    refetch,
    isError,
  } =  api.spotify.nowPlaying.useQuery(undefined, {
     refetchOnWindowFocus: false,
    enabled: true,
  })

  // const duration = data?.currently_playing_type === 'ad' ? 999999999 : data?.duration;

  useEffect(() => {
    if (data?.isPlaying) {
      setProgress(data.progress);
    }
  }, [data]);

  useEffect(() => {
    if (!data?.isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1000;
        return next > data.duration ? data.duration : next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [data]);


  useEffect(() => {
    if (!data?.isPlaying) return;

    const timeLeft = data.duration - data.progress;
    const timeout = setTimeout(() => {
      void refetch();
    }, timeLeft);

    return () => clearTimeout(timeout);
  }, [data, refetch]);

  if (isLoading) return (
    <div className='flex items-center justify-between w-full'>
      <Skeleton variant="circular" width={40} height={40} />
      <div className='flex flex-col gap-1'>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        <Skeleton variant="rounded" width={210} height={60} />
      </div>
    </div>
  );

  if (isError || !data) {
    return (
      <></>
    );
  }

   const progressPercent = (progress / data.duration) * 100;

  return (
     <div className="flex items-center gap-4 bg-[#121212] text-white rounded-xl p-4 w-full max-w-md shadow-lg">
      <div className="relative w-16 h-16 flex-shrink-0">
        <Image
          src={data.albumImage ?? '/assets/logos/spotify.svg'}
          alt="Album"
          fill
          className="rounded-md object-cover"
        />
      </div>
      <div className="flex flex-col flex-grow overflow-hidden">
        <div className="text-sm font-semibold truncate">{data.trackName}</div>
        <div className="text-xs text-gray-400 truncate">{data.artist}</div>
        <div className="relative mt-2 h-1 w-full bg-gray-700 rounded">
          <div
            className="absolute top-0 left-0 h-1 bg-green-500 rounded"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
