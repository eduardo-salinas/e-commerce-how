import React from "react";
import { Link } from "react-router-dom";
import { StyledOrders } from "../styled.js";

const ItemOrder = ({ order }) => {
    let type = "";
    if (order.state === "En preparación") type = "process";
    else if (order.state === "Finalizado") type = "complete";
    else if (order.state === "Enviado") type = "sent";
    else if (order.state === "Cancelado") type = "cancel";
    const reducer = (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue);
    const countProduct = order?.invoice.items.map(el=>el.quantity);


    return (
        <>
        {order.user && 
            <StyledOrders>
            <Link to={`/order/${order._id}`} className='link-user'>
                <li className="name">{order.user.name} {order.user.lastName}</li>
            </Link>
            <li className="email">{order.user.email}</li>
            <li className="cant">
                <p>Cant.Prod.: {countProduct?.reduce(reducer)}</p>
                <p className="amount">${order.invoice.totalAmount}</p>
            </li>
            <li className={type}>{order.state}</li>
            <li className="date">{order.invoice.date.slice(0,10)}</li>
        </StyledOrders>
        }
        </>
    )
};

export default ItemOrder;