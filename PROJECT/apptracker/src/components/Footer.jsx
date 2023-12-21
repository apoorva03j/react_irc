import { Link } from 'react-router-dom';
import ig from '../assets/ig.png';
import x from '../assets/x.jpg';
import linkedin from '../assets/linkedin.png';
import stfooter from '../assets/css/stfooter.module.css';

function Footer()
{
    return(
        <div className={stfooter.maindiv}>
            <div className={stfooter.childdiv}>
                <Link to="/about" className={stfooter.links}>
                    <p>About Us</p>
                </Link>
                <Link to="/serv" className={stfooter.links}>
                    <p>Services</p>
                </Link>
                <Link to="/rep" className={stfooter.links}>
                    <p>Report Issue</p>
                </Link>
            </div>
            <div className={stfooter.childdiv}>
                <p className={stfooter.div3}>
                    Connect with Us
                </p>
                <div className={stfooter.social}>
                    <img className={stfooter.socials} src={ig} alt='ig'></img>
                    <img className={stfooter.socials} src={x} alt='ig'></img>
                    <img className={stfooter.socials} src={linkedin} alt='ig'></img>
                </div>
            </div>
        </div>
    );
}

export default Footer;