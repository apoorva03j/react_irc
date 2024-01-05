import banner3 from '../assets/banner3.jpg';
import stbanner from '../assets/css/stbanner.module.css';

function Banner3(){
    return(
        <div className={stbanner.bannerdiv}>
            <img src={banner3} alt="banner3" className={stbanner.image}/>
        </div>
    )
}

export default Banner3;