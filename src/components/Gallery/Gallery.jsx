import Thumbnail from "../Thumbnail/Thumbnail";
import Featured from "../Featured/Featured.jsx";
import styles from "./Gallery.module.css";
import { photos } from "../../lib/photo.js";
import { useRef } from "react";
import { useGalleryAnimation } from "../../hooks/useGalleryAnimation.js";

export default function Gallery() {
  const featured = photos[0];
  const wrapperRef = useRef(null);
  const thumbRefs = useRef([]);
  const openRef = useRef(null);
  const featuredRef = useRef(null);

  const { open, close } = useGalleryAnimation({
    wrapperRef,
    thumbRefs,
    openRef,
    featuredRef,
    count: photos.length,
  });

  return (
    <main className={styles.gallery}>
      <div className={styles.stack}>
        <div className={styles.thumbnails} ref={wrapperRef}>
          {photos.map((photo, i) => (
            <Thumbnail
              key={photo.id}
              photo={photo}
              zIndex={photos.length - i}
            />
          ))}
        </div>
        <button
          type="button"
          className={styles.open}
          onClick={open}
          ref={openRef}
        >
          <span aria-hidden="true">+</span> Open
        </button>
      </div>
      <Featured photo={featured} onClose={close} containerRef={featuredRef} />
    </main>
  );
}
