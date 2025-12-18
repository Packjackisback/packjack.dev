import type { Content } from '../utils/contentFetcher';
import ReactMarkdown from 'react-markdown';

interface PhotoAlbumProps {
  album: Content;
  onBack: () => void;
}

export default function PhotoAlbum({ album, onBack }: PhotoAlbumProps) {
  return (
    <div>
      <button 
        onClick={onBack} 
        style={{ 
          marginBottom: '1.5rem',
          padding: '0.5rem 1rem',
          border: '2px solid var(--primary-color)',
          borderRadius: '5px',
          backgroundColor: '#f0f5fa',
          fontFamily: 'blockface',
          cursor: 'pointer',
          fontSize: '1rem'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e0ebf5'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f0f5fa'}
      >
        ← Back to albums
      </button>
      
      <h1>{album.meta.title}</h1>
      <time style={{ 
        display: 'block',
        textAlign: 'center',
        color: '#666', 
        fontSize: '0.9rem',
        marginBottom: '1.5rem'
      }}>
        {new Date(album.meta.date).toLocaleDateString()}
      </time>
      
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <ReactMarkdown>{album.body}</ReactMarkdown>
      </div>
      
      <div>
        {album.meta.images?.map((img, i) => (
          <img 
            key={i}
            src={img} 
            alt={`${album.meta.title} ${i + 1}`}
            style={{
              width: '100%',
              marginBottom: '1rem',
              borderRadius: '10px',
              border: '3px solid var(--primary-color)',
              backgroundColor: '#f0f5fa'
            }}
          />
        ))}
      </div>
    </div>
  );
}
