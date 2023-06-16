import { useForm } from 'react-hook-form';
import axios from 'axios';
import { baseUrl } from './utils';
import MiniJewelry from './miniJewelry';


const orderUrl = baseUrl + 'order/';


export default function Order({ bascetJewelrys, stateBascetJewelrys, stateSumm, summ, stateIdList, idList}) {
    
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({mode: 'onBlur'});

    

    const mark = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" id='mark' class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>;
    
    
    

    function sendOrder(data) {
        console.log(idList);
        if (summ === 0) {
            alert('Вы ничего не добавили в корзину((');
        } else {
      axios.post(orderUrl, { // добавить в модель order поле summ
        "name": data.name,
        "description": data.comment,
        "jewelry": idList,
        "mail": data.mail,
        "phone_number": data.phone,
      }).then((response) => {
        if (response.status === 201) {
            alert('Спасибо за заказ ' + data.name + ', мастер свяжется с вами)');
            reset();
        } else {
            alert("Что то пошло не так...");
        }
      });
    }
    }

    function deletejewelry(jewelry) {
        stateBascetJewelrys(orderList => orderList.filter(obj => {
            return obj.pk !== jewelry.pk
        }));
        stateSumm(summ => summ - jewelry.price);
        stateIdList(idList => idList.filter(num => {
            return num !== jewelry.pk
        }))
    }

    return (
        <>
        <div className='order_div'>
        <form onSubmit={handleSubmit(sendOrder)} id='order_form'>
            <div style={{'overflowY': "auto"}}>
            {bascetJewelrys.map(jewelry =>
                <MiniJewelry key={jewelry.pk} jewelry={jewelry} deleteJewelry={deletejewelry}></MiniJewelry>
                )}
                </div>
                <p>Сумма = {summ}</p>
        <div className="input-group mb-3">
            {errors?.name && mark}
            <span className="input-group-text" id="inputGroup-sizing-default">Ваше Имя:</span>
            <input 
            {...register("name",{
                required: "Обязательное поле",
            })}
            id='name' type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
        </div>
        <div className="input-group mb-3">
         <span className="input-group-text" id="inputGroup-sizing-default">Комментарий:</span>
         <input 
         {...register('comment')}
         type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="description"></input>
        </div>
        <div className="input-group mb-3">
            {errors?.mail && mark}
            <span className="input-group-text" id="inputGroup-sizing-default">Email:</span>
            <input 
            {...register('mail', {
                required: "Обязательное поле"
            })}
            type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="email"></input>
        </div>
        <div className="input-group mb-3">
            {errors?.phone && mark}
            <span className="input-group-text" id="inputGroup-sizing-default">Телефон:</span>
            <input 
            {...register('phone', {
                required: "Обязатенльное поле",
                valueAsNumber: {
                    value: true,
                    message: "Нужен номер телефона"
                }
            })}
            type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="telephone"></input>
        </div>
        <button type="submit" class="btn btn-secondary">
           Заказать!
        </button>
        </form>
        </div>
        </>
    )
}