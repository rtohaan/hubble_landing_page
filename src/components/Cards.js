import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these stunning pictures Hubble has captured!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='images/img-6.jpg'
              text='Hubble Takes a Spiral Snapshot'
              label='Galaxy M61 '
            />
            <CardItem
              src='images/img-5.jpg'
              text='Telescopes Unite in Unprecedented Observations of Famous Black Hole'
              label='First ever image of a Black Hole'
            />
            
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-4.jpg'
              text='Hubble Images a Galaxy in Dazzling Detail'
              label='Spiral galaxy NGC 691,'
            />
            <CardItem
              src='images/img-3.jpg'
              text='AAS Names New NASA-Affiliated Fellows, Legacy Fellows'
              label='Chandra X-Ray Observatory'
            />
            <CardItem
              src='images/img-2.png'
              text='NASA’s New Hubble Focus E-Book Provides a Front Row Seat to a Sky Full of Stars'
              label='NGC 4833'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;