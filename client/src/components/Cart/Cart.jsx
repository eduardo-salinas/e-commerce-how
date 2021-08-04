import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {removeFromCart, modifyItemCart} from "../../redux/actions/cart";
import StyledCartItems from "./styled.js";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";

export const Cart = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cart);
	const [total, setTotal] = useState(0);
	//funcion onclick pa' despachar la action

	useEffect(() => {
		let aux = 0;
		cartItems.map((e) => {
			return aux = aux + e.price * e.quantity;
		});
		setTotal(aux);
	}, [cartItems]);

	const handleOnClick = (e, product) => {
		if (e === "x") {
			dispatch(removeFromCart(product._id));
			localStorage.removeItem(`${product.name}`);
		} else {
			let newQuantity = product.quantity;
			if (e === "+" && newQuantity < product.stock) {
				newQuantity++;
			} else {
				if (newQuantity === 1) return;
				newQuantity--;
			}
			let obj = {
				...product,
				quantity: newQuantity,
			};
			dispatch(modifyItemCart(obj));
			window.localStorage.setItem(`${product.name}`, JSON.stringify(obj));
		}
	};

	return (
		<>
			<StyledCartItems>
				<div className="cart-total">
					<div className="total">
						<Grid
							container
							direction="row"
							justifyContent="space-between"
							alignItems="center"
						>
							<Grid item xs={6}>
								<h2>Total: $ {total}</h2>
							</Grid>
							<Grid item xs={6}>
								{window.sessionStorage.userLog === "on"?
									cartItems.length> 0 ? 
									<Link to="/precheckout">
										<Button variant="contained">COMPRAR!</Button>
									</Link>
									:null
									: 
									<Link to="/create">
										<Button variant="contained">REGISTRARSE</Button>
									</Link>
								}
							</Grid>
						</Grid>
					</div>
				</div>
				<hr />
				{cartItems.length ? (
					cartItems.map((e, index) => {
						return (
							<div key={index} className="container-cards_products">
								<div className="container-img_card">
									<img className="img-card" src={e.imageUrl} alt={e.name} />
								</div>
								<div className="container-title">
									<h2>{e.name}</h2>
								</div>
								<div className="container-btn">
									<button
										className="btn-item-cart"
										onClick={() => {
											handleOnClick("-", e);
										}}
									>
										-
									</button>
									<h2>{e.quantity}</h2>
									<button
										className="btn-item-cart"
										name="+"
										onClick={() => {
											handleOnClick("+", e);
										}}
									>
										+
									</button>
								</div>
								<div className="product-card_price">
									<h2>
										Stock: <span>{e.stock}</span>
									</h2>
									<h2>$ {e.price * e.quantity}</h2>
								</div>
								<div className="btn-delete">
									<button
										className="btn-item-delete"
										onClick={() => {
											handleOnClick("x", e);
										}}
									>
										X
									</button>
								</div>
							</div>
						);
					})
				) : (
					<h1 className="h1Cart">No hay ningún producto en el carrito</h1>
				)}
			</StyledCartItems>
		</>
	);
};

export default Cart;
