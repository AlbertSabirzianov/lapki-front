import { useForm } from 'react-hook-form';
import axios from 'axios';
import { baseUrl } from './utils';

const orderUrl = baseUrl + 'order/'


export default function Order({ id, jewelryName}) {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({mode: 'onBlur'});

    function sendOrder(data) {
      axios.post(orderUrl, {
        "name": data.name,
        "description": data.comment,
        "jewelry": id,
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

    return (
        <>
        <form onSubmit={handleSubmit(sendOrder)}>
            <p>Форма заказа {jewelryName}</p>
        <div className="input-group mb-3">
            {errors?.name && <p className='error'>{errors?.name?.message}</p>}
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
            {errors?.mail && <p className='error'>{errors?.mail?.message}</p>}
            <span className="input-group-text" id="inputGroup-sizing-default">Email:</span>
            <input 
            {...register('mail', {
                required: "Обязательное поле"
            })}
            type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="email"></input>
        </div>
        <div className="input-group mb-3">
            {errors?.phone && <p className='error'>{errors?.phone?.message}</p>}
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
        <button type="submit">
           Заказать!
        </button>
        </form>
        </>
    )
}