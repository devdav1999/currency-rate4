import React, {useState, useEffect} from 'react';
import './App.css';
import BarContainer from './components/BarContainer/BarContainer.js';
import Bar from './components/Bar/Bar.js';
import Nav from './components/Nav/Nav.js';


function App() {
  const [mainCurrencies, setMainCurrencies] = useState(["HKD", "USD", "AUD", "GBP", "CAD"]);
  const [rates, setRates] = useState([]);
  

  function doFetch() {
    const url = "https://api.exchangeratesapi.io/latest";
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

  useEffect(doFetch, []);

  return (
    <div>
      <Nav
      rates = {rates}
      mainCurrencies= {mainCurrencies}
      removeCurrency = {removeCurrency}
      addCurrency = {addCurrency}/>
      
      
      <BarContainer>
      <Bar
      rates ={rates}
      mainCurrencies ={mainCurrencies}
      />
      </BarContainer>
   </div>
   );
}


export default App;
