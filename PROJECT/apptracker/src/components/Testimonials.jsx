import Card1 from "./Card1";
import sttest from '../assets/css/sttest.module.css';
import icon from '../assets/icon.png'

function Testimonials()
{
    return(
        <div className={sttest.maindiv}>
            <Card1 title={"Life Saver !"} desc={"Helped me find a job when I was badly in need of one ~ Shuruthi"} image={icon}/>
            <Card1 title={"Helped Boost my Career"} image={icon} desc={"Was unhappy with my job, didn't fit in anywhere. Career Junction changed my life ~ Lokesha"}/>
            <Card1 title={"User-Friendly"} image={icon} desc={"Launched my comeback in Web Development effectively with the help of CJ ~ Varsha"}/>
            <Card1 title={"Comprehensive Job Listings"} image={icon} desc={"Recommended the perfect kind of jobs I was looking for ~ Sri Sarnitha"}/>
            <Card1 title={"Best Job Finder Out There"} image={icon} desc={"Let down by other websites, but gained great support and confidence due to CJ ~ Sneha"}/>
            <Card1 title={"True To Their Words"} image={icon} desc={"Absolutely wonderful, truly ~ ABC"}/>
        </div>
    );
}

export default Testimonials;