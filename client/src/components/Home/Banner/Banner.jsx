import {Carousel} from 'react-responsive-carousel';
import LOGO from '../../../assets/image/LOGO.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (  
        <Carousel 
        autoPlay="1500"
        dynamicHeight
        >
            <div>
                <img src={LOGO} alt='local'/>
            </div>
            <div>
                <img src={LOGO} alt='local'/>
            </div>
            <div>
                <img src={LOGO} alt='local'/>
            </div>
        </Carousel>
    );
}
 
export default Banner;