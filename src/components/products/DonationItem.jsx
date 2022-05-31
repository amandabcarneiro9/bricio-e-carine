import "./donationItem.scss";

export default function ItemDonation({ name }) {
  return (
    <div className="produto">
      <h3 className="__item">{name}</h3>
    </div>
  );
}
