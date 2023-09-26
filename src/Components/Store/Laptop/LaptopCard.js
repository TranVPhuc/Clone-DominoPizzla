import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import './LaptopCard.css';
import { Link, Route, Routes } from 'react-router-dom';
import ProductDetail from './ProductDetail';

const LaptopCard = ({
  price,
  exclusive,
  itemNew,
  salePrice,
  salePercentage,
  nameLaptop,
  laptopComponent,
  colorOption,
  colorOption2,
  imageProducts = [],
  uuid,
}) => {
  const [index, setIndex] = useState(0);
  return (
    <>
      <div className="h-full ">
        <Link to={`/ProductDetail?uuid=${uuid}`}>
          <div class="flex h-full flex-col max-w-xs max-h rounded overflow-hidden  shadow-lg relative mr-[2rem]">
            <Carousel
              onSelect={(eventKey) => {
                setIndex(eventKey);
              }}
            >
              {imageProducts?.map((image, index) => {
                return (
                  <Carousel.Item>
                    <img src={image.src ? image.src : image} alt="" class="w-full bg-[#111]" />
                  </Carousel.Item>
                );
              })}
            </Carousel>
            <div class="flex-auto flex flex-col  justify-between px-6 py-4 bg-[#222]">
              <div class="font-normal para text-xl text-white mb-2">{nameLaptop[index]}</div>
              <p class="text-[#444] text-base">{laptopComponent}</p>
              <p className="text-white">{colorOption}</p>
              <p className="text-white">{colorOption2}</p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-white">{price && `US$ ${price}`}</span>
                  <span className="text-white line-through block">{salePrice && `US$ ${salePrice}`}</span>
                </div>
                <Button className="button">BUY</Button>
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
        </Link>
      </div>

      <Routes>
        <Route path="/ProductDetail" element={<ProductDetail />} />
      </Routes>
    </>
  );
};

export default LaptopCard;
