import React from 'react'
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

function Moviecard({el}) {
  return (
    <div className='cartes' > 
      <Link  style={{textDecoration:'none', color:'black'}} to={`/trailer/${el.name}`}>
      <Card className='card' style={{ width: '18rem', margin:'20px' , height:'530px'}}>
      <Card.Img className='img_card' variant="top" src={el.posterurl} />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text className='desc_card'>
          {el.description}
        </Card.Text>
        <div className='rating_class' style={{ marginTop:'-70px'}}>
        <ReactStars
       
    count={5}
    size={24}
    activeColor="red"
    value={el.rating}
    edit={false}
  />
  </div>
        
      </Card.Body>
    </Card>
    </Link>
        
    </div>
  )
}

export default Moviecard