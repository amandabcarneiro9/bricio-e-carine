const originalData = [
  {
    name: "Cafézinho matinal dos noivos",
    price: 25,
    //   image: "cafezin.jpg",
  },
  {
    name: "Cerveja para comemorar o casamento",
    price: 50,
    //   image: "cerveja.jpg",
  },
  {
    name: "Bons drinks para os noivos",
    price: 70,
    //   image: "drinks.jpg",
  },
  {
    sector: "Você escolhe o destino da lua de mel dos noivos!",
  },
  {
    name: "Passeio de barco",
    price: 100,
    //   image: "camping.jpg",
  },
  {
    name: "Ajuda com as despesas do hotel",
    price: 200,
    //   image: "patagonia.jpg",
  },
  {
    name: "Ajuda com as passagens",
    price: 250,
    //   image: "alemao.jpg",
  },
  {
    promotion:
      "A cada <strong>R$400,00</strong> você escolhe um dos noivos para fazer serviços domésticos por um dia e agradecer pela sua amizade.",
  },
];

export const products = originalData.map((product, index, allProducts) => {
  const productBefore = allProducts.slice(0, index).reverse().find(isProduct);
  const productAfter = allProducts.slice(index + 1).find(isProduct);
  return {
    ...product,
    id: index + 1,
    isFirst: index === 0,
    isLast: index === allProducts.length - 1,
    productBefore: productBefore
      ? { name: productBefore.name, id: allProducts.indexOf(productBefore) + 1 }
      : null,
    productAfter: productAfter
      ? { name: productAfter.name, id: allProducts.indexOf(productAfter) + 1 }
      : null,
  };
});

function isProduct(candidate) {
  return "name" in candidate && "price" in candidate;
}
