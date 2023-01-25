import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const { data } = await axios({
      method: 'GET',
      url: 'contacts',
    });

    return data;
  } catch (error) {}
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    try {
      const { data } = await axios({
        method: 'POST',
        url: 'contacts',
        data: contact,
      });

      return data;
    } catch (error) {}
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    try {
      const { data } = await axios({
        method: 'DELETE',
        url: `contacts/${contactId}`,
      });

      return data;
    } catch (error) {}
  }
);
