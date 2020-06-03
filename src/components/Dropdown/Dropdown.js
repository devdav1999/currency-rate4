import React from 'react';
import './Dropdown.css';


function Dropdown(props) {
  return (
    <div className="CurrencyChooser">
      <label>Base currency:</label>
      <select onChange={props.test} className="CurrencyChooser-select">
    {
      props.rates.map(rate=>(
          <option>{rate[0]}</option>
      ))
    }
      </select>
  </div>
  );
}

export default Dropdown;
