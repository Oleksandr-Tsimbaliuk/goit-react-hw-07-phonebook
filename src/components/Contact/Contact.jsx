import React from 'react';
import PropTypes from 'prop-types';
import { deleteContactThunk } from 'redux/operations';
import { useDispatch } from 'react-redux';

function Contact({ name, id, phone }) {
  const dispatch = useDispatch();

  const deleteContact = contactId => {
    dispatch(deleteContactThunk(contactId));
  };

  
  return (
    <li key={id}>
      <p>
        {name}: <span>{phone}</span>
      </p>
      <button
        type="button"
        onClick={() => {
          deleteContact(id);
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default Contact;

Contact.propType = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
