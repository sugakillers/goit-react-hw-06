import css from "./Contact.module.css"
import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({id, name, number, deleteContact}) => {
return (
    <div className={css.contactItem}>
    <div className={css.contactsData}>
        <p><IoMdPerson className={css.icon} /> {name}</p>
        <p><FaPhoneAlt className={css.icon} />   {number}</p>
    </div>
        <button className={css.button} type="button" onClick={() => deleteContact(id)}>Delete</button>
    </div>
)
}

export default Contact