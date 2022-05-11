import { Link } from 'react-router-dom';
import styles from '../../App.css';

export default function ArtCard({ art }) {
  return (
    <>
      <div>
        <Link to={`/art/${art.id}`} className={styles.card}>
          <img
            className={styles.img}
            src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}
            alt={`${art.artwork_type_title} of eyes by ${art.artist_title}`}
          />
          <div className={styles.cardData}>
            <p className={styles.title}>{art.title}</p>
            <p className={styles.artist}>{art.artist_title}</p>
          </div>
        </Link>
      </div>
    </>
  );
}
