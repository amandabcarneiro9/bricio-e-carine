import cf from "../../images/c&f.jpeg";
import "./main.scss";

export default function Main() {
  return (
    <div className="main">
      <div className="__photo">
        <img src={cf} alt="Fabricio e Carine" />
      </div>
      <span className="__date">17 setembro, 2022 | Caçapava - SP</span>
    </div>
  );
}
