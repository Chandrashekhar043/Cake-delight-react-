// src/Cake.js
import React, { useState } from 'react';

const Cake = ({ name, description, image }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="cake">
      <img src={image} alt={name} className="cake-image" />
      <h2>{name}</h2>
      <p>{description}</p>
      <button onClick={toggleLike}>
        {liked ? 'Unlike' : 'Like'}
      </button>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default Cake;
