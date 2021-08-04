import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../../redux/actions/sending';
import { getVarietals } from '../../redux/actions/request';
import { useForm } from "react-hook-form";
import {StyledAddProduct} from './styled';
import Button from '@material-ui/core/Button';


const AddProduct = ({setVisual}) => {
    const { register, handleSubmit, formState:{ errors } } = useForm();
   
    const [uvas,setUvas]=useState(["Varietales"]);
    const varietals = useSelector((state) => state.varietals);
    const dispatch = useDispatch();
    const onSubmit = (data, e) => {
        
        var product=data
        dispatch(addProduct(product))
        // limpiar campos
        e.target.reset();
    }
    var category={
        Tinto:[],
        Rosado:[],
        Blanco:[],
        vacio:["Varietales"]
    }
    for (let i = 0; i < varietals.length; i++) {
        category[varietals[i].relatedCategory].push(varietals[i].name)
    }
    const handleChange=(e)=>{setUvas(category[e.target.value])}

    useEffect(() => {
        if (varietals.length === 0) dispatch(getVarietals())
    }, [dispatch, varietals]);

    return (
        <StyledAddProduct>
            <form className='add-product' onSubmit={handleSubmit(onSubmit)}>
                <label>
                    <h4>Nombre: </h4>
                    <input placeholder="Nombre"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'El nombre es requerido'
                            }
                        })
                        } />
                    <p>{errors.name?.message}</p>
                </label>
                <label>
                    <h4>Nombre de la bodega: </h4>
                    <input placeholder="Bodega"
                        {...register("vineyard", {
                            required: {
                                value: true,
                                message: 'El nombre de la bodega es requerido'
                            }
                        })
                        } />
                    <span>{errors.vineyard?.message}</span>
                </label>
                <label>
                    <h4>Imagen: </h4>
                    <input placeholder="Url de Imagen"
                        {...register("imageUrl", {
                            required: {
                                value: true,
                                message: 'El URL de la imagen es requerido'
                            }
                        })
                        } />
                    <span>{errors.imageUrl?.message}</span>
                </label>
                <label>
                    <h4>Categoría</h4>
                    <select {...register("category", {
                        required: {
                            value: true,
                            message: 'Seleccione una opción'
                        }
                    })}
                    onChange={e=>handleChange(e)}
                    >
                        <option  value="vacio">Elegir una categoría</option>
                        <option value="Tinto">Tinto</option>
                        <option value="Rosado">Rosado</option>
                        <option value="Blanco">Blanco</option>
                    </select>
                    <span>{errors.category?.message}</span>
                </label>
                <label>
                    <h4>Varietales: </h4>
                    <select {...register("varietal", {
                        required: {
                            value: true,
                            message: 'Seleccione una o más opciones'
                        }
                    })} multiple>
                        {uvas.map((e,i) => (<option key={i} value={e}>{e}</option>))}
                    </select>
                    <span>{errors.varietal?.message}</span>
                </label>
                <label>
                    <h4>Precio: </h4>
                    <input placeholder="Precio" type="number"
                        {...register("price", {
                            required: {
                                valueAsNumber: true,
                                message: 'El precio es requerido'
                            },
                            min: {
                                value: 0,
                                message: 'El precio es requerido'
                            }
                        })
                        } />
                    <span>{errors.price?.message}</span>
                </label>
                <label>
                    <h4>Stock disponible: </h4>
                    <input placeholder="Stock" type="number"
                        {...register("stock", {
                            required: {
                                valueAsNumber: true,
                                message: 'El stock es requerido'
                            },
                            min: {
                                value: 0,
                                message: 'El stock no puede ser negativo'
                            }
                        })
                        } />
                    <span>{errors?.stock?.message}</span>
                </label>
                <label>
                    <h4>Año de cosecha: </h4>
                    <input placeholder="Año de cosecha" type="number"
                        {...register("year", {
                            required: {
                                valueAsNumber: true,
                                message: 'El año es requerido'
                            },
                            max: {
                                value: 2021,
                                message: 'El año no es valido'
                            },
                            min: {
                                value: 1900,
                                message: 'El año no es valido'
                            }
                        })
                        } />
                    <span>{errors?.year?.message}</span>
                </label>
                <label>
                    <h4>Código de Barras: </h4>
                    <input placeholder="Código de Barras" type="number"
                        {...register("barcode", {
                            required: {
                                valueAsNumber: true,
                                message: 'El código de barras es requerido'
                            }
                        })
                        } />
                    <span>{errors?.barcode?.message}</span>
                </label>
                <label>
                    <h4>Descripcion: </h4>
                    <textarea placeholder="Descripción"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'La descripción es requerida'
                            }
                        })
                        } rows={5}/>
                    <span>{errors?.description?.message}</span>
                </label>
                <Button className='block' type="submit" >Agregar Producto</Button>
                <Button className='block' onClick={() =>setVisual({})}>Volver</Button>
            </form>
        </StyledAddProduct>
    )
};

export default AddProduct;