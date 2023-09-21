import React from 'react'
import Card from 'react-bootstrap/Card';
import './CategoryCard.css'
const CategoryCard = ({cateTitle, cateDescription, cardSrc}) => {
  return (
    <div className='flex h-full'>
      <Card className="w-[18rem] cataCard flex-auto">
        <a className='cardInfo flex h-full flex-col' href="#">
          <Card.Img variant="top" src={cardSrc} />
          <Card.Body className="bg-[#111] flex flex-col ">
            <Card.Title className="text-white font-light ">{cateTitle}</Card.Title>
            <Card.Text className="text-[#777] font-light flex-auto">{cateDescription}</Card.Text>
            <span className="no-underline text-[#44d62c] moreInfo">
              Learn More
            </span>
          </Card.Body>
        </a>
      </Card>
    </div>
  );
}

export default CategoryCard