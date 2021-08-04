import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAll } from "../../../redux/actions/request";
import ProductCard from "../../ProductCard/ProductCard";

const Destacados = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  let destacados = [];

  useEffect(() => {
    dispatch(getProductsAll());
  }, [dispatch]);

  if (products.length) {
    for (let i = 0; i < 3; i++) {
      destacados.push(products[i]);
    }
  }

  return (
    <div className="container-destacados">
      <div className="title-destacados">
        <h2>
          Vinos <span>Destacados</span>
        </h2>
        <hr />
      </div>
      <div className="productos-destacados">
        {destacados &&
          destacados.map((product, idx) => {
            return <ProductCard product={product} />;
          })}
      </div>
    </div>
  );
};

export default Destacados;
