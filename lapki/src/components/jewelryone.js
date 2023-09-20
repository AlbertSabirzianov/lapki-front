import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "./utils";
import Slider from "./slider";
import BackButton from "./backbutton";
import Description from "./description";
import { useParams } from "react-router-dom";

function getPictureUrl(id) {
    return baseUrl + 'jewelry/' + id + '/picture'
}

function getJewelryUrl(id) {
    return baseUrl + 'jewelry/' + id
}

export default function OneJewelry({ stateBascetJewelrys, stateSumm, summ, stateIdList, idList }) {
    const params = useParams()
    const [pictures, setPictures] = useState([])
    const [jewelry, setJewerly] = useState({})
    const [isIn, stateIsiIn] = useState(false)

    useEffect(() => {
        axios.get(getPictureUrl(params.id)).then(response =>
            {setPictures(response.data)}
        );
        axios.get(getJewelryUrl(params.id)).then(response => {
            setJewerly(response.data)
        });
        stateIsiIn(isIn => idList.includes(parseInt(params.id)));
    }, [idList, params]);

    useEffect(() => {
        stateIsiIn(isIn => idList.includes(parseInt(params.id)));
    }, [idList, summ, params])
    
    return (
        <>        
            <Slider pictures={pictures}/>
            <Description 
            jewelry={jewelry} 
            stateBascetJewelrys={stateBascetJewelrys}
            stateSumm={stateSumm}
            isIn={isIn}
            stateIdList={stateIdList}    
            />
            <BackButton/>
        </>
    )
}

export {getJewelryUrl};
