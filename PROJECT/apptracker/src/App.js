import {Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Report from './components/Report';
import UserDashboard from './components/UserDashboard';
import AboutUs from './components/AboutUs';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/reg" element={<Registration/>}/>
        <Route path="/serv" element={<Services/>}/>
        <Route path="/rep" element={<Report/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/userdash" element={<UserDashboard/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;