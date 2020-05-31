import React from 'react';
import './Bar.css'


function Bar(props) {
  return (
    {
      rates
      .filter(rate => mainCurrencies.includes(rate[0]))
      .map(rate =>(
          <div className='Bar' style={{height: (1/rate[1] * 100) + '%'}}>
          {rate[0]}
          <br></br>
          {rate[1]}
          </div>
      ))
      }
  );
}

export default Bar;
