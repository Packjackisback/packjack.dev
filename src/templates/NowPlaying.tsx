
import { useState, useEffect } from 'react';

interface Track {
  name: string;
  artist: string;
  album?: string;
  image?: string;
  url?: string;
}

export default function NowPlaying({ 
  apiUrl = 'https://api.packjack.dev',
  className = "", 
  style = {} 
}) {
  const [track, setTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const fetchWithRetry = async (retries = 5) => {
      try {
        const response = await fetch(`${apiUrl}/api/lastfm/now-playing`);
        const data = await response.json();

        if (data.isPlaying && data.track) {
          setTrack(data.track);
          setIsPlaying(true);
        } else {
          setIsPlaying(false);
        }
      } catch (error) {
        if (retries > 1) {
          console.warn(`Fetch failed, retrying (${retries - 1} left)`);
          await new Promise(res => setTimeout(res, 1000));
          return fetchWithRetry(retries - 1);
        }

        console.error('Failed to fetch now playing after retries:', error);
        setIsPlaying(false);
      }
    };

    fetchWithRetry();

    const interval = setInterval(fetchWithRetry, 15000);

    return () => clearInterval(interval);
  }, [apiUrl]);

  if (!isPlaying || !track) {
    return (
      <span className={className} style={style}>
        Not playing anything
      </span>
    );
  }

  return (
    <span className={className} style={style}>
      ♫ {track.artist} - {track.name}
    </span>
  );
}

