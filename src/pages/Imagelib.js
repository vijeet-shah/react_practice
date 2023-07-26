import React from 'react';
import Img1 from '../assets/img1.png';
import Img2 from '../assets/img2.png';
import Img3 from '../assets/img3.png';
import Img4 from '../assets/img4.png';
import Img5 from '../assets/img5.png';
import Img6 from '../assets/img6.png';
import Img7 from '../assets/img7.png';
import Img8 from '../assets/img8.png';
import Img9 from '../assets/img9.png';
import Img10 from '../assets/img10.png';
import './Imagelib.css';
import NavBar from '../components/NavBar';



function Imagelib() {
    
  return (
    <div>
    <NavBar/>
    <div className='grid-container'>
    <div className='grid-item'>
    <img src={Img1} alt= 'a'/>
    </div>
    <div className='grid-item'>
    <img src={Img2} alt= 'a' />
    </div>
    <div className='grid-item'>
    <img src={Img3} alt= 'a' />
    </div>
    <div className='grid-item'>
    <img src={Img4} alt= 'a' /></div>
    <div className='grid-item'>
    <img src={Img5} alt= 'a' /></div>
    <div className='grid-item'>
    <img src={Img6} alt= 'a' /></div>
    <div className='grid-item'>
    <img src={Img7} alt= 'a' /></div>
    <div className='grid-item'>
    <img src={Img8} alt= 'a' /></div>
    <div className='grid-item'>
    <img src={Img9} alt= 'a' /></div>
    <div className='grid-item'>
    <img src={Img10} alt= 'a' /></div>
    </div>
    </div>
  )
}

export default Imagelib