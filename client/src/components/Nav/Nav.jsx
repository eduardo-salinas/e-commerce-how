import { useEffect } from "react";
import LOGO from "../../assets/image/LOGO.png";
import User from "./NavUser/User";
import NavBar from "./NavBar/NavBar";
import StyledDiv from "./styled.js";
import { Grid } from "@material-ui/core";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../redux/actions/request";

const Nav = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <StyledDiv>
      <Grid container item xs={12} spacing={2}>
        <Grid container item xs={8} spacing={2}>
          <div className="nav-logo">
            <img src={LOGO} alt="LOGO-HOW" />
          </div>
        </Grid>
        <Grid container item xs={4} spacing={2}>
          <Grid container item xs={12} spacing={1} className='nav-superior' >
          <div className='nav-container_bienvenida'>
            {user[0] !== undefined ? (
              <div className="nav-bienvenida">
                <div className="nav-userRegister">
                  <p>Hola {user[0].name}!</p>
                </div>
              </div>
            ) : <h1 className='nav-hidden'>BIENVENIDO</h1>}
          </div>
            <div className="nav-social">
              <div className="nav-redes">
                <p>
                  Seguinos
                  <a
                    href="https://facebook.com"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    {" "}
                    <FaFacebookSquare />
                  </a>
                  <a
                    href="https://instagram.com"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    {" "}
                    <FaInstagramSquare />
                  </a>
                </p>
              </div>
            </div>
          </Grid>
          <hr />
          <Grid container item xs={10} spacing={6}>
            <User />
          </Grid>
        </Grid>
      </Grid>
      <NavBar />
    </StyledDiv>
  );
};

export default Nav;
