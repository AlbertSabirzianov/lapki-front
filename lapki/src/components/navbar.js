import svg from './Attachment-1.png';
import { Link } from 'react-router-dom';

export default function NavBar({ setSearchText, changeFilter, stopFilter}) {

    return(
        <>
        <nav id='navbar' className="navbar navbar-expand-lg bg-body-tertiary" >
        
            <ul className='navbar-nav'>
               <li className="nav-item dropdown">
                    <a href='/' className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list-nested" viewBox="0 0 16 16" id='cat_list'>
                    <path fillRule="evenodd" d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                    </a>
                    <ul className="dropdown-menu" id='dropdown-nav'>
                        <li><button className="dropdown-item" onClick={() => stopFilter()}> Все украшения</button></li>
                        <li><button className="dropdown-item" onClick={() => changeFilter(1)}>Кольца</button></li>
                        <li><button className="dropdown-item" onClick={() => changeFilter(2)}>Ожерелья</button></li>
                        <li><button className="dropdown-item" onClick={() => changeFilter(3)}>Серьги</button></li>
                        <li><button className="dropdown-item" onClick={() => changeFilter(4)}>Брелки</button></li>
                        <li><button className="dropdown-item" onClick={() => changeFilter(5)}>Браслеты</button></li>
                        <hr></hr>
                        <li><button className="dropdown-item"><p>Связаться с нами:</p>+7 (908) 514-45-71</button></li>
                        <hr></hr>
                        <li style={{"margin-left": "15px"}}>Социальные сети:</li>
                        <li style={{"margin-left": "15px", "margin-top": "8px", "margin-bottom": "10px"}}><a href='https://t.me/lapki_store' target='_blank' rel='noreferrer'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                        </svg></a>
                        <a style={{"margin-left": "15px", "margin-top": "8px", "margin-bottom": "10px"}} href='https://vk.com/away.php?to=https%3A%2F%2Finstagram.com%2F_lapki.store_%3Figshid%3DMmIzYWVlNDQ5Yg%3D%3D' target='_blank' rel='noreferrer'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                        </svg></a>
                        </li>
                    </ul>
               </li>

            </ul>
            <Link to={'/'}>
            <img src={svg} href='/' alt='No' className='cat' style={{"width": '250px'}}></img>          
            </Link>
        
            <form className="d-flex" role="search">
            <input 
                className="form-control me-2"
                type="search"
                placeholder="Search" 
                aria-label="Search"
                onChange={(e) => setSearchText(e.target.value)}>
             </input>
            <Link to={'/'}>
            <button 
                className="btn btn-outline-success" 
                type="submit"
                >Search</button>
            </Link>
            </form>
        
        </nav>
        </>
    )
}
