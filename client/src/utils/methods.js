export const filterWines = (payload, filtered) => {
  if (payload.filterVarietals.length && payload.category === "default") {
    return filtered.filter((el) => {
      let validate = true;
      for (let i = 0; i < payload.filterVarietals.length; i++) {
        if (!el.varietal.includes(payload.filterVarietals[i])) {
          validate = false;
        }
      }
      return validate;
    });
  }
  if (payload.filterVarietals.length && payload.category !== "default") {
    return filtered
      .filter((el) => el.category === payload.category)
      .filter((el) => {
        let validate = true;
        for (let i = 0; i < payload.filterVarietals.length; i++) {
          if (!el.varietal.includes(payload.filterVarietals[i])) {
            validate = false;
          }
        }
        return validate;
      });
  }
  if (payload.category !== "default" && !payload.filterVarietals.length) {
    return filtered.filter((el) => el.category === payload.category);
  }
};

export const filterOnOff = (payload) => {
  if (payload.filterVarietals.length && payload.category === "default") {
    return "on";
  }
  if (payload.filterVarietals.length && payload.category !== "default") {
    return "on";
  }
  if (!payload.filterVarietals.length && payload.category !== "default") {
    return "on";
  }
  return "off";
};

export const filterUsers = (payload) => {
  return payload.users.filter((user) =>
  ( user.name.toLowerCase().includes(payload.name.toLowerCase()) || user.lastName.toLowerCase().includes(payload.name.toLowerCase()) )
  );
};

export const setPaymentReducer = (state) => {
  let totalAmount = 0;
  let items = [];
  state.cart.map((el) => {
    items.push({ name: el.name, price: el.price, quantity: el.quantity });
    return (totalAmount += el.quantity * el.price); // ESTO DEJAMOS PARA VER
  });
  return { totalAmount: totalAmount, items: items };
};
