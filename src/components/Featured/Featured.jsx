import styles from "./Featured.module.css";

export default function Featured({ photo, onClose, containerRef, closeRef }) {
  return (
    <div className={styles.container} ref={containerRef}>
      <button
        type="button"
        className={styles.close}
        onClick={onClose}
        ref={closeRef}
      >
        <span aria-hidden="true">−</span> Close
      </button>
      <img
        className={styles.image}
        src={photo.src}
        alt={photo.alt}
        draggable={false}
      />
      <p className={styles.caption}>{photo.caption}</p>
    </div>
  );
}
