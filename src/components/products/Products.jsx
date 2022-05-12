import DonationItem from "./DonationItem";
import "./products.scss";

export default function ProductsSession() {
  return (
    <div className="product_container">
      <h2 className="__content">
        Você também pode nos ajudar com qualquer quantia para nossa Lua de Mel
        escolhendo algum dos itens abaixou ou doando uma quantia direta
      </h2>
      <div className="__products">
        <DonationItem name="Drinks para o casal" price="50,00" />
        <DonationItem name="Drinks para o casal" price="50,00" />
        <DonationItem name="Drinks para o casal" price="50,00" />
        <DonationItem name="Drinks para o casal" price="50,00" />
        <DonationItem name="Drinks para o casal" price="50,00" />
        <DonationItem name="Drinks para o casal" price="50,00" />
        <DonationItem name="Drinks para o casal" price="50,00" />
        <DonationItem name="Drinks para o casal" price="50,00" />
      </div>
    </div>
  );
}
