import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import { images } from '../assets/assets';

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={images.img9}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={images.img2}
              text="Travel through the Islands of Bali in a Private cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={images.img2}
              text="Travel through the Islands of Bali in a Private cruise"
              label="Luxury"
              path="/services"
            />
            <CardItem
              src={images.img2}
              text="Travel through the Islands of Bali in a Private cruise"
              label="Luxury"
              path="/services"
            />
            <CardItem
              src={images.img2}
              text="Travel through the Islands of Bali in a Private cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
