import { React } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import StyledDiv from './style';
import swal from "sweetalert";

const ContactUs = (props) => {
	const mapStyle = { height: '400px', width: '600px' };
	const defaultCenter = { lat: -38.955327, lng: -68.14018 };
	const { register, errors, handleSubmit } = useForm();

	const onSubmit = (data, e) => {
		axios.post('http://localhost:3001/sendMail', data);
		e.target.reset();
		swal('consulta enviada', {
			icon: "success",
		});
	};

	return (
		<StyledDiv>
			<div>
				<LoadScript googleMapsApiKey='AIzaSyDhzVpqEktr1Bz7fA4sC2hqzjLCOCSSnfg'>
					<GoogleMap
						mapContainerStyle={mapStyle}
						zoom={15}
						center={defaultCenter}
					>
						<Marker position={defaultCenter}></Marker>
					</GoogleMap>
				</LoadScript>
			</div>
			<div>
				<h3>
					Si tiene alguna duda, puede enviarla completando el siguiente
					formulario:
				</h3>
				<form onSubmit={handleSubmit(onSubmit)}>
					<h3>Nombre: </h3>
					<input
						className='inputs'
						type='text'
						{...register('name', { required: true, minLength: 4 })}
					/>
					<span>{errors?.name?.message}</span>
					<h3>Asunto: </h3>
					<input
						className='inputs'
						type='text'
						{...register('subject', { required: true, minLength: 3 })}
					/>
					<h3>Mensaje: </h3>
					<textarea
						className='messageInput'
						{...register('message', {
							required: true,
							minLength: 4,
							maxLength: 150,
						})}
					></textarea>
					<br />
					<button className='contactBtn'>Enviar Consulta</button>
				</form>
			</div>
		</StyledDiv>
	);
};

export default ContactUs;
