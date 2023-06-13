// import { useEffect } from 'react';
import Form from './Form';
import ContactsList from './ContactsList';
import Filter from './Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, setFilter } from 'redux/contactSlice/contactSlice';

export default function App() {

  const dispatch = useDispatch(); // Logistic function
  
  // We subscribe on conrete field in our store.
  const contacts = useSelector(state => state.appContacts.contacts)
  const filter = useSelector(state => state.appContacts.filter);

  // const [contacts, setContacts] = useState([
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]);
   //const [filter] = useState('');

 // useEffect(() => {
   // localStorage.setItem('contacts', JSON.stringify(contacts));
 // }, [contacts]);

  const handlerFormSubmit = contactData => {
    if (contacts.some(contact => contact.name === contactData.name)) {
      alert(`Contact whith name ${contactData.name} is already exists`);
      return;
    }

    dispatch(
      addContact(contactData)
   //   {type: "contacts/addContact", payload: contactData}
    )
    //setContacts(prevContacts => [...prevContacts, contactData]);
  };

  const changeFilter = event => {
    dispatch(setFilter(event.currentTarget.value))
    // setFilter(event.currentTarget.value);
  };

  const filteredContacts = () => {
    return contacts.filter(({ name, number }) =>
      name?.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId))
    // setContacts(prevContacts =>
    //   prevContacts.filter(contact => contact.id !== contactId)
    // );
  };

  const value = filteredContacts();
  return (
    <div>
      <Form onSubmit={handlerFormSubmit} title="Phonebook"></Form>
      <Filter filter={filter} changeFilter={changeFilter}></Filter>
      <ContactsList
        contacts={value}
        title="Contacts"
        deleteContact={onDeleteContact}
      ></ContactsList>
    </div>
  );
}
