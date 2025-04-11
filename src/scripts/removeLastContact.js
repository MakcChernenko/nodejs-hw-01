import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      console.log('Список контактів пустий');
      return;
    } else {
      contacts.pop();
      await writeContacts(contacts);
      console.log('Останній контакт видалено');
    }
  } catch (error) {
    console.error('Помилка видалення останнього контакту', error);
  }
};

removeLastContact();
