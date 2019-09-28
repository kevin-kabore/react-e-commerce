import React from 'react';

import './collection-item.styles.scss';

export const CollectionItem = ({name, price, imageUrl}) => {
  return (
    <div className="collection-item">
      <div 
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span>{name}</span>
        <span>{price}</span>
      </div>
    </div>
  )
}