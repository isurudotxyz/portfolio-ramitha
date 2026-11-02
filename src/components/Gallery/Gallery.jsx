import Thumbnail from "../Thumbnail/Thumbnail";
import styles from "./Gallery.module.css";
import { photos } from "../../lib/photo.js";

export default function Gallery() {
  return (
    <main className={styles.gallery}>
      <div>
        <div className={styles.thumbnails}>
          {photos.map((photo) => (
            <Thumbnail key={photo.id} photo={photo} />
          ))}
        </div>
        <button type="button" className={styles.open}>
          <span aria-hidden="true">+</span> Open
        </button>
      </div>
    </main>
  );
}
