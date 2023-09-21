import React from 'react'

const Subnav = () => {
  return (
    <div>
      <ul className="flex flex-row justify-center items-baseline pb-[10px] pt-[15px]">
        <li className=" flex flex-col justify-center items-center mr-[2rem]">
          <a className="no-underline subnav-item text-white flex flex-col justify-center items-center" href="#">
            <img src="images/services-main-img/gold.svg" />
            <span>Gold</span>
          </a>
        </li>
        <li className="flex flex-col justify-center items-center mr-[2rem]">
          <a className="no-underline subnav-item text-white flex flex-col justify-center items-center " href="#">
            <img src="images/services-main-img/silver.svg" />
            <span>Silver</span>
          </a>
        </li>
        <li className="flex flex-col justify-center items-center mr-[2rem]">
          <a className="no-underline subnav-item text-white flex flex-col justify-center items-center" href="#">
            <img src="images/services-main-img/goldpins.svg" />
            <span>Gold PINs</span>
          </a>
        </li>
        <li className="flex flex-col justify-center items-center mr-[2rem]">
          <a className="no-underline subnav-item text-white flex flex-col justify-center items-center" href="#">
            <img src="images/services-main-img/goldwebshop.svg" />
            <span>Gold Webshop</span>
          </a>
        </li>
        <li className="flex flex-col justify-center items-center mr-[2rem]">
          <a className="no-underline subnav-item text-white flex flex-col justify-center items-center" href="#">
            <img src="images/services-main-img/giftcards.svg" />
            <span>Gift Cards</span>
          </a>
        </li>
        <li className="flex flex-col justify-center items-center mr-[2rem]">
          <a className="no-underline subnav-item text-white flex flex-col justify-center items-center" href="#">
            <img src="images/services-main-img/razercare.svg" />
            <span>RazerCare</span>
          </a>
        </li>
        <li className="flex flex-col justify-center items-center mr-[2rem]">
          <a className="no-underline subnav-item text-white flex flex-col justify-center items-center" href="#">
            <img src="images/services-main-img/razerid.svg" />
            <span>Razer ID</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Subnav