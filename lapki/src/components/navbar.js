import svg from './Lapki.png';

export default function NavBar({ setSearchText, changeFilter, clickMany, stopFilter}) {

    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        
            <ul className='navbar-nav'>
               <li class="nav-item dropdown">
                    <a href='/' className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </a>
                    <ul className="dropdown-menu" style={{'width': "500px",}}>
                        <li><button className="dropdown-item" onClick={() => stopFilter()}> Все украшения</button></li>
                        <li><button className="dropdown-item" onClick={() => changeFilter(1)}>Кольца</button></li>
                        <li><button className="dropdown-item" onClick={() => changeFilter(2)}>Ожерелья</button></li>
                        <li><button className="dropdown-item" onClick={() => changeFilter(3)}>Серьги</button></li>
                        <li><button className="dropdown-item" onClick={() => changeFilter(4)}>Брелки</button></li>
                        <li><button className="dropdown-item" onClick={() => changeFilter(5)}>Браслеты</button></li>
                        <hr></hr>
                        <li><button className="dropdown-item"><p>Связаться с нами:</p>+7 (908) 514-45-71</button></li>
                    </ul>
               </li>

            </ul>
        
            <img src={svg} href='/' alt='No' className='cat' style={{"width": '250px'}} onClick={() => clickMany()}></img>          
        
        
            <form className="d-flex" role="search">
            <input 
                className="form-control me-2"
                type="search"
                placeholder="Search" 
                aria-label="Search"
                onChange={(e) => setSearchText(e.target.value)}>
             </input>
            <button 
                className="btn btn-outline-success" 
                type="submit"
                onClick={() => clickMany()}>Search</button>
            </form>
        
        </nav>
        </>
    )
}



