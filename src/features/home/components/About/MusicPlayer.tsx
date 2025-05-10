'use client'
import Image from "next/image";
import { Pause, Play, SkipBack, SkipForward } from '@phosphor-icons/react/dist/ssr';
import { useState, useRef, useEffect } from "react";
const songs = [
    {
        title: "Good With It",
        artist: "Rameses B & SOUNDR",
        src: "/assets/music/a.mp4",
        cover: "/assets/logos/music.svg",
    },
    {
        title: "Memories of School",
        artist: "Persona 3 Reload",
        src: "/assets/music/b.mp3",
        cover: "/assets/logos/music.svg",
    },
];
const MusicPlayer = () => {
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef<HTMLAudioElement>(null);

    const song = songs[currentSongIndex];

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            if (isPlaying) void audio.play();
            else audio.pause();
        }
    }, [isPlaying, currentSongIndex]);

    const handleTimeUpdate = () => {
        const audio = audioRef.current;
        setProgress((audio!.currentTime / audio!.duration) * 100);
    };

    const handleEnded = () => {
        handleNext();
    };

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const handleNext = () => {
        setCurrentSongIndex((prev) => (prev + 1) % songs.length);
        setIsPlaying(true);
    };

    const handlePrev = () => {
        setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
        setIsPlaying(true);
    };

    const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const audio = audioRef.current;
        if (audio) {
            const rect = (e.target as HTMLDivElement).getBoundingClientRect();
            const clickedTime = ((e.clientX - rect.left) / rect.width) * audio.duration;
            audio.currentTime = clickedTime;
        }
    };
    return (
        <div className="w-full flex flex-col items-center mt-4">
            <div className="w-full bg-primary dark:bg-primary-dark rounded-lg p-4 flex flex-col items-center shadow-md">
                <div className="w-12 h-12 rounded-md overflow-hidden mb-4">
                    <Image
                        src={song?.cover ?? '/assets/dummy/album-cover.png'}
                        alt="Album Cover"
                        width={96}
                        height={96}
                        className="object-cover"
                    />
                </div>
                <audio
                    ref={audioRef}
                    src={song?.src}
                    onTimeUpdate={handleTimeUpdate}
                    onEnded={handleEnded}
                />
                <h4 className="text-lg font-bold dark:text-primary text-primary-dark">
                    {song?.title}
                </h4>
                <p className="text-sm dark:text-secondary text-secondary-dark">
                    {song?.artist}
                </p>
                <div
                    className="w-full h-2 bg-gray-600 rounded mt-4 cursor-pointer"
                    onClick={handleProgressClick}
                >
                    <div className="h-2 bg-blue-400 rounded" style={{ width: `${progress}%` }}></div>
                </div>
                <div className="w-full flex justify-center items-center mt-4 gap-4">
                    <button onClick={() => handlePrev()} className="p-2 rounded-full dark:bg-secondary bg-secondary-dark dark:text-primary-dark text-primary hover:opacity-80">
                        <SkipBack size={20} />
                    </button>
                    <button onClick={() => handlePlayPause()} className="p-3 rounded-full dark:bg-secondary bg-secondary-dark dark:text-primary-dark text-primary hover:opacity-80">
                        {
                            !isPlaying ? <Play size={20} /> : <Pause size={20} />
                        }
                    </button>
                    <button onClick={() => handleNext()} className="p-2 rounded-full dark:bg-secondary bg-secondary-dark dark:text-primary-dark text-primary hover:opacity-80">
                        <SkipForward size={20} />
                    </button>
                </div>
            </div>
        </div>
    )
}
export default MusicPlayer;