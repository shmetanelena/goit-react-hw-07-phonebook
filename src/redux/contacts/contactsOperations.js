//import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
} from './contactsActions';
axios.defaults.baseURL = 'https://62fd33986e617f88dea6b645.mockapi.io/api/v1';

export const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(e => dispatch(fetchContactsError(e.message)));
};

export const deleteContact = contactId => dispatch => {
  dispatch(deleteContactRequest());
  axios
    .post(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(e => dispatch(deleteContactError(e.message)));
};

export const addContact = newContact => dispatch => {
  dispatch(addContactRequest());
  axios
    .post('/contacts', newContact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(e => dispatch(addContactError(e.message)));
};

// export const addContact2 = createAsyncThunk('contacts/add2', async newContact => {
//   await axios.post('/contacts', newContact);
// });
