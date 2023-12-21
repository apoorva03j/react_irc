import stcard3 from '../assets/css/stcard3.module.css';

function Card3({image, title})
{
    return(
        <div className={stcard3.maindiv}>
            <img className={stcard3.imglogo} src={image} alt="logo"/>
            <p className={stcard3.text}>{title}</p>
        </div>
    );
}

export default Card3;