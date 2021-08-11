import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img2 from '../assests/images/img-2.png'
import img3 from '../assests/images/img-3.jpg'
import img4 from '../assests/images/img-4.jpg'
import img5 from '../assests/images/img-5.jpg'
import img6 from '../assests/images/img-6.jpg'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these stunning pictures Hubble has captured!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src={img6}
              text='Hubble Takes a Spiral Snapshot'
              label='Galaxy M61 '
            />
            <CardItem
              src={img5}
              text='Telescopes Unite in Unprecedented Observations of Famous Black Hole'
              label='First ever image of a Black Hole'
            />
            
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img4}
              text='Hubble Images a Galaxy in Dazzling Detail'
              label='Spiral galaxy NGC 691'
            />
            <CardItem
              src={img3}
              text='AAS Names New NASA-Affiliated Fellows, Legacy Fellows'
              label='Chandra X-Ray Observatory'
            />
            <CardItem
              src={img2}
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