import {Link} from 'react-router-dom';
import face from '../../../assets/image/face.svg';
import insta from '../../../assets/image/instagram.svg';
import twitter from '../../../assets/image/twitter.svg';
import StyledDiv from './styled.js'

const Footer = () => {
    return (  
        <StyledDiv>
            <div className="footer-container">
                <div className="footer-nosotros">
                    <h2>Nosotros</h2>
                    <ul>
                        <li>
                        <Link to='/empresa'>
                            Nuestra Empresa
                        </Link>
                        </li>
                        <li>
                        <Link to='/contacto'>
                            Contacto
                        </Link>
                        </li>
                        <li>
                        <Link to='/contacto'>
                            FAQ
                        </Link>
                        </li>
                        <li>
                        <Link to='/avisos'>
                            Aviso de Privacidad
                        </Link>
                        </li>
                    </ul>
                </div>
                <div className='footer-avisos_seteados'>
                    <h2>Avisos</h2>
                    <ul>
                        <li>
                        <Link to='/avisos'>
                            Términos y condiciones
                        </Link>
                        </li>
                        <li>
                        <Link to='/avisos'>
                            Factura Clientes
                        </Link>
                        </li>
                        <li>
                        <Link to='/avisos'>
                            Factura Empresas
                        </Link>
                        </li>
                        <li>
                        <Link to='/avisos'>
                            Política de devoluciones
                        </Link>
                        </li>
                        <li>
                        <Link to='/avisos'>
                            Política de promociones
                        </Link>
                        </li>
                    </ul>
                </div>
                <div className='footer-links_interes'>
                    <h2>Links de Interés</h2>
                    <ul>
                        <li>
                        <Link to='/catalogo'>
                            Catálogo
                        </Link>
                        </li>
                    </ul>
                </div>
                <div className='footer-followers'>
                    <h2>Seguinos: </h2>
                    <ul>
                        <li>
                        <a href="http://www.instagram.com">
                            <img src={insta} class="footer-svg" alt=""/>
                        </a>
                        </li>
                        <li>
                        <a href="http://www.facebook.com">
                            <img src={face} class="footer-svg" alt=""/>
                        </a>
                        </li>
                        <li>
                        <a href="http://www.twitter.com">
                            <img src={twitter} class="footer-svg" alt=""/>
                        </a>
                        </li>
                    </ul>
                </div>
                <div className='footer-subscribe'>
                    <h2>Subscribite a nuestro Newsletter</h2>
                    <ul>
                        <li>
                            <Link to='/'>
                                Subscribirse!
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='footer-derechos'>Copyright House & Wines - 2021</div>
    </StyledDiv>
    );
}
 
export default Footer;