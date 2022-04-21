import cf from "../../images/c&f.jpeg";
import "./main.scss";
export default function Main() {
  return (
    <div className="main">
      <h1 className="__names">Carine & Fabrício</h1>
      <h3 className="__mention">
        " O amor se compõe de uma só alma que habita em dois corpos"
      </h3>

      <div className="__photo">
        <img src={cf} alt="Fabricio e Carine" />
      </div>
      <span className="__date">17 setembro, 2022 | Caçapava - SP</span>
    </div>
  );
}
