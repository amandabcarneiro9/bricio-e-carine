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
        <p className="__history">
          Nos conhecemos dia 28/12/2020 na internet, passamos a sair e nos
          conhecermos melhor, tiveram momentos bons e ruins, quando todos
          duvidaram de nós dois nos acreditamos que daria certo e lutamos um
          pelo outro. Ele morando em Caçapava, trabalhando viajando pelo estado
          de São Paulo e eu morando em Campos do Jordão, trabalhando e torcendo
          para que o final de semana chegasse.
        </p>
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
        <p className="__history">
          E no dia 14/08/2021 ele me pediu em noivado, foi uma surpresa
          maravilhosa no Capivari em Campos do Jordão, no mesmo local onde me
          pediu em namoro, eu fiquei tão feliz que fiquei em choque, não sabia o
          que fazer rs, foi um dos melhores momentos de nós dois, e desde então
          estamos morando juntos e planejando esse tão sonhado dia.
        </p>
      </div>
    </div>
  );
}
