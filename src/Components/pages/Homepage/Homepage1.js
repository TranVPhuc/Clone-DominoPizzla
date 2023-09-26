import React, { useEffect, useRef, useState } from 'react';
import { Image, Space, Table, Tag, Input, Select, Button, Modal } from 'antd';
import { Avatar } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useFormik } from 'formik';
import FormItem from 'antd/es/form/FormItem';
import axiosInstance from './configHomepageAPI';

const { Column, ColumnGroup } = Table;
const { Search } = Input;

const Homepage1 = () => {
  const [productList, setProductList] = useState([]);

  let dataProduct = productList.filter((product, index) => index < 5);
  const [loading, setLoading] = useState(false);
  const productListData = useRef();
  const [successAPI, setSuccessAPI] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState(dataProduct);

  const handleChange = (value) => {
    setData(dataProduct.filter((data) => (value ? data.tags.includes(value) : data)));
    console.log(value);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setDataDetail(undefined);
    formik.resetForm();
  };
  const fetchData = async () => {
    setLoading(true);
    try {
      const { data: response } = await axiosInstance.get('devices');
      console.log(response.items);
      setProductList(response.items);
      productListData.current = response.items;
    } catch (error) {
      console.error(error.message);
    }
    setLoading(false);
  };
  const handleSearchProduct = (event) => {
    const keyword = event.target.value.toLowerCase();
    console.log(productList);
    const listProductFilter = productList.filter((element) =>
      element.nameLaptop.toString()?.toLowerCase()?.includes(keyword),
    );

    if (keyword === '') {
      setProductList(productListData.current);
    } else {
      setProductList(listProductFilter);
    }
  };

  const handleDeleteProduct = async (product) => {
    try {
      console.log(product._uuid);
      const { data: response } = await axiosInstance.delete(`devices/${product._uuid}`);
      setSuccessAPI(true);
      console.log(response.items);
    } catch (error) {
      console.error(error.message);
    }
  };
  const formik = useFormik({
    initialValues: {
      productImageLink: '',
      productName: '',
      price: '',
      sale: '',
      tags: [],
    },
    onSubmit: async (values, { resetForm }) => {
      if (dataDetail) {
        try {
          const { data: response } = await axiosInstance.put('devices', [
            {
              ...dataDetail,
              imageProduct: values.productImageLink,
              nameLaptop: [values.productName],
              price: values.price,
              salePercentage: values.sale,
              tag: values.tags,
              key: values.key,
            },
          ]);
          setSuccessAPI(true);
          console.log(response.items);
        } catch (error) {
          console.error(error.message);
        }
      } else {
        try {
          const { data: response } = await axiosInstance.post('devices', [
            {
              imageProduct: values.productImageLink,
              nameLaptop: [values.productName],
              price: values.price,
              salePercentage: values.sale,
              tag: values.tags,
              key: values.key,
            },
          ]);
          setSuccessAPI(true);
          console.log(response.items);
        } catch (error) {
          console.error(error.message);
        }
      }
      resetForm({ productImageLink: '', productName: '', price: '', sale: '', tags: [] });
      setDataDetail(undefined);
      setIsModalOpen(false);
    },
  });

  const [dataDetail, setDataDetail] = useState(undefined);

  const handleEditProduct = (product) => {
    setDataDetail(product);
    formik.setFieldValue('productImageLink', product.imageProduct);
    formik.setFieldValue('productName', product.nameLaptop);
    formik.setFieldValue('price', product.price);
    formik.setFieldValue('sale', product.salePercentage);
    formik.setFieldValue('tags', product.tag);
    formik.setFieldValue('key', product.key);
    setIsModalOpen(true);
  };
  console.log(data?.filter((value) => !value.delete));

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (successAPI) {
      fetchData();
      setSuccessAPI(false);
    }
  }, [successAPI]); //kiem tra api da goi thanh cong hay khong

  return (
    <div>
      <div className="mb-[10px]">
        <Input className="w-[40%] mr-[20px]" placeholder="Enter Keyword..." onChange={handleSearchProduct} />
        {/* 
        <Select
          className="mr-[20px] w-[25vh]"
          defaultValue="Pick an option"
          placeholder="Pick an option"
          onChange={handleChange}
          options={[...new Set(dataProduct.reduce((acc, x) => [...acc, ...x.tags], []))]?.map((data) => ({
            label: data,
            value: data,
          }))}
          allowClear
        /> */}

        <Button className="bg-white" onClick={showModal}>
          Create
        </Button>
      </div>
      <Table dataSource={productList && productList?.filter((value) => !value.delete)} loading={loading}>
        <Column
          title="Product Image"
          dataIndex="imageProduct"
          key="productImageLink"
          render={(imageProduct) => {
            if (Array.isArray(imageProduct)) {
              return imageProduct?.map((link) => (
                <span style={{ margin: '0px 4px' }}>
                  <Image width={50} src={link} />
                </span>
              ));
            } else {
              return (
                <div style={{ marginLeft: '12px' }}>
                  <Image width={50} src={imageProduct} />
                </div>
              );
            }
          }}
        />
        <Column title="Product Name" dataIndex="nameLaptop" key="firstName" />
        <Column
          title="Update"
          key="update"
          render={(tag, record, index) => {
            return <EditOutlined onClick={() => handleEditProduct(record)} />;
          }}
        />
        <Column
          title="Delete"
          key="Delete"
          render={(tag, index) => {
            return <DeleteOutlined onClick={() => handleDeleteProduct(index)} />;
          }}
        />
        <Column title="Price" dataIndex="price" key="price" />
        <Column title="Sale" dataIndex="salePercentage" key="sale" />
        <Column
          title="Tag"
          dataIndex="tag"
          key="tag"
          render={(tags, index) => (
            <>
              <Tag color="blue" key={tags}>
                {tags}
              </Tag>
            </>
          )}
        />
      </Table>
      {/* Modal create */}
      <Modal
        title="Add Product"
        open={isModalOpen}
        onOk={formik.handleSubmit}
        onCancel={handleCancel}
        okButtonProps={{ style: { backgroundColor: '#4096FF' } }}
      >
        <form>
          <div className="flex mb-[20px]">
            <span
              style={{
                width: 120,
              }}
              className="mr-[10px]"
            >
              Product Image Link
            </span>
            <span
              style={{
                width: 320,
              }}
            >
              <Input
                value={formik.values.productImageLink}
                name="productImageLink"
                onChange={formik.handleChange}
                placeholder="Product Image Link..."
              />
            </span>
          </div>
          <div className="flex mb-[20px]">
            <span
              style={{
                width: 120,
              }}
              className="mr-[10px]"
            >
              Product Name
            </span>
            <span
              style={{
                width: 320,
              }}
            >
              <Input
                value={formik.values.productName}
                onChange={formik.handleChange}
                name="productName"
                placeholder="Product Name..."
              />
            </span>
          </div>

          <div className="flex mb-[20px]">
            <span
              style={{
                width: 120,
              }}
              className="mr-[10px]"
            >
              Price
            </span>
            <span
              style={{
                width: 320,
              }}
            >
              <Input value={formik.values.price} onChange={formik.handleChange} name="price" placeholder="Price..." />
            </span>
          </div>

          <div className="flex mb-[20px]">
            <span
              style={{
                width: 120,
              }}
              className="mr-[10px]"
            >
              Sale
            </span>
            <span
              style={{
                width: 320,
              }}
            >
              <Input value={formik.values.sale} onChange={formik.handleChange} name="sale" placeholder="Sale..." />
            </span>
          </div>

          <div className="flex mb-[20px]">
            <span
              style={{
                width: 120,
              }}
              className="mr-[10px]"
            >
              Tag
            </span>
            <span
              style={{
                width: 320,
              }}
            >
              <Input value={formik.values.tags} onChange={formik.handleChange} name="tags" placeholder="Tag..." />
            </span>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Homepage1;
