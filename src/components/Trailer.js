import React from 'react'
import { useParams } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";

function Trailer({movies}) {
    const params=useParams();
    const movie= movies.filter((el)=> el.name == params.name)[0];
  return (
    <div className='trailer' style={{ backgroundImage:`url(https://www.shutterstock.com/image-photo/popcorn-on-yellow-background-260nw-1006204432.jpg)`
    ,width:'100%', height:'1000px', backgroundSize: "contain",
    backgroundRepeat: "no-repeat",  }}>
        <iframe style={{marginTop:'200px', marginLeft:'150px'}} width="1000" height="500" src={movie.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h1 className='h1_trailer'> {movie.name}</h1>
        <p className='p_trailer'> {movie.description}</p>
        <div className='rating_trailer'>
        <ReactStars
    count={5}
    size={24}
    activeColor="red"
    value={movie.rating}
    edit={false}
  />
  </div>
  

    </div>
  )
}

export default Trailer