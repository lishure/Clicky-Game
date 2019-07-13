// sets up the reusable FriendCard component
import React from 'react'
import './Card.css'
// pass the image into each card so all 12 are rendered
const Card = props => {
  console.log(__dirname)
  return (
    <div className='card' onClick={props.imageClick}>
      <div className='img-container'>
        <img className='image' alt={props.image.replace('.jpg', '')} src={props.image} />
      </div>
    </div>
  )
}
export default Card
