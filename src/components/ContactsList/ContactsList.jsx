import React from 'react';
import PropTypes from 'prop-types';
import Contact from 'components/Contact/Contact';
import { StyledContactsList, StyledContactsTitle } from './ContactsList.styled';

function ContactsList({ title, contacts, deleteContact }) {
  return (
    <>
      <StyledContactsTitle>{title}</StyledContactsTitle>
      <StyledContactsList>
        {contacts.map(({ name, id, number }) => {
          return (
            <Contact
              key={id}
              name={name}
              id={id}
              number={number}
              deleteContact={deleteContact}
            ></Contact>
          );
        })}
      </StyledContactsList>
    </>
  );
}

export default ContactsList;

ContactsList.propType = {
  deleteContact: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  }).isRequired,
};
