import React from 'react';
import './Homepage.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
const Homepage = () => {
  return (
    <>
      <div className="bg-[#222222] mb-[10px]">
        <div className="relative">
          <a href="#">
            <img alt="" className="w-full h-[80vh] mb-2" src={require('../img/imgbanner1.jpg')} />
            <div className="absolute z-10 top-16 text-center left-1/3 ">
              <h1 className="text-white text-6xl">RAZER KISHI V2 PRO</h1>
              <h2 className="text-white text-3xl font-normal">MOBILE GAMING IS NOW HARDCORE</h2>
              <div className="text-white flex items-center justify-evenly">
                <a href="#" className="text-2xl no-underline text-white font-light hover:underline ">
                  Learn more
                </a>
                <a href="#" className="text-2xl no-underline text-white font-light hover:underline ">
                  Buy now!
                </a>
              </div>
            </div>
          </a>
        </div>

        <div className="relative">
          <a href="#">
            <img alt="" className="w-full h-[80vh] mb-2 z-10" src={require('../img/imgbanner2.webp')} />
            <div className="absolute z-10 text-center top-9 left-[25%]">
              <h1 className="text-white text-6xl ">SCHOOL THE COMPETITION</h1>
              <h2 className="text-white font-normal text-3xl">ENJOY EXCLUSIVE EDUCATION PRICING</h2>
              <a href="#" className="text-2xl no-underline text-white hover:underline font-light">
                Shop Now
              </a>
            </div>
          </a>
        </div>

        <div className="relative">
          <a href="#">
            <img alt="" className="w-full h-[75vh] mb-2" src={require('../img/imgbanner3.webp')} />
            <div className="absolute z-10 text-center left-[30%] top-9">
              <h1 className="text-white text-6xl">NEW RAZER BLADE 14</h1>
              <h2 className="text-white text-3xl font-normal">SMALL SIZE. BIG PERFORMANCE</h2>
              <div className="flex items-center justify-evenly">
                <a href="#" className="text-2xl no-underline text-white hover:underline font-light">
                  Learn more
                </a>
                <a href="#" className="text-2xl no-underline text-white hover:underline font-light">
                  Buy now!
                </a>
              </div>
            </div>
          </a>
        </div>

        <div className="flex justify-between mb-2">
          <div className="relative">
            <a href="#">
              <img alt="" className="w-full h-[62.5vh]" src={require('../img/imgbanner4.webp')} />
              <div className="text-center absolute top-12 left-32">
                <h1 className="text-white">RAZERCON 2023</h1>
                <h2 className="text-white text-xl font-normal">A DIGITAL CELEBRATION FOR GAMERS. BY GAMERS.</h2>
                <a href="#" className="text-2xl no-underline text-white hover:underline font-light text-lg">
                  Sign Up Now
                </a>
              </div>
            </a>
          </div>

          <div className="relative">
            <img alt="" className="w-full h-[62.5vh]" src={require('../img/imgbanner5.webp')} />

            <div className="text-white text-center absolute top-12 left-[15%]">
              <h1>RAZER BLACKWIDOW V4 75%</h1>
              <h2 className="text-xl font-normal">SWAP OUT. SWAP IN. GAME ON</h2>
              <div className="flex items-center justify-evenly">
                <a href="#" className="text-2xl no-underline text-white hover:underline font-light text-lg">
                  Learn more
                </a>
                <a href="#" className="text-2xl no-underline text-white hover:underline font-light text-lg">
                  Buy now!
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mb-2">
          <div className="relative">
            <img alt="" className="w-full h-[62.5vh]" src={require('../img/imgbanner6.webp')} />
            <div className="text-white text-center absolute top-12 left-[4%]">
              <h1>NEW RAZER BLADE 16 & 18 MERCURY</h1>
              <h2 className="text-xl font-normal">PERFROMANCE REIMAGINED.</h2>
              <div className="flex items-center justify-evenly">
                <a href="#" className="text-2xl no-underline text-white hover:underline font-light text-lg">
                  Razer Blade 16
                </a>
                <a href="#" className="text-2xl no-underline text-white hover:underline font-light text-lg">
                  Razer Blade 18
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <img alt="" className="w-full h-[62.5vh]" src={require('../img/imgbanner7.webp')} />

            <div className="text-white text-center absolute top-12 left-[25%]">
              <h1>RAZER KITSUNE</h1>
              <h2 className="text-xl font-normal">OPTICAL + PRECISION! THE ULTRA COMBO!</h2>
              <div className="flex items-center justify-evenly">
                <a href="#" className="text-2xl no-underline text-white hover:underline font-light text-lg">
                  Learn more
                </a>
                <a href="#" className="text-2xl no-underline text-white hover:underline font-light text-lg">
                  Buy now!
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="relative">
            <img alt="" className="w-full h-[62.5vh]" src={require('../img/imgbanner8.webp')} />
            <div className="text-white text-center absolute top-12 left-48">
              <h1>RAZER ENKI PRO</h1>
              <h2 className="text-xl font-normal">AUTOMOBILI LAMBORGHINI EDITION</h2>
              <div className="flex items-center justify-evenly">
                <a href="#" className="text-2xl no-underline text-white hover:underline font-light text-lg">
                  Learn More
                </a>
                <a href="#" className="text-2xl no-underline text-white hover:underline font-light text-lg">
                  Buy Now!
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <img alt="" className="w-full h-[62.5vh]" src={require('../img/imgbanner9.webp')} />

            <div className="text-white text-center absolute top-12 left-[25%]">
              <h1>RAZER EDGE</h1>
              <h2 className="text-xl font-normal">THE ULTIMATE ANDROID GAMING HANDHELD</h2>
              <div className="flex items-center justify-evenly">
                <a href="#" className="text-2xl no-underline text-white hover:underline font-light text-lg">
                  Learn more
                </a>
                <a href="#" className="text-2xl no-underline text-white hover:underline font-light text-lg">
                  Buy now!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
