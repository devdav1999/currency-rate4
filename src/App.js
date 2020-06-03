import React, {useState, useEffect} from 'react';
import './App.css';
import Bar from './components/Bar/Bar.js';
import Nav from './components/Nav/Nav.js';
import Dropdown from './components/Dropdown/Dropdown.js';


function App() {
  const [mainCurrencies, setMainCurrencies] = useState(["HKD", "USD", "AUD", "GBP", "CAD"]);
  const [rates, setRates] = useState([]);
  const [base, setBase] = useState(["EUR"]);
  

  function doFetch() {
    const url = "https://api.exchangeratesapi.io/latest?base=" + base;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log("the data", data);
            console.log(data.rates);
            setRates(Object.entries(data.rates));
            setMainCurrencies(mainCurrencies);
        });
  }

  function addCurrency(event){
    const currency = event.target.textContent;
    setMainCurrencies([...mainCurrencies, currency])

  }
  

  function removeCurrency(event){
    const currency = event.target.textContent;
    setMainCurrencies(mainCurrencies.filter(cur => cur !== currency));
  }

  
  function currencyDrop(ev){
    console.log('testing dropdown');
    const value = ev.target.value;
    setBase(value);
    console.log(base);
  }

  
  useEffect(doFetch, [base]);

  return (
    <div>
      
      <Nav
      rates = {rates}
      mainCurrencies= {mainCurrencies}
      removeCurrency = {removeCurrency}
      addCurrency = {addCurrency}
      />

      <Dropdown
      test = {currencyDrop}
      rates= {rates}/>

      
      <Bar
      rates ={rates}
      mainCurrencies ={mainCurrencies}
      />

   </div>
   );
}


export default App;
