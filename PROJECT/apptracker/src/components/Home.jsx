import Banner1 from "./Banner1";
import Card1 from "./Card1";
import HowTo from '../components/HowTo';
import google from '../assets/google.png';
import fb from '../assets/fb.png';
import dm from '../assets/dm.png';
import amazon from '../assets/amazon.png';
import Card2 from "./Card2";
import sthome from '../assets/css/sthome.module.css';
import SearchBar from "./SearchBar";

function Home()
{
    return(
        <div className={sthome.maindiv}>
            <Banner1/>
            <div className={sthome.searchb}>
            <SearchBar/>
            <h1 className={sthome.h1tg}> Pursue the career of your dreams !</h1>
            </div>
            <div className={sthome.secdiv}>
            <h1 className={sthome.text}>Top Companies Hiring Now</h1>
            <div className={sthome.cardsdiv}>
            <Card1 title={"Software Developer"} image={google} desc={"Google"}/>
            <Card1 title={"Full Stack Developer"} image={fb} desc={"FaceBook"}/>
            </div>
            <div className={sthome.cardsdiv}>
            <Card1 title={"Accountant"} image={dm} desc={"Dunder Mifflin Paper Co"}/>
            <Card1 title={"Cloud Engineer"} image={amazon} desc={"Amazon Web Services"}/>
            </div>
            <h1 className={sthome.text1}>Popular Job Roles</h1>
            <div className={sthome.seconddiv}>
            <div className={sthome.cardsdiv}>
            <Card2 title={"Assistant Manager > "}/>
            <Card2 title={"HR Associate > "}/>
            <Card2 title={"Graphic Designer > "}/>
            </div>
            <div className={sthome.cardsdiv}>
            <Card2 title={"UI/UX Engineer > "}/>
            <Card2 title={"Kotlin Developer > "}/>
            <Card2 title={"PHP Developer > "}/>
            </div>
            </div>
            </div>
            <div className={sthome.lastdiv}>
            <HowTo/>
            </div>
        </div>
    );
}

export default Home;