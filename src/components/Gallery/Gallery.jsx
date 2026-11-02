import styles from "./Gallery.module.css";

export default function Gallery() {
  return (
    <main className={styles.gallery}>
      <div>
        <button type="button" className={styles.open}>
          <span aria-hidden="true">+</span> Open
        </button>
      </div>
    </main>
  );
}
