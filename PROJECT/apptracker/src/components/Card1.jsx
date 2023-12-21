import stcard1 from '../assets/css/stcard1.module.css';

function Card1({title, image, desc}){
    return(
        <div className={stcard1.carddiv}>
            <h3 className={stcard1.text}> {title} </h3>
            <img className={stcard1.imgdiv} src={image} alt=''/>
            <p className={stcard1.text}>{desc}</p>
        </div>
    );
}

export default Card1;