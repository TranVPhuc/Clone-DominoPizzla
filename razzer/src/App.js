
import background from './Components/img/imgbanner1.jpg'
import Homepage from './Components/Hompage/Homepage';
import Navbar from './Components/Navbar/Navbar.js';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App" style={{
      backgroundColor:'#222222'
    }}>
      <Navbar />
      <Homepage />
      <Footer/>
    </div>
  );
}

export default App;
