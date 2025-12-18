import type { Content } from '../utils/contentFetcher';
import ReactMarkdown from 'react-markdown';

interface PhotoAlbumProps {
  album: Content;
  onBack: () => void;
}

export default function PhotoAlbum({ album, onBack }: PhotoAlbumProps) {
  return (
    <div>
      <button onClick={onBack} style={{ marginBottom: '1rem' }}>← Back to albums</button>
      <h1>{album.meta.title}</h1>
      <time style={{ color: '#666', fontSize: '0.9rem', display: 'block', marginBottom: '1rem' }}>
        {new Date(album.meta.date).toLocaleDateString()}
      </time>
      
      <ReactMarkdown>{album.body}</ReactMarkdown>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
        gap: '1rem',
        marginTop: '2rem'
      }}>
        {album.meta.images?.map((img, i) => (
          <img 
            key={i}
            src={img} 
            alt={`${album.meta.title} ${i + 1}`}
            style={{
              width: '100%',
              borderRadius: '8px',
              border: '2px solid #ccc'
            }}
          />
        ))}
      </div>
    </div>
  );
}
