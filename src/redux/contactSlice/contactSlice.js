import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from 'redux/operations';

// Начальное состояние редюсера слайса
const initialState = {
  contacts: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  // Объект редюсеров

  // reducers: {
  //   addContact(state, action) {
  //     // action -> { type: "contact/addContact", payload } - {name: "Olek", number: "+12354", id: "1337"}
  //     state.contacts = [...state.contacts, action.payload];
  //   },
  //   deleteContact(state, action) {
  //     state.contacts = state.contacts.filter(
  //       contact => contact.id !== action.payload
  //     );
  //   },
  //   setFilter(state, action) {
  //     state.filter = action.payload;
  //   },
  // },

  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
      // return {...state, contacts: [...state.contacts, ...action.payload]};
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// Генераторы экшенов(instructions)
export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
// Редюсер слайса
export const contactsReducer = contactsSlice.reducer;

/* 
 reducer - это функция, которая принимает стейт и action(объект инструкцию) и изменяет состояние. 
    addContact(state, action) {
        state.contacts = [...state.contacts, action.payload]
    }
 action - объект instruction, который имеет два поля, тип и пейлоад, при этом, тип обязательный
    { type: "contacts/addContacts" , payload }

*/
