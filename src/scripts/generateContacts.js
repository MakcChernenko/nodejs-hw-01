import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const newContacts = [];
    for (let i = 0; i < number; i++) {
      const contact = await createFakeContact();
      newContacts.push(contact);
    }
    let existingContacts = await readContacts();
    if (!Array.isArray(existingContacts)) {
      console.warn('JSON був некоректний або порожній. Створюємо новий масив.');
      existingContacts = [];
    }
    const updatedContacts = [...existingContacts, ...newContacts];
    await writeContacts(updatedContacts);
    console.log(`Успішно додано ${number} контактів.`);
  } catch (error) {
    console.error('Помилка при додаванні контактів:', error.message);
  }
};

generateContacts(1);
