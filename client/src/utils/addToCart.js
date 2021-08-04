export const addToCart = (obj, array) => {
  const match = array.find((e) => obj._id === e._id);
  if (match === undefined) {
    return array.concat(obj);
  } else {
    return array.map((e) => {
      if (e._id === obj._id) {
        if(e.stock < e.quantity){
          e = { ...e, quantity: obj.quantity };
        }
      }
      return e;
    });
  }
};
