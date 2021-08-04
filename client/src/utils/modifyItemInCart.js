export const modifyItemInCart = (obj, array) => {
  let newArr = array.map((e) => {
    if (e._id === obj._id) {
      e = {
        ...e,
        quantity: obj.quantity,
      };
    }
    return e;
  });
  return newArr;
};

export default modifyItemInCart;
