import { useState } from 'react';
import PrimaryContainer from '../../templates/PrimaryContainer';
import PhotoGrid from '../../templates/PhotoGrid';
import PhotoAlbum from '../../templates/PhotoAlbum';
import type { Content } from '../../utils/contentFetcher';

export default function Clouds() {
  const [selectedAlbum, setSelectedAlbum] = useState<Content | null>(null);

  return (
    <PrimaryContainer>
			<h1>Clouds</h1>
      {selectedAlbum ? (
        <PhotoAlbum 
          album={selectedAlbum} 
          onBack={() => setSelectedAlbum(null)} 
        />
      ) : (
        <PhotoGrid 
          folder="clouds" 
          onAlbumClick={setSelectedAlbum} 
        />
      )}
    </PrimaryContainer>
  );
}
