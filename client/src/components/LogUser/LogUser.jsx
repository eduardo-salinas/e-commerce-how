import React, { useState, useEffect } from "react";
import GoogleLogin from "react-google-login";
import { addUser } from "../../redux/actions/sending";
import { useDispatch, useSelector } from "react-redux";
import StyledDiv from "./styled.js";
import { useHistory } from "react-router";
import Button from "@material-ui/core/Button";

const LogUser = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  let confirm = useSelector(state => state.confirm);
  const dispatch = useDispatch();
  const history = useHistory();

  const responseGoogle = (responseGoogle) => {
    let data = {
      name: responseGoogle.profileObj.givenName,
      email: responseGoogle.profileObj.email,
      lastName: responseGoogle.profileObj.familyName,
      password: responseGoogle.profileObj.googleId,
    };
    dispatch(addUser(data));
  };

  useEffect(()=>{
    if(confirm){
      setTimeout(()=>{
        history.push('/login');
        window.location.reload();
      },1000)  
    } 
  },[confirm, history])

  const validateUser = (value) => {
    if (!/\S+@\S+\.\S+/.test(value)) {
      setError("el usuario tiene que ser un gmail");
    } else {
      setError("");
    }
    setEmail(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      name: name,
      lastName: lastName,
      email: email,
      password: password,
    };
    dispatch(addUser(data));
  };

  return (
    <StyledDiv>
      <div className="create-google">
        <GoogleLogin
          clientId="262689421829-3o7njoctsh6lj3kcqsk4lhgtphta7233.apps.googleusercontent.com"
          buttonText="Crear cuenta con Google"
          onSuccess={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
      <form className="form-create" onSubmit={(e) => handleSubmit(e)}>
        <div className="create-login_name">
          <label>Ingrese su Nombre: </label>
          <input
            name="name"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="create-login_lastName">
          <label>Ingrese su Apellido: </label>
          <input
            name="lastName"
            placeholder="Apellido"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="create-login_email">
          <label>Ingrese su email: </label>
          <input
            name="email"
            value={email}
            placeholder="email"
            onChange={(e) => validateUser(e.target.value)}
          />
        </div>
        {!error ? null : <span>{error}</span>}
        <div className="create-login_password">
          <label>Ingrese su contraseña: </label>
          <input
            name="password"
            value={password}
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit" variant="contained">
          Enviar
        </Button>
      </form>
      {confirm ? <h1>Cuenta creada satisfactoriamente</h1> : null}
    </StyledDiv>
  );
};
export default LogUser;
