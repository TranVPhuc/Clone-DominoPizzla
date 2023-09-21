import React from 'react'

const Subnav = () => {
  return (
    <div>
      <ul className="flex flex-row justify-center items-baseline pb-[10px] pt-[15px]">
        <li className=" flex flex-col justify-center items-center mr-[2rem]">
          <a className="no-underline subnav-item text-white flex flex-col justify-center items-center" href="#">
            <img src="images/lifestyle-main-img/chairs.svg" />
            <span>Chairs</span>
          </a>
        </li>
        <li className="flex flex-col justify-center items-center mr-[2rem]">
          <a className="no-underline subnav-item text-white flex flex-col justify-center items-center " href="#">
            <img src="images/lifestyle-main-img/watch.svg" />
            <span>Wearables</span>
          </a>
        </li>
        <li className="flex flex-col justify-center items-center mr-[2rem]">
          <a className="no-underline subnav-item text-white flex flex-col justify-center items-center" href="#">
            <img src="images/lifestyle-main-img/apparel.svg" />
            <span>Apparel</span>
          </a>
          <span className="block text-[#F5B21D]">New</span>
        </li>
        <li className="flex flex-col justify-center items-center mr-[2rem]">
          <a className="no-underline subnav-item text-white flex flex-col justify-center items-center" href="#">
            <img src="images/lifestyle-main-img/bags.svg" />
            <span>Bags</span>
          </a>
        </li>
        <li className="flex flex-col justify-center items-center mr-[2rem]">
          <a className="no-underline subnav-item text-white flex flex-col justify-center items-center" href="#">
            <img src="images/lifestyle-main-img/gear.svg" />
            <span>Gear</span>
          </a>
        </li>
        <li className="flex flex-col justify-center items-center mr-[2rem]">
          <a className="no-underline subnav-item text-white flex flex-col justify-center items-center" href="#">
            <img src="images/lifestyle-main-img/sneki.svg" />
            <span>Sneki Snek</span>
          </a>
        </li>
        <li className="flex flex-col justify-center items-center mr-[2rem]">
          <a className="no-underline subnav-item text-white flex flex-col justify-center items-center" href="#">
            <img src="images/lifestyle-main-img/respawn.svg" />
            <span>RESPAWN</span>
          </a>
        </li>
        <li className="flex flex-col justify-center items-center mr-[2rem]">
          <a className="no-underline subnav-item text-white flex flex-col justify-center items-center" href="#">
            <img src="images/lifestyle-main-img/customs.svg" />
            <span>Custom</span>
          </a>
        </li>
        <li className="flex flex-col justify-center items-center mr-[2rem]">
          <a className="no-underline subnav-item text-white flex flex-col justify-center items-center" href="#">
            <img src="images/lifestyle-main-img/collabs.svg" />
            <span>Collabs</span>
          </a>
          <span className="block text-[#F5B21D]">New</span>
        </li>
        <li className="flex flex-col justify-center items-center mr-[2rem]">
          <a className="no-underline subnav-item text-white flex flex-col justify-center items-center" href="#">
            <img src="images/lifestyle-main-img/mac.svg" />
            <span>Mac</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Subnav