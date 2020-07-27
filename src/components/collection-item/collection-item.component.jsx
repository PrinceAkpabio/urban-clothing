import React from "react";

import './collection-item.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    {/* <style className='image' jsx>{`
    .image{
      background-image: ${imageUrl};
    }
    `}</style> */}
    
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
);

export default CollectionItem;
