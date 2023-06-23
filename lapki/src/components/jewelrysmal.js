function JewelryList({ d, clickOne }) {
    return (
        <div className='content-jewelry' id='content-jewelry-list'>
            {
                d.map(jewelry => 
                <div className='card' key={jewelry.pk} onClick={() => clickOne(jewelry.pk)} >
                <img className="card-img-top" alt="somthind wrong" src={jewelry.icon}/>
                <div className="card-body">
                    <h3 className="card-title"><b>{jewelry.name}</b></h3>
                    <h5><p className="card-text">{jewelry.second_name}</p></h5> 
                    
                </div>
                </div>
                    )
            }
        </div>
    )

}

export default JewelryList;
