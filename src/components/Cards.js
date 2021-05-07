import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Top-Rated Tourist Attractions in Canada</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

            <CardItem
              src='images/img-4.jpg'
              text='Explore amazing night view with the CN Tower'
              label='Adventure'
              path='/services'
            />

            <CardItem
              src='images/img-2.jpg'
              text='Travel along the lake'
              label='Nature'
              path='/services'
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Experience a wonderful adventure at Niagara Falls '
              label='Mystery'
              path='/services'
            />

            <CardItem
              src='images/img-5.jpg'
              text='Enjoy different kinds of festivals'
              label='Adventure'
              path='/products'
            />

            <CardItem
              src='images/img-1.jpeg'
              text='See the Northern Light in Canada'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;