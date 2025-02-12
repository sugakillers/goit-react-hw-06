import css from "./ContactList.module.css"
import Contact from "../Contact/Contact"
const ContactList = ({ contactsList, deleteContact }) => {
return (
    <>
    <ul className={css.contactList}>
    {contactsList.map(contact => {
        return  (
            <li className={css.item} key={contact.id}>
            <Contact id={contact.id} name={contact.name} number={contact.number} deleteContact={deleteContact} />
            </li>
        );
    })}
    </ul></>
);
}

export default ContactList