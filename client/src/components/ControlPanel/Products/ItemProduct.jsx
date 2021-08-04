import React from "react";
import { Link } from "react-router-dom";
import { StyledProduct } from "../styled.js";
import Button from "@material-ui/core/Button";

const ItemProduct = ({ product }) => {
  if(product._id){
    return (
      <StyledProduct>
        <Link to={`/admin/editProduct/${product._id}`}>
          <li className="name">{product.name}</li>
        </Link>
        <li className="price">$ {product.price}</li>
        <li className="vineyard">{product.vineyard}</li>
        <li className="stock">Stock: {product.stock}</li>
        <Link to={`/admin/editProductVarietals/${product._id}`}>
          <Button variant="contained">EDITAR VARIETALES</Button>
        </Link>
        <Link to={`/admin/editProduct/${product._id}`}>
          <Button variant="contained">EDITAR</Button>
        </Link>
        {/* ESTE BOTON PODRÍA ESTAR EN EDITAR, PORQUE SI LE ERRA EL USUARIO, TAMO EN PROBLEMA */}
        {/* <Button className='delete-product' variant="contained" color="secondary" >X</Button> */}
      </StyledProduct>
    );
  }else{
    return (
      <StyledProduct>
          <li className="name">{product}</li>
      </StyledProduct>
    );
  }
};

export default ItemProduct;
