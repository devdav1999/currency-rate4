import React from 'react';
import './Nav.css';


function Nav(props) {
  return (
    <div className='TopNav'>
      <h1>Currency Rates Today</h1>
      <h5>Please click on bar to find out current rate for Euro</h5>
      <div className='currencyNav'>
      {
        props.rates.map(rate =>(
          props.mainCurrencies.includes(rate[0]) ?
            <button className='countrySelection' onClick={props.removeCurrency}>
            {rate[0]}
            </button>
          :
            <button className='countrySelection' onClick={props.addCurrency}>
            {rate[0]}
            </button>
        ))
        }
      </div>
      </div>
  );
}

export default Nav;
