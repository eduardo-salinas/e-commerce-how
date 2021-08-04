import {useEffect} from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import queryString from "querystring";
import {useDispatch, useSelector} from "react-redux";
import {finishMpSale} from "../../../redux/actions/sending.js";
import {setPayment} from "../../../redux/actions/cart.js";
import {reset} from "../../../redux/actions/index.js";
import {DivMP} from "./style";

export const MercadoPago = () => {
	const location = useLocation();
	const {status} = queryString.parse(location.search);
	const payment = useSelector((state) => state.payment);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setPayment());
	}, [dispatch]);

	const handleClick = () => {
		dispatch(finishMpSale(payment));
		dispatch(reset("cart"));
	};

	return (
		<DivMP>
			{status === "approved" ? (
				<div>
					<h2 className="h2MP">Su compra fue realizada con exito!</h2>
					<Link to="/">
						<button
							className="btnMP"
							onClick={() => {
								handleClick();
							}}
						>
							VOLVER A HOME
						</button>
					</Link>
				</div>
			) : (
				<div></div>
			)}
		</DivMP>
	);
};

export default MercadoPago;
