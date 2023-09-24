import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Laptop from './Laptop/Laptop'
import Component from './Component/Component'
import Mice from './Mice/Mice'
import Keyboards from './Keyboards/Keyboards'
import Audio from './Audio/Audio'
import Contentcreation from './Contentcreation/Contentcreation';
import Chairs from './Chairs/Chairs'
import Console from './Console/Console'
import Mobile from './Mobile/Mobile'
import Apprarel from './Apparel/Apparel'
import './Store.css'
import LaptopCard from './Laptop/LaptopCard'
import Carousel from 'react-bootstrap/Carousel';
import { CarouselItem } from 'react-bootstrap'
const Store = () => {
    return (
      <>
        <div className="bg-black h-full pt-4">
          <div>
            <ul className="flex justify-center items-baseline flex-row ">
              <li>
                <Link
                  to="/store/laptops"
                  className="w-32 object-scale-down items-center no-underline text-white menuItem "
                >
                  <img className="w-24 object-contain" src={require('./categoryImg/cataImg1.png')} />
                  <p>Laptops</p>
                </Link>
              </li>
              <li>
                <Link to="/store/components" className="no-underline text-white menuItem ">
                  <img className="w-1/2" src={require('./categoryImg/cataImg2.png')} />
                  <p>Components</p>
                </Link>
              </li>
              <li>
                <Link to="/store/mice" className="no-underline  text-white menuItem ">
                  <img className="w-1/2" src={require('./categoryImg/cataImg3.png')} />
                  <p>Mice</p>
                </Link>
              </li>
              <li>
                <Link to="/store/keyboards" className="no-underline mr-[-45px] text-white menuItem ">
                  <img className="w-1/2" src={require('./categoryImg/cataImg4.png')} />
                  <p>Keyboards</p>
                </Link>
              </li>
              <li>
                <Link to="/store/audio" className="no-underline mr-[-35px] text-white menuItem ">
                  <img className="w-1/2" src={require('./categoryImg/cataImg5.png')} />
                  <p>Audio</p>
                </Link>
              </li>
              <li>
                <Link to="/store/content-creation" className="no-underline mr-[10px] text-white menuItem ">
                  <img className="w-1/2" src={require('./categoryImg/cataImg6.png')} />
                  <p>Content Creation</p>
                </Link>
              </li>
              <li>
                <Link to="/store/chairs" className="no-underline mr-[-5px] text-white menuItem ">
                  <img className="w-1/2" src={require('./categoryImg/cataImg7.png')} />
                  <p>Chairs</p>
                </Link>
              </li>
              <li>
                <Link to="/store/console" className="no-underline mr-[-40px] text-white menuItem ">
                  <img className="w-1/2" src={require('./categoryImg/cataImg8.png')} />
                  <p>Console</p>
                </Link>
              </li>
              <li>
                <Link to="/store/mobile" className="no-underline mr-[-10px] text-white menuItem " href="#">
                  <img className="w-1/2" src={require('./categoryImg/cataImg9.png')} />
                  <p>Mobile</p>
                </Link>
              </li>
              <li>
                <Link to="/store/apparel-gear" className="no-underline text-white menuItem ">
                  <img className="w-1/2" src={require('./categoryImg/cataImg10.webp')} />
                  <p>Apparel & Gear</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
 
        <Routes>
          <Route path='/*' element={<Laptop/>}/>
          <Route path="/laptops" element={<Laptop />} />
          <Route path="/components" element={<Component />} />
          <Route path="/mice" element={<Mice />} />
          <Route path="/keyboards" element={<Keyboards />} />
          <Route path="/audio" element={<Audio />} />
          <Route path="/content-creation" element={<Contentcreation />} />
          <Route path="/chairs" element={<Chairs />} />
          <Route path="/console" element={<Console />} />
          <Route path="/mobile" element={<Mobile />} />
          <Route path="/apparel-gear" element={<Apprarel />} />
        </Routes>
      </>
    );
}

export default Store