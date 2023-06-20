import { useState } from 'react';
import { StyledForm } from './Form.styled';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContactThunk } from 'redux/operations';

export default function Form({ title, onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const contactData = {
      name: name,
      number: number,
      id: nanoid(),
    };
    const loveredContactData = contactData.name.toLowerCase();
    const isContactExist = contacts.some(
      contact => contact.name.toLowerCase() === loveredContactData
    );
    const resetInputForm = () => {
      setName('');
      setNumber('');
    };

    if (isContactExist) {
      alert(`Contact whith name ${contactData.name} is already exists`);
      return;
    }

    dispatch(
      addContactThunk(contactData)
      //   {type: "contacts/addContact", payload: contactData}
    );
    alert(
      `Contact whith name ${contactData.name} successfully added to phonebook!`
    );
    resetInputForm();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>{title}</h2>
      <label className="form-label">
        <span>Name</span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>

      <label className="form-label">
        <span>Number</span>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>

      <button className="form-btn" type="submit">
        add contact
      </button>
    </StyledForm>
  );
}

Form.propType = {
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
