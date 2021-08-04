import StyledDiv from "./styled.js";
import SearchAtCatalogo from "../../Search/SearchAtCatalogo/Search";
import SearchAtHome from "../../Search/SearchAtHome/Search";
import { Link, useHistory, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

const NavBar = () => {
	const [url, setUrl] = useState(useHistory().location.pathname.toLowerCase());

	useEffect(() => {
		if(url === "/"){
			setUrl("/");
		}
	}, [url]);

	const handleOnClick = (string) => {
		setUrl(string);
	};

	return (
		<StyledDiv>
			<div className="navbar-fully">
				<div className="navbar-container">
					<ul className="navbar-links">
						<Link
							to="/"
							onClick={() => {
								handleOnClick("/");
							}}
						>
							<li>Inicio</li>
						</Link>
						<Link
							to="/catalogo"
							onClick={() => {
								handleOnClick("/catalogo");
							}}
						>
							<li>Catálogo</li>
						</Link>
						<Link to="/contacto">
							<li>Contacto</li>
						</Link>
						<Link to="/empresa">
							<li>Sobre Nosotros</li>
						</Link>
					</ul>
				</div>
				<div className="navbar-input">
					<Route exact path='/catalogo'>
						<SearchAtCatalogo />
					</Route>
					<Route exact path='/'>
						<SearchAtHome />
					</Route>
				</div>
			</div>
		</StyledDiv>
	);
};

export default NavBar;
