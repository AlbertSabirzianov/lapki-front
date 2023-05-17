import axios from 'axios';
import './App.css';

import JewelryList from './components/jewelrysmal';
import NavBar from './components/navbar';
import { useEffect, useState } from 'react';
import OneJewelry from './components/jewelryone';


const jewelryUrl = 'http://127.0.0.1:8000/jewelry';

function App() {
  const [isOne, stateIsOne] = useState(false);
  const [d, setData] = useState([]);
  const [id, setId] = useState(0);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
      axios.get(jewelryUrl).then(response => 
      setData(response.data.results)
        )
    }, []);
  
  function changeSearch(search) { // Меняет запрашиваемые украшения
    setSearchText(text => search);
    
    stateIsOne(false);
    axios.get(jewelryUrl + '?search=' + searchText).then(response => 
      setData(response.data.results)
        );
    console.log(searchText);
  }

  function changeFilter(category) { // Меняет категорию украшений
    stateIsOne(false);
    axios.get(jewelryUrl + '?category=' + category).then(response => 
      setData(response.data.results)
        );
  }
  
  function clickOne(number) { // Откравает одно украшение
    setId(number => number);
    stateIsOne(b => true);
  }

  function clickMany(text) { // Переключает на все украшения
    setSearchText(t => text);
    stateIsOne(b => false);
  }

  return (
    <>
    <NavBar changeSearch={changeSearch} changeFilter={changeFilter} clickMany={clickMany}/>
    { isOne ? <OneJewelry id={id}/> : <JewelryList d={d} clickOne={clickOne}/> }
   </>
  );
}

export default App;
