import Homepage1 from './Components/pages/Homepage/Homepage1';
import Homepage from './Components/Hompage/Homepage';
import Navbar from './Components/Navbar/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import Store from './Components/Store/Store';
import { Routes, Route, Link } from 'react-router';
import Admin from './Components/AdminPage/Admin';
import AllProducts from './Components/pages/AllProducts/AllProducts';

function App() {
  return (
    <div className="App bg-[#222]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
      {/* <Admin>
         <Routes>
          <Route path="/home" element={<Homepage1 />} />
          <Route path="/category/:categoryName" element={<AllProducts />} />
        </Routes>
      </Admin>  */}
    </div>
  );
}

export default App;
