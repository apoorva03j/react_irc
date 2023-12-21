import Card3 from "./Card3";
import num1 from '../assets/num1.png';
import num2 from '../assets/num2.png';
import num3 from '../assets/num3.png';
import num4 from '../assets/num4.png';
import num5 from '../assets/num5.png';
import howtoimg from '../assets/howtoimg.jpg';
import sthowto from '../assets/css/sthowto.module.css'

function HowTo()
{
    return(
        <div className={sthowto.maindiv}>
            <div className={sthowto.secdiv1}>
                <Card3 image={num1} title={"Sign Up"}/>
                <Card3 image={num2} title={"Setup Profile"}/>
                <Card3 image={num3} title={"Scan Listings"}/>
                <Card3 image={num4} title={"Apply"}/>
                <Card3 image={num5} title={"Get Hired !"}/>
            </div>
            <div className={sthowto.secdiv2}>
                <img className={sthowto.img} src={howtoimg} alt="howto"/>
            </div>
        </div>
    );
}

export default HowTo;