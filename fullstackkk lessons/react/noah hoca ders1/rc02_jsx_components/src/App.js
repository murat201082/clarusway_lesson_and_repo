

import Header from "./header"
import Msg from  "./Msg"
import Footer from "./footer.jsx"
function App() {
 
  return (
    <div style={{backgroundColor: "blue"}}>
    <h1>Hello React</h1>
    <h2>Hello Fs10</h2>
    
    <Header ad = "merhaba" soyad = "Nasılsın" />
    <Header ad = "merhaba" soyad = "Nasılsın" />
    <Msg/>
    <Footer/>
    
    </div>
  );
}

export default App;
