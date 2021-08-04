import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { addToCart,modifyItemCart } from "../../redux/actions/cart";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector(state=> state.cart);

  const buyWine = (product) => {
    if(cart.find(el => el._id === product._id)){
      if(product.quantity < product.stock){
        const obj= JSON.parse(window.localStorage.getItem(`${product.name}`))
        obj.quantity+=1
        window.localStorage.setItem(`${product.name}`, JSON.stringify(obj));
        dispatch(modifyItemCart(obj));
      }
    }else{
      console.log('entro pero no deberia')
      dispatch(addToCart(product));
      window.localStorage.setItem(`${product.name}`, JSON.stringify(product));
    }
  };


  return (
    <div>
      {product.name ? (
        <div className="container-card">
          <Link to={`/product/${product._id}`}>
            <div className="card-image">
              <img src={product.imageUrl} alt={product.name} />
            </div>
          </Link>
          <div className="card-sales">
            <h3 className="card-name">{product.name}</h3>
            <hr className="line-div" />
            <p className="card-adds">{product.category}</p>
            <h2 className="card-price">$ {product.price}</h2>
            <div className="card-buttonsDiv">
              {product.stock > 0 ? 
                <button
                  className="card-buttons_build"
                  onClick={() => buyWine(product)}
                >
                  <FaCartPlus />
                  AGREGAR
                </button>
                :
                <button className="card-buttons_disabled">
                  NO HAY STOCK
                </button>
              }
            </div>
          </div>
        </div>
      ) : (
        <h1>No hay coincidencias</h1>
      )}
    </div>
  );
};

export default ProductCard;
