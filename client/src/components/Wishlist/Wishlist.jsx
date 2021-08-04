import { React } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StyledDiv from "./styled";

export const Wishlist = () => {
  const user = useSelector((state) => state.user);
  const products = useSelector((state) => state.products);

  return (
    <StyledDiv>
      <div className='container-wishlist'>
        <h1>Tus productos de la lista de deseos</h1>
        {user[0] &&
          user[0].wishlist?.map((e, index) => {
            return products.map((product) => {
              if (product._id === e){
                return <div className='card-wish'>
                    <Link
                      key={product._id}
                      className="link"
                      to={`/product/${product._id}`}
                    >
                      <div className="divlink" key={index}>
                        <img src={product.imageUrl} alt={`${product.name}`}/>
                        <h3>{product.name}</h3>
                        <h3>{product.description}</h3>
                        <h3>${product.price}</h3>
                      </div>
                    </Link>
                  </div>
              }else{
                return null
              }
            });
          })}
      </div>
    </StyledDiv>
  );
};

export default Wishlist;
