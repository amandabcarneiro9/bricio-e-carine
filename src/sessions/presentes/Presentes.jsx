import "./presentes.scss";
import casasBahia from "../../images/Casas_Bahia.png";
import havan from "../../images/havan-logo-6.png";

export default function Presentes() {
  return (
    <div className="presentes">
      <h2 className="__title">Nossa lista de presentes</h2>
      <p className="__message">
        Querido convidado, seja bem-vindo a nossa lista de presentes. Pensamos
        em tudo com muito carinho para que você se sinta a vontade para nos
        presentear com o que puder. <br />
        Tenho certeza que qualquer contribuição nos fará felizes!!
      </p>
      <span className="__note">
        Você pode encontrar nossas lista nas seguintes lojas:
      </span>
      <div className="__links">
        <a
          target="_blank"
          href="https://listas.casasbahia.com.br/carineefabricio"
          rel="noreferrer"
        >
          <img
            src={casasBahia}
            alt="logo das casas Bahia"
            className="__image"
          />
        </a>

        <a
          target="_blank"
          href="https://lista.havan.com.br/Convidado/ItensListaPresente/596402"
          rel="noreferrer"
        >
          <img src={havan} alt="logo das Havan" className="__image" />
        </a>
      </div>
    </div>
  );
}
