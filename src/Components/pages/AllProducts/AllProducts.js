import React, { useState } from 'react';
import { Image, Space, Table, Tag, Input, Select, Button, Modal } from 'antd';
import { Avatar } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useFormik } from 'formik';
import FormItem from 'antd/es/form/FormItem';

const { Column, ColumnGroup } = Table;
const { Search } = Input;

let dataProduct = [
  {
    key: '1',
    productName: 'Razer Blade 14 Models',
    price: '32$',
    sale: '10%',
    tags: ['laptop'],
    productImageLink: ['https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'],
    delete: false,
  },
  {
    key: '2',
    productName: 'Razer Blade 16 Models',
    price: '32$',
    sale: 'No',
    tags: ['laptop'],
    productImageLink: [
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    ],
    delete: false,
  },
  {
    key: '3',
    productName: 'Razer Kiyo Pro Ultra',
    productImageLink: [''],
    price: '32$',
    sale: '5%',
    tags: ['webcam'],
    delete: false,
  },
  {
    key: '4',
    productName: 'Razer Raptor 27 - 1440P - 165 Hz',
    productImageLink: [''],
    price: '32$',
    sale: '20%',
    tags: ['monitor', 'pc component'],
    delete: false,
  },
  {
    key: '5',
    productName: 'Razer BlackWidow V4 Pro',
    productImageLink: [''],
    price: '32$',
    sale: 'No',
    tags: ['keyboard', 'pc component'],
    delete: false,
  },
];

const AllProducts = () => {
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

  const handleSearchProduct = (event) => {
    const keyword = event.target.value.toLowerCase();
    const listProductFilter = dataProduct.filter((element) => element.productName.toLowerCase().includes(keyword));
    if (keyword === '') {
      setData(dataProduct);
    } else {
      setData(listProductFilter);
    }
  };

  const handleDeleteProduct = (product) => {
    // const listProductFilter = data.filter(
    //   (element) => element.key !== product.key
    // );
    const deleteData = data?.map((data) => {
      if (product.key === data.key) {
        return {
          ...data,
          delete: true,
        };
      }
      return data;
    });

    dataProduct = deleteData;
    setData(deleteData);
    console.log(deleteData);
  };
  const formik = useFormik({
    initialValues: {
      productImageLink: '',
      productName: '',
      price: '',
      sale: '',
      tags: [],
    },
    onSubmit: (values, { resetForm }) => {
      if (dataDetail) {
        const listNewData = data?.map((product) => {
          if (product.key === values.key) {
            return {
              productImageLink: values.productImageLink,
              productName: values.productName,
              price: values.price,
              sale: values.sale,
              tags: values.tags,
              key: values.key,
            };
          }
          return product;
        });
        setData(listNewData);
        dataProduct = listNewData;
      } else {
        setData([...data, { ...values, key: Date.now(), tags: values.tags.split(',') }]);
        dataProduct = [...data, { ...values, key: Date.now(), tags: values.tags.split(',') }];
      }
      resetForm({ productImageLink: '', productName: '', price: '', sale: '', tags: [] });
      setDataDetail(undefined);
      setIsModalOpen(false);
    },
  });

  const [dataDetail, setDataDetail] = useState(undefined);

  const handleEditProduct = (product) => {
    setDataDetail(product);
    formik.setFieldValue('productImageLink', product.productImageLink);
    formik.setFieldValue('productName', product.productName);
    formik.setFieldValue('price', product.price);
    formik.setFieldValue('sale', product.sale);
    formik.setFieldValue('tags', product.tags);
    formik.setFieldValue('key', product.key);
    setIsModalOpen(true);
  };
  console.log(data?.filter((value) => !value.delete));

  return (
    <div>
      <div className="mb-[10px]">
        <Input className="w-[40%] mr-[20px]" placeholder="Enter Keyword..." onChange={handleSearchProduct} />

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
        />

        <Button className="bg-white" onClick={showModal}>
          Create
        </Button>
      </div>
      <Table dataSource={data && data?.filter((value) => !value.delete)}>
        <Column
          title="Product Image"
          dataIndex="productImageLink"
          key="productImageLink"
          render={(linkImage) => {
            if (Array.isArray(linkImage)) {
              return linkImage?.map((link) => (
                <span style={{ margin: '0px 4px' }}>
                  <Image width={50} src={link} />
                </span>
              ));
            } else {
              return (
                <div style={{ marginLeft: '12px' }}>
                  <Image width={50} src={linkImage} />
                </div>
              );
            }
          }}
        />
        <Column title="Product Name" dataIndex="productName" key="firstName" />
        <Column
          title="Update"
          key="update"
          render={(tag, record, index) => {
            return <EditOutlined onClick={() => handleEditProduct(record)} />;
          }}
        />
        <Column
          title="Delete"
          key="Delte"
          render={(tag, index) => {
            return <DeleteOutlined onClick={() => handleDeleteProduct(index)} />;
          }}
        />
        <Column title="Price" dataIndex="price" key="price" />
        <Column title="Sale" dataIndex="sale" key="sale" />
        <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={(tags, index) => (
            <>
              {tags?.map((tag) => (
                <Tag color="blue" key={tag}>
                  {tag}
                </Tag>
              ))}
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

export default AllProducts;
