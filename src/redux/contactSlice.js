import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  fetchContacts,
} from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
    filter: '',
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContactThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = [...state.contacts, action.payload];
        // state.contacts.push(action.payload);
        // return {...state, contacts: [...state.contacts, ...action.payload]};
      })
      .addCase(addContactThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContactThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContactThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },

  // Объект редюсеров
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload.toLowerCase();
    },
  },
});

// Генераторы экшенов(instructions)
// export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
export const { setFilter } = contactsSlice.actions;

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
