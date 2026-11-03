import styles from "./Thumbnail.module.css";

export default function Thumbnail({ photo, zIndex }) {
  return (
    <img
      className={styles.thumbnail}
      src={photo.src}
      alt={photo.alt}
      style={{ zIndex }}
    />
  );
}
