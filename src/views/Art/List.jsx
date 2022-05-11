import { useEffect, useState } from 'react';
import ArtCard from '../../components/Art/Card';
import styles from '../../App.css';

export default function ArtList() {
  const [artWorks, setArtWorks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArt() {
      const res = await fetch(
        'https://api.artic.edu/api/v1/artworks/search?fields=id,title,image_id,artist_title,artwork_type_title&limit=12&page=1&q=eyes'
      );

      const results = await res.json();
      setArtWorks(results.data);
      setLoading(false);
    }
    fetchArt();
  }, []);

  return (
    <>
      <h3>Eye Art</h3>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div className={styles.list}>
          {artWorks.map((art) => {
            return <ArtCard key={art.id} art={art} />;
          })}
        </div>
      )}
    </>
  );
}
