import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory,Redirect } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import {
  getOrderForUser,
  getProductsByName,
  getProductsByBarcode,
  reset,
  userFiltered,
  getProductsByVineyard

} from "../../redux/actions";

import Button from "@material-ui/core/Button";
import { StyledSearch } from "./styled";

const Search = ({ itemValue }) => {
  const [input, setInput] = useState("");
  const [barcode, setBarcode] = useState("");
  const entry = useRef(input.length);
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const history = useHistory();
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (entry.current === 0) {
      setInput("");
      setBarcode("");
    }
    return () => {
      dispatch(reset("searchUser"));
      dispatch(reset("search"));
    }
  }, [dispatch]);

  useEffect(()=>{
    if(store.search.length){
      if(store.search[0].barcode == parseInt(barcode)){
        setFlag(true)
      }
    }
  },[store.search, history,barcode])

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleChangeBarcode = (e) => {
    setBarcode(e.target.value);
    if (e.target.value.toString().length === 13) {
      dispatch(getProductsByBarcode(e.target.value))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (itemValue) {
      case "product":
        dispatch(getProductsByName(input))
        break;
      case "vineyard":
        dispatch(getProductsByVineyard(input))
        break;
      case "user":
        dispatch(userFiltered(input, store.users));
        break;
      case "order":
        dispatch(getOrderForUser(input));
        break;
      default:
        setInput("");
    }
    setInput("");
  };

  const handleClickReset = (value) => {
    switch (value) {
      case "product":
        dispatch(getProductsByName(""))
        break;
      case "vineyard":
        dispatch(getProductsByVineyard(""))
        break;
      case "user":
        dispatch(userFiltered("", store.users));
        break;
      case "order":
        dispatch(getOrderForUser(""));
        break;
      default:
        return
    }
  }


  return (
    <StyledSearch>
    <div>
      <form onSubmit={handleSubmit}>
        <div>
        <input
          type="search"
          placeholder="Buscar por nombre..."
          value={input}
          onChange={handleChange}
        />
        <Button className="btn" type='submit' variant="contained" onClick={handleSubmit}>
          <HiOutlineSearch />
        </Button>
        </div>
      </form>
        <div>
        {itemValue==="product"?<input
          type="number"
          placeholder="Código de Barras..."
          value={barcode}
          onChange={handleChangeBarcode}
        />:null
        }
        </div>
    </div>
    {flag? <Redirect to={`/admin/editProduct/${store.search[0]._id}`} />:null}
  </StyledSearch>
  );
};
export default Search;

//cualquier cambio
