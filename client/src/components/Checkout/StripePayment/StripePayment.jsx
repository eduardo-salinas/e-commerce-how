import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import swal from "sweetalert";
import {checkOut} from "../../../redux/actions/sending";
import {setPayment} from "../../../redux/actions/cart";
import Button from "@material-ui/core/Button";
import StyledDiv from "./styled";
import {Redirect} from "react-router";

const StripePayment = () => {
	const stripe = useStripe();
	const elements = useElements();
	const dispatch = useDispatch();
	const payment = useSelector((state) => state.payment);
	const cart = useSelector((state) => state.cart);
	let total = 0;

	useEffect(() => {
		dispatch(setPayment());
	}, [dispatch]);

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	const {error, paymentMethod} = await stripe.createPaymentMethod({
	// 		type: "card",
	// 		card: elements.getElement(CardElement),
	// 	});
	// };

	const handleClick = async (e) => {
		e.preventDefault();
		swal({
			title: "Confirmacion de compra",
			text: "¿Estas seguro que desea confirmar la compra?",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		}).then(async (willDelete) => {
			if (willDelete) {
				const {error, paymentMethod} = await stripe.createPaymentMethod({
					type: "card",
					card: elements.getElement(CardElement),
				});
				if (!error) {
					const {id} = paymentMethod;
					console.log(id);
					dispatch(checkOut({id, payment}));
					elements.getElement(CardElement).clear();
				} else {
					console.log(error);
				}
				swal("Compra exitosa", {
					icon: "success",
				});
			} else {
				swal("Accion cancelada", {
					icon: "error",
				});
			}
		});
	};

	return (
		<StyledDiv>
			<h1>Detalle: </h1>
			<div className="detail">
				<ul>
					{cart &&
						cart.map((el, idx) => {
							total = total + el.price * el.quantity;
							return (
								<li key={idx}>
									<div>{el.name}</div>
									<div>{el.quantity} un.</div>
									<div>$ {el.price}</div>
								</li>
							);
						})}
				</ul>
				<h2>Importe total: $ {total}</h2>
			</div>
			<form onSubmit={(e) => handleClick(e)} className="form-container">
				<CardElement className="form-control" />
				<Button type="submit">ENVIAR</Button>
			</form>
			{!cart.length ? (
				window.sessionStorage.getItem("admin") ? (
					<Redirect to="/admin/controlpanel"></Redirect>
				) : (
					<Redirect to="/profile"></Redirect>
				)
			) : null}
		</StyledDiv>
	);
};

export default StripePayment;
