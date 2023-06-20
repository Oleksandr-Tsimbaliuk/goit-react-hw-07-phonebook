import React from 'react';
import PropTypes from 'prop-types';

function Contact({ name, id, number, deleteContact }) {
  return (
    <li key={id}>
      <p>
        {name}: <span>{number}</span>
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
