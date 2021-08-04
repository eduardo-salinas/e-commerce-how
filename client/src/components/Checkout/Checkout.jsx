import {useEffect} from 'react';
import {getProfile} from '../../redux/actions/request';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import StyledDiv from './styled';
import {mercadoPagoCart} from '../../utils/setMpCart';
import {checkOutMp} from '../../redux/actions/sending';

const Checkout = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const cart = useSelector((state) => state.cart);

	useEffect(() => {
		return dispatch(getProfile());
	}, [dispatch]);

	const checkMp = () => {
		let aux = mercadoPagoCart(cart);
		return dispatch(checkOutMp(aux));
	};
	return (
		<StyledDiv>
			{window.sessionStorage.userLog === 'on' ? (
				user.map((el) => {
					return (
						<div className='container-form'>
							<h1>Paso 2</h1>
              <div className='last-tap'>
                <h1>Finaliza tu compra {el.name}!</h1>
                <p>Elije el medio de pago que te parezca conveniente.</p>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Button
                      className='mercadoPago'
                      variant='contained'
                      onClick={() => {
                        checkMp();
                      }}
                    >
                      Mercado Pago
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Link to='/checkout/stripe' className='ref-link'>
                      <Button variant='contained'>Tarjeta de Credito</Button>
                    </Link>
                  </Grid>
                </Grid>
              </div>
						</div>
					);
				})
			) : (
				<Redirect to='/login' />
			)}
		</StyledDiv>
	);
};

export default Checkout;
