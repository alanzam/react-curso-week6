export const ActionConstants = {
  AddToCart: 'AddToCart'
};

export const ActionCreators = {
  addToCart: (productName) => ({
    type: ActionConstants.AddToCart,
    payload: productName,
    ga: true
  })
};
