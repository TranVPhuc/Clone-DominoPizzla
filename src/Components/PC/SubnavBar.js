import React from 'react'
import Nav from 'react-bootstrap/Nav';
import './PC.css';

const SubnavBar = () => {
  return (
    <div>
      <Nav className="flex justify-center" as="ul">
        <Nav.Item as="li">
          <Nav.Link className="text-white subnavItem" href="#">
            Laptops
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="text-white subnavItem" href="#">
            Desktops & Components
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="text-white subnavItem" href="#">
            Monitors
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="text-white subnavItem" href="#">
            Mice
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="text-white subnavItem" href="#">
            Mats
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="text-white subnavItem" href="#">
            Keyboards
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="text-white subnavItem" href="#">
            Headsets
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="text-white subnavItem" href="#">
            Speakers
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="text-white subnavItem" href="#">
            Content Creation
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="text-white subnavItem" href="#">
            Productivity
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="text-white subnavItem" href="#">
            Chairs
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="text-white subnavItem" href="#">
            Software
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default SubnavBar