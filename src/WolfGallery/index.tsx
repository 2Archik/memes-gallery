import { useState } from "react";

import { Photo } from "./types";

import { Navigation } from "./Navigation";
import { PreviewGallery } from "./PreviewGallery";
import { TransitionPhoto } from "./TransitionPhoto";

import style from "./index.module.scss";

interface MemesGalleryProps {
  photos: Photo[];
}

export const MemesGallery: React.FC<MemesGalleryProps> = ({ photos }) => {
  if (!photos.length) {
    return null;
  }

  const [indexActivePhoto, setIndexActivePhoto] = useState(0);
  const prevPhoto = photos[indexActivePhoto - 1];
  const nextPhoto = photos[indexActivePhoto + 1];

  return (
    <>
      <h1 className={style.title}>Biba and Boba - Semenov and Koroba</h1>
      <div className={style.memesGallery}>
        <div className={style.memesGalleryContainer}>
          <TransitionPhoto
            className={style.memesGalleryTransitionPhoto}
            photos={photos}
            indexActivePhoto={indexActivePhoto}
          />
          <Navigation
            className={style.memesGalleryNavigation}
            disabledPrev={!prevPhoto}
            disabledNext={!nextPhoto}
            onPrevClick={() => {
              setIndexActivePhoto(indexActivePhoto - 1);
            }}
            onNextClick={() => {
              setIndexActivePhoto(indexActivePhoto + 1);
            }}
          />
        </div>
        <PreviewGallery
          className={style.memesGalleryPreviewList}
          indexActivePhoto={indexActivePhoto}
          photos={photos}
          setNewPhoto={setIndexActivePhoto}
        />
      </div>
    </>
  );
};
