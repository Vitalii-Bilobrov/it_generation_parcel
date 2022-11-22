import axios from 'axios';
axios.defaults.baseURL = 'https://637b70ec10a6f23f7fa8d15c.mockapi.io/';

export async function getContactById(id) {
  const { data } = await axios.get(`contacts/${id}`);
  return data;
}

export async function getContscts() {
  const { data } = await axios.get('contacts');
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`contacts/${id}`);
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post('contacts', contact);
  return data;
}
