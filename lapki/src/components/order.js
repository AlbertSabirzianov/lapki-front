import { useForm } from 'react-hook-form';


export default function Order({ id, jewelryName}) {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({mode: 'onBlur'});

    function sendOrder(data) {
      console.log(data);
      alert(data);
      reset();
    }

    return (
        <>
        <form onSubmit={handleSubmit(sendOrder)}>
        <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">Ваше Имя:</span>
            <input 
            {...register("name",{
                required: "Обязательное поле",
            })}
            id='name' type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
        </div>
        <div className="input-group mb-3">
         <span className="input-group-text" id="inputGroup-sizing-default">Описание:</span>
         <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="description"></input>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">Email:</span>
            <input 
            {...register('mail', {
                required: "Обязательное поле"
            })}
            type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="email"></input>
        </div>
        <div className="input-group mb-3">
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