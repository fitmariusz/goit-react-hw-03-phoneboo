import { searchContact } from "../Search/Search";
import css from "./ContactsList.module.css"



export const ContactList = ({ dataPhonebook, onDelete, onChange }) => { 
  return (<>
    <div className={css.contener}>
      <input className={css.input} type="search" name="filter" onChange={onChange} placeholder='Search'></input>
    <ul className={css.ul}>
          {searchContact(dataPhonebook.contacts, dataPhonebook.filter).length !== 0 ? 
            //  <li className={css.li}><span>Name</span><span>Number</span><span>      </span></li>
            searchContact(dataPhonebook.contacts, dataPhonebook.filter).map(contact =>
              <li className={css.li} key={contact.id}><span className={css.span}>{contact.name}</span><span className={css.span} >{contact.number}</span>
                <button className={css.button} onClick={() => onDelete(contact.id)} required>Delete</button></li>)
            :
          <p>No contacts....</p>}
      </ul>
      </div>
    </>);
};


