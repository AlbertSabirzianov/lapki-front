import { useState, useEffect } from "react";
import axios from "axios";


function getPictureUrl(id) {
    return 'http://127.0.0.1:8000/jewelry/' + id + '/picture'
}

function getJewelryUrl(id) {
    return 'http://127.0.0.1:8000/jewelry/' + id
}

export default function OneJewelry({ id }) {
    const [pictures, setPictures] = useState([])
    const [jewelry, setJewerly] = useState({})

    useEffect(() => {
        axios.get(getPictureUrl(id)).then(response =>
            setPictures(response.data)
        );
        axios.get(getJewelryUrl(id)).then(response => {
            setJewerly(response.data)
        })
    })

    
    return (
        <>
        <div className="card">
            {pictures.map(picture =>
                <img src={picture.url} className="card-img-top"></img>
            )}
            <div className="card-body">
                <h5 className="card-title">{jewelry.name}</h5>
                <p className="card-text">{jewelry.description}</p>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Цена: {jewelry.price}</li>
                    <li class="list-group-item">Категория: {jewelry.cat}</li>
                    
                </ul>
            </div>
        </div>
        </>
    )
}





