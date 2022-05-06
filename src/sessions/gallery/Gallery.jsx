import "./gallery.scss";
import photo from "../../images/c&f.jpeg";
import photo1 from "../../images/casal1.jpeg";
import photo2 from "../../images/casal2.jpeg";
import photo3 from "../../images/casal3.jpeg";
import photo4 from "../../images/casal4.jpeg";
import photo5 from "../../images/casal5.jpeg";
import { useState } from "react";

const photos = [photo, photo1, photo2, photo3, photo4, photo5];

export default function Gallery() {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  function selectPhoto({ currentTarget }) {
    setCurrentPhoto(parseInt(currentTarget.dataset.key));
  }

  return (
    <div className="container">
      <div className="__gallery">
        <h2>Caminhe pela nossa história através das nossas fotos</h2>
        <div className="__main-photo">
          <img
            src={photos[currentPhoto]}
            alt="Carine e Fabricio "
            className="__image"
          />
        </div>
        <div className="__set-photos">
          {photos.map((p, key) => (
            <img
              src={p}
              alt=""
              key={key}
              onClick={selectPhoto}
              data-key={key}
              className="__small-photo"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
