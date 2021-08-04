import {useState} from 'react';
import { useForm } from "react-hook-form";
import {useDispatch, useSelector} from 'react-redux';
import {editUser} from '../../../redux/actions/sending';
import {Redirect} from 'react-router-dom';
import StyledDiv from './styled';

const PreCheckout = () => {
  const [flag,setFlag] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    dispatch(editUser(data));
    setFlag(true);
  }

  return (
    <StyledDiv>
      <div className="title">
        <h1>Paso 1 </h1>
      </div>
      <form className='form-container' onSubmit={handleSubmit(onSubmit)}>
        <h1>Verificar tus datos: </h1>
        <div className='container-inputs'>
          <label for='name'>
            <h4>Nombre: </h4>
            <div className='inputs'>
              <input id='name' defaultValue={`${user[0].name}`} {...register("name", { required: true })} />
            </div>
          </label>
          <label for='lastname'>
            <h4>Apellido: </h4>
            <div className='inputs'>
              <input id='lastname' defaultValue={`${user[0].lastName}`} {...register("lastName", { required: true })} />
            </div>
          </label>
          <label for='direction'>
            <h4>Direccion: </h4>
            <div className='inputs'>
              <input id='direction' defaultValue={`${user[0].address}`} {...register("address", { required: true })} />
            </div>
          </label>
          {errors.exampleRequired && <span>Todos los campos son requeridos</span>}
        </div>
        <div className='container-btn'>
          <input className='btn-submit' type="submit" value='Confirmar' />
        </div>
      </form>
      { flag ? <Redirect to='/checkout'/> : null}
    </StyledDiv>
  )
}
 
export default PreCheckout;