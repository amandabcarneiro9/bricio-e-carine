import "./donationItem.scss";

export default function ItemDonation({ name, price }) {
  return (
    <div className="produto">
      <h3 className="__item">{name}</h3>
      <span className="__price">R${price}</span>
      <button>Ajudar</button>
    </div>
  );
}
