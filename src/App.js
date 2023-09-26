import Homepage from './Components/Hompage/Homepage';
import Navbar from './Components/Navbar/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import { Routes, Route, Link } from 'react-router';

import Adminpage from './Adminpage';
function App() {
  return (
    <div className="App bg-[#222]">
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Homepage />
              <Footer />
            </>
          }
        />
        <Route path="/adminpage/*" element={<Adminpage />} />
      </Routes>
    </div>
  );
}

export default App;
