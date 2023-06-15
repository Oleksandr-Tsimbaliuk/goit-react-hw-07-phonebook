// import { useEffect } from 'react';
import React, { useEffect } from 'react';
import Form from './Form';
import ContactsList from './ContactsList';
import Filter from './Filter';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContact,
  deleteContact,
  setFilter,
} from 'redux/contactSlice/contactSlice';
import { selectContacts, selectFilter } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

export default function App() {
  const dispatch = useDispatch(); // Logistic function
  // We subscribe on conrete field in our store.
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handlerFormSubmit = contactData => {
    if (contacts.some(contact => contact.name === contactData.name)) {
      alert(`Contact whith name ${contactData.name} is already exists`);
      return;
    }

    dispatch(
      addContact(contactData)
      //   {type: "contacts/addContact", payload: contactData}
    );
    //setContacts(prevContacts => [...prevContacts, contactData]);
  };

  const changeFilter = event => {
    dispatch(setFilter(event.currentTarget.value));
    // setFilter(event.currentTarget.value);
  };

  const filteredContacts = () => {
    return contacts.filter(({ name, number }) =>
      name?.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
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
