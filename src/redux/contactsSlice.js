import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    createUser(state, action) {
      state.push(action.payload);
    },
    deleteUser(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
    getVisibleUser(state, action) {
      const filterValue = action.payload;
      return state.filter(contact =>
        contact.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    },
  },
});
export const { createUser, deleteUser, getVisibleUser } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
