import Homepage1 from './Components/pages/Homepage/Homepage1';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router';
import Admin from './Components/AdminPage/Admin';
import AllProducts from './Components/pages/AllProducts/AllProducts';
import Mice from './Components/pages/Mice/Mice';
import Chair from './Components/pages/Chair/Chair';
import Keyboard from './Components/pages/Keyboard/Keyboard';
import Audio from './Components/pages/Audio/Audio';
import Console from './Components/pages/Console/Console';
import Mobile from './Components/pages/Mobile/Mobile';
import Apparel from './Components/pages/Apparel/Apparel';
import ContentCreation from './Components/pages/contentCreation/ContentCreation';
function Adminpage() {
  return (
    <div className="App bg-[#222]">
      <Admin>
        <Routes>
          <Route path="/allproduct" element={<Homepage1 />} />
          <Route path="/laptop" element={<AllProducts />} />
          <Route path="/mice" element={<Mice />} />
          <Route path="/chair" element={<Chair />} />
          <Route path="/keyboard" element={<Keyboard />} />
          <Route path="/audio" element={<Audio />} />
          <Route path="/console" element={<Console />} />
          <Route path="/mobile" element={<Mobile />} />
          <Route path="/apparel" element={<Apparel />} />
          <Route path="/content" element={<ContentCreation />} />
        </Routes>
      </Admin>
    </div>
  );
}

export default Adminpage;
