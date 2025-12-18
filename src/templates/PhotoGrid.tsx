import { useEffect, useState } from 'react';
import { fetchContent } from '../utils/contentFetcher';
import type { Content } from '../utils/contentFetcher';


interface PhotoGridProps {
  folder: string;
  onAlbumClick: (album: Content) => void;
}

export default function PhotoGrid({ folder, onAlbumClick }: PhotoGridProps) {
  const [albums, setAlbums] = useState<Content[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContent(folder).then(content => {
      setAlbums(content);
      setLoading(false);
    });
  }, [folder]);

  if (loading) return <div>Loading...</div>;

  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
      gap: '1rem' 
    }}>
      {albums.map(album => (
        <div 
          key={album.filename}
          onClick={() => onAlbumClick(album)}
          style={{
            cursor: 'pointer',
            position: 'relative',
            aspectRatio: '1',
            overflow: 'hidden',
            borderRadius: '8px',
            border: '2px solid #ccc'
          }}
        >
          <img 
            src={album.meta.cover || album.meta.images?.[0]} 
            alt={album.meta.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'rgba(0,0,0,0.7)',
            color: 'white',
            padding: '0.5rem',
            fontSize: '0.9rem'
          }}>
            <div style={{ fontWeight: 'bold' }}>{album.meta.title}</div>
            {album.meta.images && (
              <div style={{ fontSize: '0.8rem' }}>
                {album.meta.images.length} photo{album.meta.images.length !== 1 ? 's' : ''}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

