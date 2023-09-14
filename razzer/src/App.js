
import Homepage from './Components/Hompage/Homepage';
import Navbar from './Components/Navbar/Navbar.js';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './Components/Footer/Footer';
import Store from './Components/Store/Store';
import { Routes,Route,Link } from 'react-router';

function App() {
  return (
    <div className="App bg-[#222]" >
      <Navbar/>
      <Routes>
          <Route path='/' element={<Homepage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
