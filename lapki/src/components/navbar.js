
import { useState } from 'react';

export default function NavBar({ changeSearch, changeFilter, clickMany}) {
    const [text, setText] = useState('');



    return(
        <>
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
            
            <a href='/' className="navbar-brand">Lapki</a>

            <ul className='navbar-nav'>
               <li class="nav-item dropdown">
                    <a href='/' className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Сортировать
                    </a>
                    <ul className="dropdown-menu">
                        <li><button className="dropdown-item" onClick={() => changeSearch(text)}>  украшения</button></li>
                        <li><button className="dropdown-item" onClick={() => changeFilter(1)}>Кольца</button></li>
                        <li><button className="dropdown-item" onClick={() => changeFilter(2)}>Одерелья</button></li>
                        <li><button className="dropdown-item" onClick={() => changeFilter(3)}>Серьги</button></li>
                        <li><button className="dropdown-item" onClick={() => changeFilter(4)}>Брелки</button></li>
                        <li><button className="dropdown-item" onClick={() => changeFilter(5)}>Браслеты</button></li>
                    </ul>
               </li>

            </ul>

            <form className="d-flex" role="search">
            <input 
                className="form-control me-2"
                type="search"
                placeholder="Search" 
                aria-label="Search"
                onChange={(e) => {
                    changeSearch(e.target.value);
                    setText(text => e.target.value);
                    console.log(e.target.value);
                }
                }></input>
            <button 
                className="btn btn-outline-success" 
                type="submit"
                onClick={() => clickMany(text)}>Search</button>
            </form>
        </div>
        </nav>
        </>
    )
}



