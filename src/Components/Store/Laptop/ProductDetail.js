import React, { useEffect, useState } from 'react';
import axiosInstance from './configLaptopAPI';
import { useParams } from 'react-router';
import LaptopCard from './LaptopCard';
import { useSearchParams } from 'react-router-dom';

const ProductDetail = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  searchParams.get('uuid');

  useEffect(() => {
    console.log(new URLSearchParams(window.location.search).get('uuid'));
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axiosInstance.get(`laptops/`);
        console.log(response.items);
        setProductList(response.items);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);
  return <></>;
};

export default ProductDetail;
