import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from '../../App.css';

export default function ArtDetails() {
  const [art, setArt] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function fetchDetail() {
      const res = await fetch(`https://api.artic.edu/api/v1/artworks/${id}`);
      const result = await res.json();

      setArt(result.data);
      setLoading(false);
    }
    fetchDetail();
  }, []);

  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div className={styles.detail}>
        <div className={styles.imgBig}>
        <img
            
            src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}
            alt={`${art.artwork_type_title} of food by ${art.artist_title}`}
          />
        </div>
          <div className={styles.detailData}>
            <p className={styles.title}>{art.title}</p>
            <p className={styles.artist}>{art.artist_title}</p>
            <p>
              {art.date_display}, {art.place_of_origin}
            </p>
            {art.artwork_type_title.toUpperCase() ===
            art.classification_title.toUpperCase() ? (
              <p>{art.artwork_type_title}</p>
            ) : (
              <p>{`${art.artwork_type_title}, ${art.classification_title}`}</p>
            )}
            <Link to={'/'}><p>Back to All Eyes</p></Link>
          </div>
        </div>
      )}
    </>
  );
}

