import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const NAME = 'contacts';

export const contactsSlice = createSlice({
  name: NAME,
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: ({ name, number }) => {
        return { payload: { id: nanoid(), name, number } };
      },
    },
    delContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, delContact, setFilter } = contactsSlice.actions;

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['items'],
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const contactsSelector = state => state.contacts.items;
export const filterSelector = state => state.contacts.filter;
