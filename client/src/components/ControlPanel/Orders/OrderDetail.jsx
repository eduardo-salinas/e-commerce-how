import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetail, reset } from "../../../redux/actions";
import { StyledOrderDetail } from "../styled";
import { ButtonGroup, Button } from "@material-ui/core";
import { editOrderStatus } from "../../../redux/actions/sending";
import swal from "sweetalert";
import Loading from "../../Loading/Loading";
import { Link } from 'react-router-dom';


const OrderDetail = ({ match }) => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.orderDetail);
  const load = useSelector(state => state.loading);
  const id = useRef(match.params.id);

  useEffect(() => {
    dispatch(getOrderDetail(id.current));
    return dispatch(reset("orderDetail"));
  }, [dispatch]);

  const handleClick = (e) => {
    const value = e.currentTarget.value;
    swal({
      title: "¿Cambiar el estado de esta orden?",
      text: `Estas por cambiar el estado a ${value}`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(editOrderStatus(order._id, value, order.user.email));
        dispatch(getOrderDetail(match.params.id));
        swal("Estado modificado", {
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
    <>
      {window.sessionStorage.getItem("admin") ? (
        load ? <Loading /> : (
          <StyledOrderDetail>
            {order.user && (
              <div className='client'>
                <li>
                  Cliente: {order.user.name} {order.user.lastName}
                </li>
                <li> {order.user.email}</li>
                <li>Estado de la orden: {order.state}</li>
                <li>Domicilio: {order.user.address}</li>
                <li>Cambiar estado:</li>
                <li>
                  <ButtonGroup
                    color="secondary"
                    aria-label="outlined primary button group"
                  >
                    <Button
                      className="btn-prep"
                      onClick={handleClick}
                      value="En preparación"
                    >
                      En preparación
                    </Button>
                    <Button
                      className="btn-sent"
                      onClick={handleClick}
                      value="Enviado"
                    >
                      Enviado
                    </Button>
                    <Button
                      className="btn-done"
                      onClick={handleClick}
                      value="Finalizado"
                    >
                      Finalizado
                    </Button>
                    <Button
                      className="btn-cancel"
                      onClick={handleClick}
                      value="Cancelado"
                    >
                      Cancelado
                    </Button>
                  </ButtonGroup>
                </li>
              </div>)}
            {order.user && (
              <div className='product'>
                {order.invoice.items && order.invoice.items.length > 0 && (
                  <>
                    <p>Detalle de la compra</p>
                    {order.invoice.items.map((item) => {
                      return (
                        <div className='items'>
                          <li>{item.name} </li>
                          <li>Precio unitario: ${item.price} </li>
                          <li>Cantidad: {item.quantity} </li>
                        </div>
                      );
                    })}
                  </>
                )}
                <p> {order.invoice.date.slice(0, 10)}</p>
                <p>  $ {order.invoice.totalAmount}</p>
                <Link to={`/admin/controlpanel`}>
                  <button>VOLVER</button>
                </Link>
              </div>
            )}
            <div >
            </div>
          </StyledOrderDetail>
        )
      ) : <h1>No tiene permisos para ingresar aqui</h1>}
    </>
  );
};

export default OrderDetail;
