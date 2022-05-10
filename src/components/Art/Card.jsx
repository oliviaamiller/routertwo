import { Link } from 'react-router-dom';
import styles from '../../App.css';


export default function ArtCard({ art }) {
  return (
    <>
    <div className={styles.card}>
      <Link to={`/art/${art.id}`}>
        <img
          className={styles.img}
          src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}
          alt={`${art.artwork_type_title} of eyes by ${art.artist_title}`} />
          <p>{art.title}</p>
          <p>{art.artist_title}</p>
      </Link>
    </div>
    </>
  )
}
