import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import stheader from '../assets/css/stheader.module.css';

function Header()
{
    return(
        <div className={stheader.headerdiv}>
            <div className={stheader.btns}>
                <Link to="/" >
                <img className={stheader.logo} src={logo} alt="logo"/>
                </Link>
                <p className={stheader.links}>Career Junction</p>
            </div>
            <div className={stheader.btns}>
                <Link to="/login" className={stheader.links}>
                <button className={stheader.indivbtn}>Login</button>
                </Link>
                <Link to="/reg" className={stheader.links}>
                <button className={stheader.indivbtn}>Sign Up</button>
                </Link>
            </div>
        </div>
    )
}

export default Header;