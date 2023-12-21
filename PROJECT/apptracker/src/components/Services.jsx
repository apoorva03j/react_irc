import Card2 from "./Card2";
import Testimonials from "./Testimonials";
import stserv from '../assets/css/stserv.module.css';

function Services()
{
    return (
        <div className={stserv.maindiv}>
            <h1>Services</h1>
            <div className={stserv.secdiv}>
                <Card2 title={"Job Posting Service"}/>
                <Card2 title={"Resume Parsing"}/>
                <Card2 title={"Track Application"}/>
            </div><br/>
            <div className={stserv.secdiv}>
                <Card2 title={"Candidate Tracking"}/>
                <Card2 title={"Interview Scheduling"}/>
                <Card2 title={"Reports and Analytics"}/>
            </div>
            <div className={stserv.testdiv}>
            <Testimonials/>
            </div>
        </div>
    );
}

export default Services;