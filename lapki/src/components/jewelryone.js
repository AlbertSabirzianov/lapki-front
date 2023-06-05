import { useState, useEffect } from "react";
import axios from "axios";
import Order from "./order";
import { baseUrl } from "./utils";


function getPictureUrl(id) {
    return baseUrl + 'jewelry/' + id + '/picture'
}

function getJewelryUrl(id) {
    return baseUrl + 'jewelry/' + id
}

export default function OneJewelry({ id }) {
    const [pictures, setPictures] = useState([])
    const [jewelry, setJewerly] = useState({})

    useEffect(() => {
        axios.get(getPictureUrl(id)).then(response =>
            {setPictures(response.data)}
        );
        axios.get(getJewelryUrl(id)).then(response => {
            setJewerly(response.data)
        })
    }, [])

    
    return (
        <>
        <div className="card" id='one'>
            {pictures.map(picture =>
                <img src={picture.picture} className="card-img-top" key={picture.pk} alt="ну вот так("></img>
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
        <Order id={id} jewelryName={jewelry.name}></Order>
        </>
    )
}





