import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectError } from 'redux/selectors';

function Contact({ name, id, phone, deleteContact }) {


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
