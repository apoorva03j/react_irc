import stuserdash from '../assets/css/stuserdash.module.css';
import Card1 from "./Card1";
import pencil from '../assets/it.png';
import marketing from '../assets/marketing.png';
import health from '../assets/health.png';
import it from '../assets/it.png';
import Card3 from "./Card3";
import google from '../assets/google.png';
import amazon from '../assets/amazon.png';
import microsoft from '../assets/microsoft.png';
import linkedin from '../assets/linkedin.png';
import x from '../assets/x.jpg';
import dm from '../assets/dm.png';
import stark from '../assets/stark.png';
import krusty from '../assets/krusty.png';
import React from 'react';
import Banner3 from '../components/Banner3';


function UserDashboard(){
    return(
        <div className={stuserdash.maindiv}>  
        <Banner3/>
        <div className={stuserdash.secdiv1}>
        <h2 className={stuserdash.title} style={{color:'black', fontSize: 'xx-large'}}>Categories</h2>
        <div className={stuserdash.secdiv}>
        <Card1 title={"Design"} image={pencil} desc={"25 openings"}/>
        <Card1 title={"Marketing"} image={marketing} desc={"12 openings"}/>
        <Card1 title={"Healthcare"} image={health} desc={"09 openings"}/>
        <Card1 title={"Technology"} image={it} desc={"37 openings"}/>
        </div>
        <h2 className={stuserdash.title}> Your Feed </h2>
        <div className={stuserdash.feedtitles}> 
            <h3 className={stuserdash.title}>Latest Openings</h3>
            <h3 className={stuserdash.title}>Popular</h3>
        </div>
        <div className={stuserdash.feeddiv}>
            <div className={stuserdash.secdiv}>
            <Card3 image={google} title={"Cloud Computing"}/>
            <Card3 image={x} title={"UI/UX Development"}/>
            <Card3 image={linkedin} title={"Network Engineering"}/>
            <Card3 image={amazon} title={"Server Management"}/>
            <Card3 image={microsoft} title={"Azure Devlopment"}/>
            </div>
            <div className={stuserdash.secdiv}>
            <Card1 image={dm} title={"Accountant"}/>
            <Card1 image={stark} title={"Weapons Engineer"}/>
            <Card1 image={krusty} title={"Waiter"}/>
            </div>
        </div>
        </div>
    </div>);
}

export default UserDashboard;