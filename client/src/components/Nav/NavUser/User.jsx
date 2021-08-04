import { useState, useEffect, useRef } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../../redux/actions/cart";

const User = () => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);
  const countCart = useSelector((state) => state.cart);
  const [cartCount, setCartCount] = useState(0);
  const [userLog, setUserLog] = useState("");
  const [admin, setAdmin] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("userLog") === "on") {
      setUserLog("on");
      if (sessionStorage.getItem("admin")) {
        setAdmin("on");
      }
    } else {
      setUserLog("off");
    }
  }, [userLog]);

  let prces = 0;
  let counter = 0;
  let fixed = useRef(prces);
  let quantityProduct = useRef(counter);

  useEffect(() => {
    if (window.localStorage) {
      Object.keys(window.localStorage).map((el) => {
        return dispatch(addToCart(JSON.parse(window.localStorage.getItem(`${el}`))));
      });
    }
  }, [dispatch]);

  useEffect(() => {
    if (countCart.length > 0) {
      //contador de precios
      let count = countCart.map((e) => e.price * e.quantity);
      const reducer = (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue);
      fixed.current = parseInt(count.reduce(reducer));
      setPrice(parseInt(fixed.current));
      //contador de cantidades
      let quantity = countCart.map((e) => e.quantity);
      quantityProduct.current = quantity.reduce(reducer);
      setCartCount(quantityProduct.current);
    }
    if (!countCart.length) {
      setCartCount(0);
      setPrice(0);
    }
  }, [countCart, dispatch]);

  const disconnect = () => {
    window.location.replace("/");
    window.sessionStorage.clear();
  };

  return (
    <div className="nav-user">
      <ul className="nav-list_usuario">
        <li>
          {userLog === "on" ? (
            <div className='loged-in'>
            {admin === 'on'?
              null
              :<Link to="/profile">PERFIL</Link>
            }
              <div>
                <Link onClick={() => disconnect()}>DESCONECTARSE</Link>
              </div>
              {admin === "on" ? (
                <Link to="/admin/controlpanel">PANEL DE CONTROL</Link>
              ) : null}
            </div>
          ) : (
            <div>
              <Link to="/create">CREAR CUENTA</Link>
              <Link to="/login">INICIAR SESIÓN</Link>
            </div>
          )}
        </li>
        <li>
          <Link to="/carrito">
            <FaShoppingCart /> CARRITO
          </Link>
        </li>
        <li className="nav-list_count"><div className='counter'>{cartCount}</div></li>
        <li className="nav-list_price">$ {price}</li>
      </ul>
    </div>
  );
};

export default User;
