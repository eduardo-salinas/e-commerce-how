import React from "react";
import { Link } from "react-router-dom";
import { StyledUsers } from "../styled.js";
import Button from '@material-ui/core/Button';
import { useDispatch } from "react-redux";
import swal from 'sweetalert';
import { editUserStatus } from "../../../redux/actions";
import { getUsers } from "../../../redux/actions/request.js";
import { blockUser } from "../../../redux/actions/sending.js";

const ItemUsers = ({ user }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
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
                    dispatch(getUsers());
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
    const blockedUser = () => {
        if (user.userStatus === "Bloqueado") {
            swal({ title: "El usuario ya fue bloqueado", icon: "warning" });
        } else {
            swal({
                title: "¿Estas seguro?",
                text: "Estas por bloquear este usuario",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        dispatch(blockUser(user._id));
                        dispatch(getUsers());
                        swal("El usuario a sido bloqueado", {
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
    return (
        <StyledUsers>
            <Link to={`/user/${user._id}`} className='link-name'>
                <li className="name">{user.lastName}, {user.name}</li>
            </Link>
            <li className="email">{user.email}</li>
            <li className="status">{user.userStatus}</li>
            <Button className={user.userStatus ==='Regular'? 'active' : 'btn'} onClick={()=> user.userStatus ==='Regular'? handleClick() : null}>Hacer Admin</Button>
            <Button variant="contained" color="secondary" onClick={blockedUser}>Bloquear</Button>
        </StyledUsers>
    )
};

export default ItemUsers