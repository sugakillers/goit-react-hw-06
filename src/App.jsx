
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import css from './App.module.css';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import contactsData from '../Contacts.json'

function App() {
  const [contacts, setContacts] = useState(()=>JSON.parse(localStorage.getItem("contacts")) ?? contactsData);
  const [filter, setFilter] = useState("");



  const addContact = ({ name, number }) => {
    const normalizedNewContactName = name.toLowerCase();


    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === normalizedNewContactName
    );

    if (isDuplicate) {
      alert(`${name} is already in your contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevContacts => [...prevContacts, newContact]);
  };


  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={css.container}>
      <h1 className={css.mainTitle}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contactsList={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;









