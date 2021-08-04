import React, { useEffect, useState } from "react";
import GoogleLogin from "react-google-login";
import { logIn } from "../../redux/actions/sending";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Button from "@material-ui/core/Button";
import StyledDiv from "./styled.js";

const LogIn = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const loged = useSelector((state) => state.loged);
  const history = useHistory();

  useEffect(() => {
    if (loged === "on") {
      history.push("/");
      window.location.reload();
    }
    if (loged === "reset pass"){
      history.push(`/reset-password/${email}`)
    }
    
  }, [loged,history,email]);

  const responseGoogle = (responseGoogle) => {
    let data = {
      email: responseGoogle.profileObj.email,
      password: responseGoogle.profileObj.googleId,
    };
    dispatch(logIn(data));
  };

  function validateUser(value) {
    if (!/\S+@\S+\.\S+/.test(value)) {
      setError("El usuario tiene que ser un mail");
    } else {
      setError("");
    }
    setEmail(value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      email: email,
      password: password,
    };
    
    dispatch(logIn(data));
  };

  return (
    <StyledDiv>
      <GoogleLogin
        clientId="262689421829-3o7njoctsh6lj3kcqsk4lhgtphta7233.apps.googleusercontent.com"
        buttonText="Iniciar sesión con google"
        onSuccess={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      <form className="form-login" onSubmit={(e) => handleSubmit(e)}>
        <input
          name="email"
          value={email}
          placeholder="Email"
          onChange={(e) => validateUser(e.target.value)}
          required
        />
        {!error ? null : <p>{error}</p>}
        <input
          name="password"
          value={password}
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" variant="contained">
          ENVIAR
        </Button>
      </form>
      {loged === 'on' ? console.log(window.location.history) : null}
    </StyledDiv>
  );
};
export default LogIn;
