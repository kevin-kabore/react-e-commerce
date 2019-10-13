import React from 'react';

import CustomButton from '../custom-button/CustomButton';

import './collection-item.styles.scss';

export const CollectionItem = ({ name, price, imageUrl }) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <CustomButton inverted>ADD TO CART</CustomButton>
    </div>
  );
};
