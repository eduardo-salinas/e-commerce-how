import React, { useEffect, useState } from "react";
import AutoSuggest from "react-autosuggest";
import { useSelector } from "react-redux";
import StyledDiv from "./styled";
import { Link } from "react-router-dom";
import {
  getProductDetail,
  getProductsAll,
} from "../../../redux/actions/request";
import { useDispatch } from "react-redux";

const SearchAtHome = () => {
  const wines = useSelector((state) => state.products);
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsAll());
  }, [dispatch]);

  const lowerCasedWines = wines.map((wine) => {
    return {
      id: wine._id,
      name: wine.name.toUpperCase(),
    };
  });

  const getSuggestions = (value) => {
    return lowerCasedWines.filter((wine, idx) => {
      if (idx < 5) {
        return wine.name.includes(value.trim().toUpperCase());
      }
      return null;
    });
  };

  return (
    <StyledDiv>
      <AutoSuggest
        suggestions={suggestions}
        onSuggestionsClearRequested={() => setSuggestions([])}
        onSuggestionsFetchRequested={({ value }) => {
          setValue(value);
          setSuggestions(getSuggestions(value));
        }}
        getSuggestionValue={(suggestion) => suggestion.name}
        renderSuggestion={(suggestion) => (
          <Link
            to={`/product/${suggestion.id}`}
            onClick={() => dispatch(getProductDetail(suggestion.id))}
          >
            {suggestion.name}
          </Link>
        )}
        inputProps={{
          placeholder: "Buscar...",
          value: value,
          onChange: (_, { newValue, method }) => {
            setValue(newValue);
          },
        }}
        highlightFirstSuggestion={false}
      />
    </StyledDiv>
  );
};

export default SearchAtHome;
