export default function Slider({ pictures }){

    return (
        <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    {pictures.map((picture, index) => {
        let slide = 'Slide ' + (index + 1).toString();
        if (index === 0) {
            return (<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} class="active" aria-current="true" aria-label={slide}></button>)
        } else {
            return (<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} aria-label={slide}></button>)
        }
    }
        )}
  </div>
  <div className="carousel-inner">
    {pictures.map((picture, index) => {
        if (index === 0) {
            return (<div className="carousel-item active">
            <img src={picture.picture} class="d-block w-100" alt="..."></img>
          </div>)
        } else {
            return(<div className="carousel-item">
                <img src={picture.picture} class="d-block w-100" alt="..."></img>
              </div>)
        }
    })}
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    )
}