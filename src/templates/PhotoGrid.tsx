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

  if (loading) return <div style={{ textAlign: 'center' }}>Loading...</div>;

  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', 
      gap: '1.5rem',
      padding: '1rem 0'
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
            borderRadius: '10px',
            border: '3px solid var(--primary-color)',
            backgroundColor: '#f0f5fa',
            transition: 'transform 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
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
            background: 'rgba(240, 245, 250, 0.95)',
            borderTop: '2px solid var(--primary-color)',
            padding: '0.75rem',
            fontFamily: 'soda',
            textAlign: 'center'
          }}>
            <div style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>
              {album.meta.title}
            </div>
            {album.meta.images && (
              <div style={{ fontSize: '0.85rem', fontFamily: 'blockface' }}>
                {album.meta.images.length} photo{album.meta.images.length !== 1 ? 's' : ''}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
