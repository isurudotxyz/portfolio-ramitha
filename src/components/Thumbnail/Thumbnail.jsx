import styles from "./Thumbnail.module.css";

export default function Thumbnail({ photo }) {
  return <img className={styles.thumbnail} src={photo.src} alt={photo.alt} />;
}
