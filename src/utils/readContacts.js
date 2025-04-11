import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const dataJSON = await fs.readFile(PATH_DB, 'utf8');
    if (!dataJSON) {
      console.warn('Файл порожній');
      return [];
    }
    const data = JSON.parse(dataJSON);
    console.log('Reader успішно прочитав список контактів');
    return data;
  } catch (error) {
    console.error('Помилка читання ', error);
    return [];
  }
};
