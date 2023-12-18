import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const URL = `https://www.googleapis.com/books/v1/volumes?`;
const PAGINATION = 40;

export class BookService {
  static async getBooks(value: string) {
    try {
      const response = await axios.get(
        `${URL}q=${value}&printType=books&key=${API_KEY}&maxResults=${PAGINATION}`
      );
      return response?.data.items;
    } catch (e) {
      console.log(e);
    }
  }
}
