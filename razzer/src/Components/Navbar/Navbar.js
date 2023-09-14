import React, { useState } from 'react'
import './Navbar.css'
import logoWeb from './razer-logo.svg'
import './fontawesome-free-6.4.0-web/css/all.min.css'
import { Button, Modal, Popover } from 'antd';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { auth, db } from '../../firebase/FirebaseConfig';

const Navbar = () => {
  const content = (
    <div>
      <p>Cart</p>
      <p>Orders</p>
      <p>Account</p>
      <p>RazerStore Rewards</p>
      <div><a type="primary" onClick={() => showModal('signIn')} >Sign in</a></div>
      <div><a type="primary" onClick={() => showModal('signUp')} >Sign up</a></div>
    </div>
  );

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClickSignIn, setIsClickSignIn] = useState(true);
  const [isSignIn, setIsSignIn] = useState(false);
  // Chưa đăng nhập isSignIn = false
  //Đã đăng nhập isSignIn = true

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const showModal = (status) => {
    if (status === 'signIn') {
      setIsClickSignIn(true);
    } else {
      setIsClickSignIn(false);
    }
    setIsModalOpen(true);
  };
  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const signUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const result = await addDoc(collection(db, "users"), {
        uid: user.uid,
        email: user.email,
      });
      console.log(result);
      setIsModalOpen(false);
      return true;
    } catch (error) {
      return { error: error.message }
    }
  };

  const signIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      if (user) {
        setIsSignIn(true);
        localStorage.setItem('uid', user.uid);
      }
      setIsModalOpen(false);
      return true
    } catch (error) {
      return { error: error.message }
    }
  };


  return (
    
    <div>
      
      <Modal
        title={isClickSignIn ? 'Sign in' : 'Sign up'}
        open={isModalOpen}
        onOk={isClickSignIn ? signIn : signUp}
        onCancel={handleCancel}
        okText={isClickSignIn ? 'Sign in' : 'Sign up'}>
        <div style={{ margin: '8px' }}>
          <input placeholder='Enter your email...' type='email' onChange={handleChangeEmail}></input>
        </div>
        <div style={{ margin: '8px' }}>
          <input placeholder='Enter your password' type='password' onChange={handleChangePassword}></input>
        </div>
      </Modal>


      <nav className="navbar  bg-body-tertiary">
        <div className="container sticky">
          <a className="navbar-brand" href="#">
            <img className="web-brand" src={logoWeb} alt="Razzer" width={30} height={24} />
          </a>
          <a href="#" className="navbar-item">Store</a>
          <a href="#" className="navbar-item">PC</a>
          <a href="#" className="navbar-item">Console</a>
          <a href="#" className="navbar-item">Mobile</a>
          <a href="#" className="navbar-item">Lifestyle</a>
          <a href="#" className="navbar-item">Services</a>
          <a href="#" className="navbar-item">Community</a>
          <a href="#" className="navbar-item">Support</a>
          <i className="fa-solid fa-magnifying-glass search" />
          <Popover placement="bottomRight" content={content} trigger="click">
            <Button style={{ border: 'none' }}><i className="fa-regular fa-cart-shopping cart" /></Button>
          </Popover>
        </div>

      </nav>
      <div className="promotion">
        All orders over US$79 will enjoy free standard shipping to the United States.
      </div>
    </div>

  )
}

export default Navbar