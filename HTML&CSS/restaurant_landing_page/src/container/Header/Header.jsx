import React from 'react';
import {SubHeading} from '../../components'
import {images} from '../../constants'
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Chase the new flavour'/>
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className="p__opensans" style={{margin: '2rem 0'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis, magna dictum sodales maximus, lorem massa congue tellus, a volutpat urna nisl at enim. Cras nec interdum quam, id egestas ipsum. Duis aliquam elit at massa bibendum ullamcorper. Mauris turpis nisi, tempor quis scelerisque eget, convallis vehicula libero. Donec faucibus mi eget dapibus hendrerit. Suspendisse felis erat, semper non massa id, tristique tincidunt ipsum. Fusce hendrerit dolor non dignissim euismod. Ut sit amet posuere orci, at efficitur urna.</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img"/>
    </div>
  </div>
);

export default Header;
