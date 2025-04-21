test('Add to cart: basic function call', () => {
  const AddToCart = jest.fn();
  AddToCart('Product 1');
  expect(AddToCart).toHaveBeenCalledWith('Product 1');
  expect(AddToCart).toHaveBeenCalledTimes(1);
});