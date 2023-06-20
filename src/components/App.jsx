// import { useEffect } from 'react';
import React, { useEffect } from 'react';
import Form from './Form';
import ContactsList from './ContactsList';
import Filter from './Filter';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux/selectors';
import { deleteContactThunk, fetchContacts } from 'redux/operations';
import Loader from './Loader/Loader';

export default function App() {
  const dispatch = useDispatch(); // Logistic function
  // We subscribe on conrete field in our store.
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const changeFilter = event => {
    dispatch(selectFilter(event.currentTarget.value));
  };

  // const filteredContacts = () => {
  //   return contacts.filter(({ name, number }) =>
  //     name?.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  const onDeleteContact = contactId => {
    dispatch(deleteContactThunk(contactId));
  };

  // const value = filteredContacts();
  return (
    <div>
      <Form title="Phonebook"></Form>
      {contacts.length > 0 && !isLoading && (
        <Filter filter={filter} changeFilter={changeFilter}></Filter>
      )}
      <ContactsList
        // contacts={value}
        contacts={contacts}
        title="Contacts"
        deleteContact={onDeleteContact}
      ></ContactsList>
      {isLoading && <Loader />}
      {error && <p>Error: {error}</p>}
    </div>
  );
}
