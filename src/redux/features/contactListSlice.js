import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

export const contactListSlice = createSlice({
  name: 'contactList',
  initialState: { contactList: [] },
  reducers: {
    addContact(state, action) {
      state.contactList.push(action.payload);
    },

    removeContact(state, action) {
      return {
        contactList: state.contactList.filter(
          contact => contact.id !== action.payload
        ),
      };
    },
  },
});

const persistConfig = {
  key: 'contactList',
  storage,
  whiteList: ['contactList'],
};

export const persistedContactList = persistReducer(
  persistConfig,
  contactListSlice.reducer
);

export const { addContact, removeContact } = contactListSlice.actions;
export const getContactList = state => state.contactList.contactList;
