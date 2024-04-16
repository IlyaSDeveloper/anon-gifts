import React from "react";

// Utility function for formatting price
const formatPrice = (price) => {
  return price.replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ');
};

export default function Card({ prodId, photo, title, price }) {
  return (
    <a href={`./${prodId}`} className='product__item'>
      <div className='product__item-image'>
        <img src={photo} alt={title} />
      </div>
      <div className="product__item-name">{title}</div>
      <div className="product__item-price">{formatPrice(price)} р.</div>
      <div className="product__item-footer">
        <button className="product__item-buy">В корзину</button>
      </div>
    </a>
  );
}