import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContacts,
  addNewContact,
  deleteContactById,
} from '../../contacts-service';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      return await getContacts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (name, number, thunkAPI) => {
    try {
      return await addNewContact(name, number);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      return await deleteContactById(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
