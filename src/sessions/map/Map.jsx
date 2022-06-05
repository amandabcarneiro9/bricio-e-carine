import "./map.scss";

export default function Map() {
  return (
    <div className="map-container">
      <div className="__call-to-come">
        Venha celebrar conosco esse dia tão importante em nossas vidas.
        <br /> Você é o nosso convidado especial!
      </div>
      <div className="__informations">
        <span className="__date">
          Sábado 17 Setembro 2022 16:00hs <br />
          Cerimônia e Recepção
        </span>
        <span className="__location">
          Rua Tereza Teodolinda Galvani n°200,
          <br /> São João da Boa Vista – Caçapava – SP
        </span>
      </div>
      <div className="__confirmation">
        Não se esqueça de confirmar a presença com a nossa cerimonialista
        <a href="/confirme-sua-presenca"> aqui</a>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5551068596997!2d-45.71980734948201!3d-23.040101884870275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc507f6ad81931%3A0x86505b8c47be2b7!2sR.%20Teresa%20Teodolinda%20Galvani%2C%20200%20-%20S%C3%A3o%20Jo%C3%A3o%20da%20Boa%20Vista%2C%20Ca%C3%A7apava%20-%20SP%2C%2012290%2C%20Brazil!5e0!3m2!1sen!2snl!4v1652193915456!5m2!1sen!2snl"
        width="400"
        height="400"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
