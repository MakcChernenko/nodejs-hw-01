import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contactsArray = await readContacts();
    console.log('Успішно прочитані контакти');
    return contactsArray;
  } catch (error) {
    console.error('Помилка читання ', error);
  }
};

console.log(await getAllContacts());
