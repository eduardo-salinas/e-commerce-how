import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import StyledNewsletter from "./styled.js";
import { getNewsletters } from "../../../../redux/actions/request.js";
import Loading from "../../../Loading/Loading";

const ShowNewsletters = () => {
  const newsletters = useSelector((state) => state.newsletters);
  const [showNewsletters, setShowNewsletters] = useState(false);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getNewsletters());
  }, [dispatch]);

  useEffect(() => {
    setShowNewsletters(true);
  }, [newsletters]);

  return showNewsletters && newsletters.newsletters ? (
    newsletters.newsletters?.map((e, index) => {
      return (
        <StyledNewsletter key={index}>
          {/* <div>{e.name}</div> */}
          <div>{e.email}</div>
          <div> {e.date.slice(0, 10)}</div>
          <div> {e.product}</div>
          <div>Motivo: {e.reason}</div>
        </StyledNewsletter>
      );
    })
  ) : (
    <Loading />
  );
};

export default ShowNewsletters;
