/* eslint-disable comma-dangle */
const getters = {
  productItems: (state) => state.productItems,
  // Acessando o nome das categorias:

  productList: (state) => Object.keys(state.productItems),
  // Acessando o valor armazenado no objeto fixo:

  productFixo: (state) => Object.values(state.productItems)[0][0],

  productTV: (state) => Object.values(state.productItems)[1].map((item) => item),

  productInternet: (state) => Object.values(state.productItems)[2].map((item) => item),

  addProductToCart: (state) => (name, prod) => {
    state.cartItems[name].product = prod.title;
    state.cartItems[name].price = prod.price;
    const sumTotalPrice = Object.values(state.cartItems).reduce(
      (acc, curr) => acc + Number(curr.price),
      0
    );
    state.totalPrice = sumTotalPrice;
    return state.totalPrice;
  },

  removeAllItems: (state) => {
    state.totalPrice = 0;
    const resetCart = {
      internet: {
        product: '',
        price: 0,
      },
      tv: {
        product: '',
        price: 0,
      },
      fixo: {
        product: '',
        price: 0,
      },
    };
    state.cartItems = resetCart;
  },
};

export default getters;
