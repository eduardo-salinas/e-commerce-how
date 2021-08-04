import { useRef } from "react";
import { useSelector } from "react-redux";
import StyledDiv from "./styled";
import LOGO from "../../../assets/image/LOGO.png";

const OrderUser = ({ match }) => {
  const id = useRef(match.params.id);
  const orders = useSelector((state) => state.orders);
  const order = orders[id.current];

  return (
    <StyledDiv>
      {orders.length > 0 ? (
        <div>
          <div className="intro-orders">
            <h1>Detalle de la factura</h1>
            <img src={LOGO} alt="not fount" />
          </div>
          <ul className="details-orders">
            <div className='date-amount'>
            <li> {order.date.slice(0, 10)}</li>
            <li >
              Importe Total $ {order.invoice.totalAmount}
            </li>
            </div>
            <li>
              <ul className="details-orders">
                {order.invoice.items.map((el, idx) => {
                  return (
                    <li key={idx} className='item'>
                      <p className='name'>{el.name}</p>
                      <p className='detail'> {el.quantity} un.</p>
                      <p className='detail'> $ {el.price}</p>
                    </li>
                  );
                })}
              </ul>
            </li>

          </ul>
        </div>
      ) : (
        <h1>Dirección inválida</h1>
      )}
    </StyledDiv>
  );
};

export default OrderUser;
