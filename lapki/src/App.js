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
  const filterData = d.filter(jewelry => {
    return jewelry.name.toLowerCase().includes(searchText.toLowerCase()) || jewelry.description.toLowerCase().includes(searchText.toLowerCase())
  })

  useEffect(() => {
      axios.get(jewelryUrl).then(response => 
      setData(response.data)
        )
    }, []);
  
  function changeFilter(category) { // Меняет категорию украшений
    axios.get(jewelryUrl + '?category=' + category).then(response => 
      setData(response.data)
        )
  }

  function stopFilter() { // Отменяет фильтрацию по категориям
    axios.get(jewelryUrl).then(response => 
      setData(response.data)
        )
  }
  
  function clickOne(number) { // Откравает одно украшение
    setId(id => number);
    stateIsOne(b => true);
  }

  function clickMany() { // Переключает на все украшения
    stateIsOne(b => false);
  }

  return (
    <>
    <NavBar setSearchText={setSearchText}  changeFilter={changeFilter} clickMany={clickMany} stopFilter={stopFilter}/>
    { isOne ? <OneJewelry id={id}/> : <JewelryList d={filterData} clickOne={clickOne}/> }
   </>
  );
}

export default App;
