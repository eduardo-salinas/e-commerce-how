import { React, useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail, getProfile } from "../../redux/actions/request";
import { addToCart } from "../../redux/actions/cart";
import { Link } from "react-router-dom";
import StyledDiv from "./style";
import StarRatingComponent from "react-star-rating-component";
import { FaWineGlass } from "react-icons/fa";
import emptyheart from "../../assets/image/emptyheart.png";
import fullheart from "../../assets/image/fullheart.png";
import {
  addReview,
  addToWishlist,
  removeFromWishlist,
} from "../../redux/actions/sending";
import Loading from "../Loading/Loading";

const ProductDetail = ({ match }) => {
  const dispatch = useDispatch();
  const detail = useSelector((store) => store.productDetail);
  const cart = useSelector((store) => store.cart);
  const load = useSelector((store) => store.loading);
  const [count, setCount] = useState(0);
  const [stars, setStars] = useState(0);
  const fixed = useRef(match.params.id);
  const [wishlistBoolean, setWishlistBoolean] = useState(false);
  const [content, setContent] = useState("");
  const [calification, setCalification] = useState(0);
  const [errors, setErrors] = useState("");
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (window.sessionStorage.getItem("userLog")) {
      dispatch(getProfile());
    }
  }, [dispatch]);

  useEffect(() => {
    if (user && user[0]?.wishlist.includes(detail._id)) {
      setWishlistBoolean(true);
    } else {
      setWishlistBoolean(false);
    }
  }, [user, detail._id]);

  useEffect(() => {
    dispatch(getProductDetail(fixed.current));
  }, [dispatch, detail._id]);

  useEffect(() => {
    if (cart.length > 0) {
      let wine = cart.find((e) => e._id === detail._id);
      if (wine) {
        setCount(wine.quantity);
      }else{
        setCount(0)
      }
    }
  }, [cart, detail._id]);

  useEffect(() => {
    if (detail.rating) {
      let totalStars = detail.rating.reduce((a, b) => a + b, 0);
      setStars(totalStars / detail.rating.length);
    }
  }, [detail]);

  const handleClick = () => {
    let obj = {
      ...detail,
      quantity: count,
    };
    if (count < 1 || count > detail.stock) {
      return setErrors(
        `La cantidad máxima es: ${detail.stock}, y la mímina es 1 `
      );
    }
    dispatch(addToCart(obj));
    window.localStorage.setItem(`${detail.name}`, JSON.stringify(obj));
  };

  const handleWishlist = (e) => {
    if (e === "remove") {
      dispatch(removeFromWishlist({ id: detail._id }));
      setWishlistBoolean(false);
    }
    if (e === "add") {
      dispatch(addToWishlist({ id: detail._id }));
      setWishlistBoolean(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (calification < 1 || calification > 5) {
      setErrors("");
    }
    dispatch(
      addReview({
        content: content,
        id: detail._id,
        calification: calification,
      })
    );
    setContent("");
    setCalification(0);
  };

  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <StyledDiv>
          <div className="detail-img">
            <img src={detail.imageUrl} alt={detail.name} />
          </div>
          <div className="detail-explain">
            <div className="detail-render">
              <h2>{detail.name}</h2>
              <h2> $ {detail.price}</h2>
              <h3>Bodega: {detail.vineyard}</h3>
              <h3>Categoría: {detail.category}</h3>
              <div className="detail-varietal">
                <h3>Varietal/es: </h3>
                {detail.varietal &&
                  detail.varietal.map((e) => {
                    return <h3 key={e}>  {e}</h3>;
                  })}
              </div>
              <div className="detail-stars">
                <h3>
                  Puntaje:
                  <StarRatingComponent
                    name="rateWine"
                    editing={false}
                    renderStarIcon={() => (
                      <span>
                        <FaWineGlass />
                      </span>
                    )}
                    starCount={5}
                    value={stars}
                  />
                </h3>
              </div>
              <div className="product-description">
                <h3>Detalle: {detail.description}</h3>
              </div>
              {detail.stock < 1 ? (
                <div className="detail-btn">
                  <h3>SIN STOCK</h3>
                </div>
              ) : (
                <div className="detail-btn">
                  <input
                    type="number"
                    min={1}
                    max={detail.stock}
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                  />
                  <button onClick={() => handleClick()}>AGREGAR</button>
                  {window.sessionStorage.getItem("userLog") ? (
                    wishlistBoolean ? (
                      <button
                        className="btn-wishlist"
                        onClick={() => {
                          handleWishlist("remove");
                        }}
                      >
                        <img
                          className="btn-wishlist"
                          alt="Couldn't load"
                          src={fullheart}
                        />
                      </button>
                    ) : (
                      <button
                        className="btn-wishlist"
                        onClick={() => {
                          handleWishlist("add");
                        }}
                      >
                        <img
                          className="btn-wishlist"
                          alt="Couldn't load"
                          src={emptyheart}
                        />
                      </button>
                    )
                  ) : null}
                  <h3>{errors}</h3>
                </div>
              )}
            </div>
            <div>
              {window.sessionStorage.getItem("userLog") ? (
                <div>
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <textarea
                      className="text-area"
                      type="text"
                      placeholder="Agregue su opinión sobre este producto..."
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                    />
                    <div className="rating">
                      Califíque este vino...
                      <input
                        type="number"
                        min={1}
                        max={5}
                        value={calification}
                        onChange={(e) => setCalification(e.target.value)}
                      ></input>
                      <button type="submit">CALIFICAR</button>
                      <Link to={"/catalogo"}>
                        <button className="back">VOLVER</button>
                      </Link>
                    </div>
                  </form>
                </div>
              ) : null}
            </div>
            {
              detail.reviews && detail.reviews.length > 0 ?
              <div className='container-reviews'>
                <h1>Reviews: </h1>
                <ul className='reviews-list'>
                  {
                    detail.reviews && detail.reviews.map((el,idx)=>{
                      return <li key={idx} className='review'>
                      <h4>{el.name}: </h4> 
                      <h5>{el.content}</h5>
                      </li>
                    })
                  }
                </ul>
              </div> :null
            }
          </div>
        </StyledDiv>
      )}
    </>
  );
};

export default ProductDetail;
