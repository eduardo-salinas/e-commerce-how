import React, { useEffect, useRef } from "react";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { editUserStatus, getUserDetail, reset } from "../../../redux/actions";
import swal from "sweetalert";
import { StyledUserDetail } from "../styled";
import { blockUser, forceReset } from "../../../redux/actions/sending";
import Loading from "../../Loading/Loading";
import { Link } from 'react-router-dom';


const UserDetail = ({ match }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userDetail);
  const load = useSelector((state) => state.loading);
  const id = useRef(match.params.id)

  useEffect(() => {
    dispatch(getUserDetail(id.current));
    return dispatch(reset("userDetail"));
  }, [dispatch]);

  const handleClick = () => {
    if (user.userStatus === "Admin") {
      swal({ title: "El usuario ya es Admin", icon: "warning" });
    } else if (user.userStatus === "Bloqueado") {
      swal({ title: "El usuario esta Bloqueado", icon: "warning" });
    } else {
      swal({
        title: "¿Estas seguro?",
        text: "Estas por convertir este usuario a Admin",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {
            dispatch(editUserStatus(user.email));
            dispatch(getUserDetail(match.params.id));
            swal("El usuario ahora es Admin", {
              icon: "success",
            });
          } else {
            swal("Accion cancelada", {
              icon: "error",
            });
          }
        });
    }
  };

  const forceResetPass = () => {
    if (user.resetPass) {
      swal({ title: "Ya se asigno el restablecimiento de contraseña", icon: "warning" });
    } else {
      swal({
        title: "¿Estas seguro?",
        text: "Forzar el restablecimiento de la contraseña",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {
            dispatch(forceReset(user._id));
            dispatch(getUserDetail(match.params.id));
            swal("El usuario debera restablecer su contraseña", {
              icon: "success",
            });
          } else {
            swal("Accion cancelada");
          }
        });
    }
  }

  const blockedUser = () => {
    if (user.userStatus === "Bloqueado") {
      swal({ title: "El usuario ya fue bloqueado", icon: "warning" });
    } else {
      swal({
        title: "¿Estas seguro?",
        text: "Estar por bloquear este usuario",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {
            dispatch(blockUser(user._id));
            dispatch(getUserDetail(match.params.id));
            swal("El usuario a sido bloqueado", {
              icon: "success",
            });
          } else {
            swal("Accion cancelada");
          }
        });
    }
  };

  return (
    <>
      {window.sessionStorage.getItem("admin") ? (
        load ? <Loading /> :
          <StyledUserDetail>
            <div>
              <li className="name">
                {user.name} {user.lastName}
              </li>
              <li className="user-email">{user.email}</li>
              {user.address && <li className="adress">Direccion: {user.address}</li>}
              <br />
{/* 
              {user.orders && user.orders.length > 0 && (
                <>
                  <li>
                    {" "}
                    Ordenes:
                    {user.orders.map((u) => (
                      <ul>
                      <li>{u}</li>
                      </ul>
                    ))}
                  </li>
                </>
              )} */}
              <li className="status">{user.userStatus}</li>
              <Button className="btn-admin" variant="contained" onClick={handleClick}>
                Hacer Admin
              </Button>
              <Button
                className="btn-block"
                variant="contained"
                color="secondary"
                onClick={blockedUser}
              >
                Bloquear Usuario
              </Button>
              <Button className="btn-recoverypsw" onClick={forceResetPass} variant="contained">
                Forzar reinicio de contraseña
              </Button>
              <Link to={'/admin/controlpanel'} className='btn-link'>
                <Button className="btn-back" variant="contained">
                  VOLVER
                </Button>
              </Link>
            </div>

          </StyledUserDetail>) : <h1>No tiene permisos para ingresar aqui</h1>}</>
  );
};

export default UserDetail;
