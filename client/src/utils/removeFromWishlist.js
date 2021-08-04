const removeFromWishlist = (payload, wishlist) => {
  const aux = wishlist.filter((e) => e !== payload);
  console.log(aux);
  return aux;
};
