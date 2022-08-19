import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { setFilter } from './contactsActions';

const filter = createReducer('', {
  [setFilter]: (_, action) => action.payload,
});

export default combineReducers({
  filter,
});
