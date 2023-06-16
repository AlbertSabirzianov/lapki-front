import axios from 'axios';
import './App.css';
import './styles/navbar.css';
import './styles/slider.css';

import JewelryList from './components/jewelrysmal';
import NavBar from './components/navbar';
import { useEffect, useState } from 'react';
import OneJewelry from './components/jewelryone';
import { baseUrl } from './components/utils';
import Basket from './components/basket';

const jewelryUrl = baseUrl + 'jewelry';

function App() {
  const [summ, stateSumm] = useState(0);
  const [bascetJewelrys, stateBascetJewelrys] = useState([]);
  const [idList, stateIdList] = useState([]);

  const [isOne, stateIsOne] = useState(false);
  const [d, setData] = useState([]); 
  const [id, setId] = useState(0); // id отдельного украшения
  const [searchText, setSearchText] = useState('');
  const filterData = d.filter(jewelry => {
    return jewelry.name.toLowerCase().includes(searchText.toLowerCase()) || jewelry.description.toLowerCase().includes(searchText.toLowerCase())
  })
  const [isIn, stateIsIn] = useState(false);

 

  function isInBasket() {
   
      for (let i = 0; i < bascetJewelrys.length; i++) {
        if (bascetJewelrys[i].pk === id) {
          return true
        }
      }
      return false
  }



  useEffect(() => {
    stateIsIn(isOne => isInBasket());

  }, [summ])

  useEffect(() => {
      axios.get(jewelryUrl).then(response => 
      setData(response.data)
        )
    }, []);
  
  function changeFilter(category) { // Меняет категорию украшений
    axios.get(jewelryUrl + '?category=' + category).then(response => 
      setData(d => response.data)
        );
    stateIsOne(isOne => false);
  }

  function stopFilter() { // Отменяет фильтрацию по категориям
    axios.get(jewelryUrl).then(response => 
      setData(d => response.data)
        );
    stateIsOne(isOne => false);
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
    { isOne ? <OneJewelry 
    id={id}
     bascetJewelrys={bascetJewelrys}
     stateBascetJewelrys={stateBascetJewelrys}
        summ={summ}
        stateSumm={stateSumm}
        isIn={isIn}
        stateIdList={stateIdList}
        idList={idList}
        /> : <JewelryList d={filterData} clickOne={clickOne}/> }
    <Basket 
     bascetJewelrys={bascetJewelrys}
     stateBascetJewelrys={stateBascetJewelrys}
     summ={summ}
     stateSumm={stateSumm}
     stateIdList={stateIdList}
     idList={idList}
     ></Basket>
   </>
  );
}

export default App;
