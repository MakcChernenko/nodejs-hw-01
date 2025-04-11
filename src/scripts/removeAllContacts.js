import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    console.log('Контакти успішно видалені');
  } catch (error) {
    console.error('Не вдалося видалити всі контакти', error);
  }
};

removeAllContacts();
