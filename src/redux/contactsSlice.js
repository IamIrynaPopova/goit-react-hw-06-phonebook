import { createSlice } from '@reduxjs/toolkit';

const initialContacts = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    createUser(state, action) {
      state.push(action.payload);
    },
    deleteUser(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});
console.log('Hello');
export const { createUser, deleteUser } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
