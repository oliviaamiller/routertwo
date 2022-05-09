import { useEffect, useState } from 'react';
import ArtCard from '../../components/Art/Card';

export default function ArtList() {
  const [artWorks, setArtWorks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArt() {
      const res = await fetch(
        'https://api.artic.edu/api/v1/artworks/search?fields=id,title,image_id,artist_title,&limit=12&page=1&q=poppy'
      );

      const results = await res.json();
      setArtWorks(results.data);
      setLoading(false);
    }
    fetchArt();
  }, []);

  return (
    <>
      <h3>Poppy Art</h3>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div>
          {artWorks.map((art) => {
            return <ArtCard key={art.id} art={art} />;
          })}
        </div>
      )}
    </>
  );
}
