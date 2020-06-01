import React from 'react';
import './Bar.css'


function Bar(props) {
  return (
    <div className='BarContainer'>
    {
      props.rates.filter(rate => props.mainCurrencies.includes(rate[0]))
      .map(rate =>(
          <div className='Bar' style={{height: (1/rate[1] * 100) + '%'}}>
          {rate[0]}
          <br></br>
          {rate[1]}
          </div>
      ))
      }
    </div>
  );
}

export default Bar;
