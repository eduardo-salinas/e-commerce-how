import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import { Link } from 'react-router-dom';
import {getOrders} from '../../../redux/actions/request';
import moment from 'moment';
import { StyledSells } from '../styled';

const DailySells = () =>{
    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders);
    const [render, setRender] = useState([]);

    useEffect(()=>{
        dispatch(getOrders());
    },[dispatch]);

    useEffect(()=>{
        let obj = {};
        let array = [];
        
        orders && orders.map((element) => {
            if(element.date.slice(0,10) === moment().format().slice(0,10)){
                return element.invoice.items.map(el => {
                    if(obj[el.name]){
                        return obj={...obj, [el.name]: parseInt(obj[el.name]) + parseInt(el.quantity)}
                    }else{
                        return obj={...obj, [el.name]: el.quantity}
                    }
                }
            )}
        })
        array = Object.entries(obj).sort((a, b) => b[1] - a[1]);
        
        setRender(array); //[[]]
    },[orders])


    return(
        <StyledSells>
          <h2>Detalle de unidades vendidas en el día</h2>
        {window.sessionStorage.admin === 'on'?
            render && render.map((el,idx)=>{
                return (
                <ul className= 'sold'>
                <li key={idx} className= 'items-sold'>
                        
                  <div>{el[0]}</div>
                  <div>{el[1]}</div>
                    </li>
                </ul>
                )  
            })
        : <h1>Usted no tiene permisos</h1> 
        }
          {/* <Link  to={`/admin/controlpanel`}><button className='btn-back'>VOLVER</button></Link> */}
        </StyledSells>
    )
}

export default DailySells