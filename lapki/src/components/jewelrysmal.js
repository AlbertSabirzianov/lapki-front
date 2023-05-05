import axios from 'axios';
import { useState, useEffect } from 'react';

const jewelryUrl = 'http://127.0.0.1:8000/jewelry/'

function JewelryList() {
    const [d, setData] = useState([])
    useEffect(() => {
        axios.get(jewelryUrl).then(response => 
            setData(response.data.results)
        )
    }, [])

    return (
        <div className='content-jewelry'>
            {
                d.map(jewelry => 
                <div className='card' style={{width: '18rem'}} key={jewelry.pk}>
                <img className="card-img-top" alt="somthind wrong" src={jewelry.icon}/>
                <div className="card-body">
                    <h5 className="card-title">{jewelry.name}</h5>
                    <p className="card-text">{jewelry.description}</p>
                    <h3>Категория: {jewelry.cat}</h3>
                </div>
                </div>
                    )
            }
        </div>
    )

}

export default JewelryList
