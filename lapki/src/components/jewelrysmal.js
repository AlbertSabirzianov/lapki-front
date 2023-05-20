function JewelryList({ d, clickOne }) {
    return (
        <div className='content-jewelry' id='content-jewelry-list'>
            {
                d.map(jewelry => 
                <div className='card' key={jewelry.pk} onClick={() => clickOne(jewelry.pk)} >
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

export default JewelryList;
