import React from 'react';
import './Nav.css';


function Nav(props) {
  return (
    <div className='TopNav'>
      <h1>Currency Rates Today</h1>
      <h5>Please click on bar to find out current rate for Euro</h5>
      <div className='currencyNav'>
      {
        rates
        .map(rate =>(
          mainCurrencies.includes(rate[0]) ?
            <button className='countrySelection' onClick={removeCurrency}>
            {rate[0]}
            </button>
          :
            <button className='countrySelection' onClick={addCurrency}>
            {rate[0]}
            </button>
        ))
        }
      </div>
      </div>
  );
}

export default Nav;
