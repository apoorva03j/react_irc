import stcard2 from '../assets/css/stcard2.module.css';

function Card2({title}){
    return(
        <div className={stcard2.carddiv}>
            <h3> {title} </h3>
        </div>
    );
}

export default Card2;