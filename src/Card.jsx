import React from "react";

export default function Card(produxtData) {

    return (
        <a href={`./${produxtData.prodId}`} class='product__item'>
            <div class='product__item-image'><img src={`${produxtData.photo}`} alt={produxtData.title} /></div>
            <div class="product__item-name">{produxtData.title}</div>
            <div class="product__item-price">{produxtData.price.replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ')} р.</div>
            <div class="product__item-footer">
                <button class="product__item-buy">В корзину</button>
            </div>
        </a>
    )
}