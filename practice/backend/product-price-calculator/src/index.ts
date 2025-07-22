type Product = {
  name: string;
  price: number;
  discount: number;
};

function calcTotal(product: Product): number {
  const discount = (product.price * product.discount) / 100;
  const finalPrice = product.price - discount;
  return finalPrice;
}

const product: Product = {
  name: "Bottom",
  price: 600,
  discount: 20,
};

console.log(`Final Price of ${product.name} is ${calcTotal(product)}`);
