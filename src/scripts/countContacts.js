import { getAllContacts } from '../scripts/getAllContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await getAllContacts();
    const count = contacts.length;
    console.log('Кількість контактів ', count);
    return count;
  } catch (error) {
    console.error('Помилка підрахунку контактів', error);
  }
};

console.log(await countContacts());
