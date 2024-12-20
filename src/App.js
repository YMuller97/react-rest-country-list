import {useState} from 'react';
import {useEffect} from 'react'; 
import List from './Components/List/List'
import './App.css';

const App = () => {
  const [countries, setCountries] = useState([]);
  
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/region/europe?fields=flags,name,population,region,capital,cca3")
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
    setCountries(data)
    console.log(countries)
  })
}, []);

  return (
    <div className='App'>
      <List countries={countries}/>
    </div>
  );
}

export default App;

