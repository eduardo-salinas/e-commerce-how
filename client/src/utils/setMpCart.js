export const mercadoPagoCart = (arr) => {
	let arrAux = arr.map((e) => {
		return {title: e.name, quantity: e.quantity, unit_price: e.price};
	});
	return {cart: arrAux};
};

export default mercadoPagoCart;
