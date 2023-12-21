import banner2 from '../assets/banner2.png';
import SearchBar from './SearchBar';

function Banner2(){
    return(
        <div className='stbanner.bannerdiv'>
            <img src={banner2} alt="banner2"></img>
            <SearchBar/>
        </div>
    )
}

export default Banner2;