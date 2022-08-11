import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const NAME = 'contacts';

const saveContacts = items => {
  window.localStorage.setItem(NAME, JSON.stringify(items));
};

export const contactsSlice = createSlice({
  name: NAME,
  initialState: {
    items: JSON.parse(window.localStorage.getItem(NAME)) ?? [],
    filter: '',
  },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.items.push(action.payload);
        saveContacts(state.items);
      },
      prepare: ({ name, number }) => {
        return { payload: { id: nanoid(), name, number } };
      },
    },
    delContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
      saveContacts(state.items);
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, delContact, setFilter } = contactsSlice.actions;
