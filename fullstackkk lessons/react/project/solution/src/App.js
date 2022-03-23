import "./App.scss";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Navbar from "./components/navbar/navbar";
import "./components/navbar/navbar.scss";



const App = () => {
  return(
    <div className="App">
  
    <Navbar/>
    <Header/>
    <Main/>
    </div>
  )
};

export default App;