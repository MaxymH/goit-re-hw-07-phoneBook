import { createReducer, createSlice } from '@reduxjs/toolkit';
import { filter } from './phoneBook-operations';
import * as operations from './phoneBook-operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [operations.getContacts.pending]: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    [operations.getContacts.fulfilled]: (state, { payload }) => ({
      ...state,
      loading: false,
      items: payload,
    }),
    [operations.getContacts.rejected]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
    }),

    [operations.addContact.pending]: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    [operations.addContact.fulfilled]: (state, { payload }) => ({
      ...state,
      loading: false,
      items: [...state.items, payload],
    }),
    [operations.addContact.rejected]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
    }),

    [operations.removeContact.pending]: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    [operations.removeContact.fulfilled]: (state, { payload }) => ({
      ...state,
      loading: false,
      items: state.items.filter(contact => contact.id !== payload),
    }),
    [operations.removeContact.rejected]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
    }),
  },
});

export const phoneBookReducer = createReducer(initialState, {
  [filter]: (state, action) => ({ ...state,filter: action.payload }),
})

export default contactsSlice.reducer;
