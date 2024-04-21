import css from './Form.module.css'


export const Form = ({ dataPhonebook, onSubmit, onChange }) => {
    return (
        <>
        <form onSubmit={onSubmit} className={css.contactForm}>
      <label htmlFor='nameContact'>Name</label> 
        <input className={css.input} id="nameContact" type="text" name="name" value={ dataPhonebook.value} onChange={onChange} pattern="^[a-zA-Zа-яА-Я]*$" required placeholder="Name"></input>
        <label htmlFor='numberContact'>Number phone</label> 
        <input className={css.input} id="numberContact" type="tel" name="number" value={ dataPhonebook.value} onChange={onChange} pattern="\+?\d{1,4}?[ .\\-\\s]?\(?\d{1,3}?\)?[ .\\-\\s]?\d{1,4}[ .\\-\\s]?\d{1,4}[ .\\-\\s]?\d{1,9}" required placeholder="Number"></input>
        <button className={css.button} type="submit">Add contact</button>
      </form>
        </>
    )
};
