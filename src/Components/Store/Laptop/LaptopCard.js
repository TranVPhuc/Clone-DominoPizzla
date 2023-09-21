import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
const LaptopCard = ({price, exclusive,itemNew, salePrice,salePercentage, nameLaptop, laptopComponent, colorOption,colorOption2, imageProducts = [] }) => {

  return (
    <div>
      <div class="flex h-full flex-col max-w-xs max-h rounded overflow-hidden shadow-lg relative mr-[2rem]">
        <Carousel>
          {imageProducts?.map((image, index) => {
            return (
              <Carousel.Item>
                <img class="w-full bg-[#111]" src={image.src} alt={image.alt} />
              </Carousel.Item>
            );
          })}
        </Carousel>
        <div class="flex-auto flex flex-col justify-between px-6 py-4 bg-[#222]">
          <div class="font-normal text-xl text-white mb-2">{nameLaptop}</div>
          <p class="text-[#444] text-base">{laptopComponent}</p>
          <p className="text-white">{colorOption}</p>
          <p className="text-white">{colorOption2}</p>
          <div className="flex justify-between items-center">
            <div>
              <span className="text-white">{price && `US$ ${price}`}</span>
              <span className="text-white line-through block">{salePrice && `US$ ${salePrice}`}</span>
            </div>
            <Button className="bg-[#44d62c]">BUY</Button>
          </div>
        </div>

        {salePercentage && (
          <div className="bg-[#28aadc] text-black absolute top-4 font-bold w-[95px] h-[35px] flex justify-center items-center ">
            {salePercentage}% OFF
          </div>
        )}

        {itemNew && (
          <div className="bg-[#44d62c] text-black absolute top-4 font-bold w-[95px] h-[35px] flex justify-center items-center ">
            {itemNew}
          </div>
        )}

        {exclusive && (
          <div className="bg-[#ff9c07] text-black absolute top-4 font-bold w-[95px] h-[35px] flex justify-center items-center ">
            {exclusive}
          </div>
        )}
      </div>
    </div>
  );
};

export default LaptopCard;
