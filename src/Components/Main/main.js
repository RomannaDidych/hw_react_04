import React from 'react';
import crocus from './img/krokus_2.jpg';
import './main_style.css';

const Main = ()=> {
  return <div className='main'>
  	<h2 className= 'mainTitle'>Вітаю на головній сторінці!!!</h2>
  	<img className= 'insertImg' src={crocus} alt="crocus" />  
  </div>
}

export default Main;