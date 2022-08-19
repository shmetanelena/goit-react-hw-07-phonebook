import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsReducer';
import { contactsApi } from './contacts';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
  //[...getDefaultMiddleware(), contactsApi.middleware],
});
