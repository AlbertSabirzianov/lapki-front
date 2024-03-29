function Description({ jewelry, stateBascetJewelrys, stateSumm, isIn, stateIdList  }) {
  
  function plus() {
      stateBascetJewelrys((bascetJewelrys) => [...bascetJewelrys, jewelry]);
      stateSumm((prev) => prev + parseInt(jewelry.price));
      stateIdList((prev) => [ ...prev, jewelry.pk]);
  }

  function minus() {
      stateBascetJewelrys((orderList) => orderList.filter(obj => {
          return obj.pk !== jewelry.pk
      }));
      stateSumm((summ) => summ - jewelry.price);
      stateIdList((idList) => idList.filter(obj => {
        return obj !== jewelry.pk
      }));      
  }
  
  const buttonPlus = <button type="button" id="plus_button" className="btn btn-outline-dark" onClick={() => minus()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                        </svg>
                    </button>
  
  const buttonMinus = <button type="button" id="plus_button" className="btn btn-outline-dark" onClick={() => plus()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                        </svg>
                      </button>
   

  return(
   <div className="descriptionCard">
      <h2 className="card-title"><b>{jewelry.name}</b></h2>
      
      <p className="card-text" id="second_name">{jewelry.second_name}</p>
      <h6 className="card-title"><b>{jewelry.price}</b> ₽</h6><br></br>
      <h4 className="card-subtitle mb-2 text-body-secondary">Примечание:</h4>
      <p className="card-text" id="description_text">{jewelry.description}</p>
      {isIn ? buttonPlus : buttonMinus }
    </div>
      )
}

export default Description;
