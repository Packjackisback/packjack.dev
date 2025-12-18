import { useState } from 'react';
import PrimaryContainer from '../templates/PrimaryContainer';
import PhotoGrid from '../templates/PhotoGrid';
import PhotoAlbum from '../templates/PhotoAlbum';
import type { Content } from '../utils/contentFetcher';

export default function Images() {
  const [selectedAlbum, setSelectedAlbum] = useState<Content | null>(null);

  return (
    <PrimaryContainer>
			<h1>Images</h1>
      {selectedAlbum ? (
        <PhotoAlbum 
          album={selectedAlbum} 
          onBack={() => setSelectedAlbum(null)} 
        />
      ) : (
        <PhotoGrid 
          folder="images" 
          onAlbumClick={setSelectedAlbum} 
        />
      )}
    </PrimaryContainer>
  );
}
