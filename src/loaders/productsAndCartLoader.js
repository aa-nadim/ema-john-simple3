import { getStoredCart } from '../utilities/fakedb';

export const productsAndCartLoader = async () => {
  // get Products
  const productsData = await fetch('products.json');
  const products = await productsData.json();
  //console.log(products);

  // get cart
  const savedCart = getStoredCart();
  //console.log('savedCart', savedCart);
  const previousCart = [];

  for (const id in savedCart) {
    //console.log(id);
    const addedProduct = products.find((product) => product.id === id);
    //console.log(addedProduct);
    if (addedProduct) {
      const quantity = savedCart[id];
      //console.log(id, quantity);
      addedProduct.quantity = quantity;
      previousCart.push(addedProduct);
    }
  }
  return { products, previousCart };
};
