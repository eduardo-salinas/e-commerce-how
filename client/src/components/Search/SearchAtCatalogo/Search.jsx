import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByName } from "../../../redux/actions/request";
import StyledDiv from "./styled.js";

const SearchAtCatalogo = () => {
  const [product, setProduct] = useState("");
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setProduct(e.target.value);
    dispatch(getProductsByName(e.target.value));
  };


  useEffect(() => {
    if (search.length === 0) {
      setProduct("");
    }
  }, [dispatch, search]);

  return (
    <StyledDiv>
      <div>
          <input
            type="search"
            placeholder="Buscar..."
            value={product}
            onChange={(e) => handleChange(e)}
          />
      </div>
    </StyledDiv>
  );
};

export default SearchAtCatalogo;
