import "./App.css";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Github from "./pages/github/Github";
import Logout from "./pages/logout/Logout";
import Edben from "./pages/edben/Edben";
import Details from "./pages/details/Details";
 




function App() {

 
  return (
    <div className="App">

    <BrowserRouter> 

    <Routes> 
    
    <Route path="/edben" element={<Edben/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/github" element={<Github/>} />
    <Route path="/logout" element={<Logout/>} />
    <Route path="/login" element={<Home/>} />
   
    
    <Route path="/login" element={<Home/>} />
    
    </Routes>
    
    </BrowserRouter>

   <Details />
    
  
    
    
    
    
    
    </div>
  );
}

export default App;
