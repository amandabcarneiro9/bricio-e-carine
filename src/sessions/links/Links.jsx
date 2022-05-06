import "./links.scss";
import { Link } from "react-router-dom";

export default function Links() {
  return (
    <div className="nav-links">
      <Link to="/gallery">
        <div className="__link">photos</div>
      </Link>

      <div className="__link">lista de presentes</div>
      <div className="__link">confirme sua presença</div>
      <div className="__link">mapa</div>
    </div>
  );
}
