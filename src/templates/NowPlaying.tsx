
import { useState, useEffect } from 'react';

interface Track {
  name: string;
  artist: string;
  album?: string;
  image?: string;
  url?: string;
}

export default function NowPlaying({ 
  apiUrl = 'http://localhost:3001',
  className = "", 
  style = {} 
}) {
  const [track, setTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const fetchNowPlaying = async () => {
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
        console.error('Failed to fetch now playing:', error);
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 15000);

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

