import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "./utils";
import Slider from "./slider";

import Description from "./description";

function getPictureUrl(id) {
    return baseUrl + 'jewelry/' + id + '/picture'
}

function getJewelryUrl(id) {
    return baseUrl + 'jewelry/' + id
}

export default function OneJewelry({ id, bascetJewelrys, stateBascetJewelrys, stateSumm, summ, isIn, stateIdList, idList }) {
    const [pictures, setPictures] = useState([])
    const [jewelry, setJewerly] = useState({})

    useEffect(() => {
        axios.get(getPictureUrl(id)).then(response =>
            {setPictures(response.data)}
        );
        axios.get(getJewelryUrl(id)).then(response => {
            setJewerly(response.data)
        })
    }, []);

    
    return (
        <>
        
            <Slider pictures={pictures}/>
            <Description 
            jewelry={jewelry} 
            bascetJewelrys={bascetJewelrys}
            stateBascetJewelrys={stateBascetJewelrys}
            stateSumm={stateSumm}
            isIn={isIn}
            stateIdList={stateIdList}
            idList={idList}
            
            />

        
        </>
      
    )
}

export {getJewelryUrl};




