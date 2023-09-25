import { Link } from "react-router-dom";

function getUrlName(name) {
    return '/' + name.split(' ').join('_')
}

function JewelryList({ d }) {
    return (
        <div className='content-jewelry' id='content-jewelry-list'>
            {
                d.map(jewelry =>
                <Link key={jewelry.pk} to={'/jewelry/' + jewelry.pk + getUrlName(jewelry.name)}>
                <div className='card'>
                <img className="card-img-top" alt="somthind wrong" src={jewelry.icon}/>
                <div className="card-body">
                    <h3 className="card-title"><b>{jewelry.name}</b></h3>
                    <h5><p className="card-text">{jewelry.second_name}</p></h5> 
                    
                </div>
                </div>
                </Link>
                    )
            }
        </div>
    )
}

export default JewelryList;
