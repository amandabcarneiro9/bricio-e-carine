import DonationItem from "./DonationItem";
import "./products.scss";

export default function ProductsSession() {
  return (
    <div className="product_container">
      <h2 className="__content">
        Você também pode nos ajudar com as despesas do Casamento escolhendo um
        dos valores abaixo ou qualquer valor que puder através deste link:
      </h2>
      <a
        className="__nubank-link"
        target="_blank"
        href="https://nubank.com.br/pagar/3f6wx/UnfBNhQZum"
        rel="noreferrer"
      >
        Link para o Nubank
      </a>
      <div className="__products">
        <DonationItem name="R$50,00" />
        <DonationItem name="R$100,00" />
        <DonationItem name="R$150,00" />
        <DonationItem name="R$200,00" />
        <DonationItem name="R$250,00" />
        <DonationItem name="R$300,00" />
        <DonationItem name="R$350,00" />
        <DonationItem name="R$400,00" />
      </div>
    </div>
  );
}
