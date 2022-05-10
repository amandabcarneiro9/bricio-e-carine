import "./confirm.scss";
import TypeAnimated from "../../components/typeAnimed/TypeAnimated";

export default function Confirme() {
  return (
    <div className="confirme-container">
      <div className="__text-to-confirmation">
        Sua presença é muito importante para nós, mas entenderemos caso você não
        possa ir. <br />
        Por isso, por questões organizacionais, pedimos que você confirme sua
        presença através do whatsApp da nossa cerimonialista abaixo:
      </div>
      <a
        className="__link-to-wpp"
        target="_blank"
        href="https://api.whatsapp.com/send?phone=5512988000008"
        rel="noreferrer"
      >
        <TypeAnimated text="Confirme aqui!" timeToComplete={1500} />
      </a>
      <span className="__text-send">
        Diga que quer confirmar presença para o casamento de Carine e Fabricio
        com seu nome e de seu(s) acompanhate(s)
      </span>
    </div>
  );
}
