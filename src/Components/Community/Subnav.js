import React from 'react'

const Subnav = () => {
  return (
    <div>
      <ul className="flex flex-row justify-center items-baseline pb-[10px] pt-[15px]">
        <li className=" flex flex-col justify-center items-center mr-[2rem]">
          <a className="no-underline subnav-item text-white flex flex-col justify-center items-center" href="#">
            <img src="images/community-main-img/getstarted.svg" />
            <span>Get Started</span>
          </a>
        </li>
        <li className="flex flex-col justify-center items-center mr-[2rem]">
          <a className="no-underline subnav-item text-white flex flex-col justify-center items-center " href="#">
            <img src="images/community-main-img/esports.svg" />
            <span>Esports</span>
          </a>
        </li>
        <li className="flex flex-col justify-center items-center mr-[2rem]">
          <a className="no-underline subnav-item text-white flex flex-col justify-center items-center" href="#">
            <img src="images/community-main-img/razerstreamer.svg" />
            <span>#RazerStreamer</span>
          </a>
        </li>
        <li className="flex flex-col justify-center items-center mr-[2rem]">
          <a className="no-underline subnav-item text-white flex flex-col justify-center items-center" href="#">
            <img src="images/community-main-img/events.svg" />
            <span>Events</span>
          </a>
        </li>
        <li className="flex flex-col justify-center items-center mr-[2rem]">
          <a className="no-underline subnav-item text-white flex flex-col justify-center items-center" href="#">
            <img src="images/community-main-img/insider.svg" />
            <span>Insider</span>
          </a>
        </li>
        <li className="flex flex-col justify-center items-center mr-[2rem]">
          <a className="no-underline subnav-item text-white flex flex-col justify-center items-center" href="#">
            <img src="images/community-main-img/student.svg" />
            <span>Student</span>
          </a>
        </li>
        <li className="flex flex-col justify-center items-center mr-[2rem]">
          <a className="no-underline subnav-item text-white flex flex-col justify-center items-center" href="#">
            <img src="images/community-main-img/wallpapers.svg" />
            <span>Wallpapers</span>
          </a>
        </li>
        <li className="flex flex-col justify-center items-center mr-[2rem]">
          <a className="no-underline subnav-item text-white flex flex-col justify-center items-center" href="#">
            <img src="images/community-main-img/stickers.svg" />
            <span>Stickers</span>
          </a>
        </li>
        <li className="flex flex-col justify-center items-center mr-[2rem]">
          <a className="no-underline subnav-item text-white flex flex-col justify-center items-center" href="#">
            <img src="images/community-main-img/developers.svg" />
            <span>Developers</span>
          </a>
        </li>
        <li className="flex flex-col justify-center items-center mr-[2rem]">
          <a className="no-underline subnav-item text-white flex flex-col justify-center items-center" href="#">
            <img src="images/community-main-img/sustainability.svg" />
            <span>Sustainability</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Subnav