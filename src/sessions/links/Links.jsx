import "./links.scss";
import { Link } from "react-router-dom";

export default function Links({ onClose }) {
  return (
    <div className="nav-links">
      <Link to="/gallery" className="__link" onClick={onClose}>
        Caminhe pela nossa historia
      </Link>
      <Link to="/presentes" className="__link" onClick={onClose}>
        lista de presentes
      </Link>
      <Link to="/mapa" className="__link" onClick={onClose}>
        mapa do local
      </Link>

      <Link to="/gallery" className="__link" onClick={onClose}>
        confirme sua presença
      </Link>
    </div>
  );
}
