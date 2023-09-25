import axios from 'axios';
import './App.css';
import './styles/navbar.css';
import './styles/slider.css';
import './styles/mobile.css';

import JewelryList from './components/jewelrysmal';
import NavBar from './components/navbar';
import { useEffect, useState } from 'react';
import OneJewelry from './components/jewelryone';
import { baseUrl } from './components/utils';
import Basket from './components/basket';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const jewelryUrl = baseUrl + 'jewelry';

function App() {
  const [summ, stateSumm] = useState(0);
  const [bascetJewelrys, stateBascetJewelrys] = useState([]);
  const [idList, stateIdList] = useState([]);

  const [d, setData] = useState([]); 
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
      setData(d => response.data)
        );
  
  }

  function stopFilter() { // Отменяет фильтрацию по категориям
    axios.get(jewelryUrl).then(response => 
      setData(d => response.data)
        );
  }

  return (
    <>
    
    <Router>
    <NavBar setSearchText={setSearchText}  changeFilter={changeFilter} stopFilter={stopFilter}/>
      <Routes>
        <Route exact path='/' element={<JewelryList d={filterData}/>}/>
        <Route path='/jewelry/:id/:name' element={
             <OneJewelry 
                stateBascetJewelrys={stateBascetJewelrys}
                summ={summ}
                stateSumm={stateSumm}
                stateIdList={stateIdList}
                idList={idList}
              />} 
        />
      </Routes>
        <Basket 
            bascetJewelrys={bascetJewelrys}
            stateBascetJewelrys={stateBascetJewelrys}
            summ={summ}
            stateSumm={stateSumm}
            stateIdList={stateIdList}
            idList={idList} 
        />
      </Router>
    
   </>
  );
}

export default App;
