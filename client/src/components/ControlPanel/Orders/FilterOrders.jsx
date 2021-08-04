import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useDispatch } from 'react-redux';
import { getOrderForStatus } from '../../../redux/actions';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

const FilterOrders = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleChange = (e) => {
        dispatch(getOrderForStatus(e.target.value))
        setTimeout(() => e.target.value = "", 1000);
    }
    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-native-select">Estado</InputLabel>
                <Select onChange={handleChange} native defaultValue="" id="grouped-native-select">
                    <option aria-label="None" value="" />
                    <option value="En preparación">En preparación</option>
                    <option value="Enviado">Enviadas</option>
                    <option value="Finalizado">Finalizadas</option>
                    <option value="Cancelado">Canceladas</option>
                </Select>
            </FormControl>
        </div>
    );
}

export default FilterOrders;