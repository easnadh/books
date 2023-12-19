import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '@/services/firebase.ts';
import { User } from '@firebase/auth';
import { BookType, BookmarkType } from '@/types';

export class BookmarksService {
  static async create(user: User | null | undefined, book: BookType) {
    try {
      await addDoc(collection(db, `${user?.uid}`), {
        id: book.id,
        status: 'added',
      });
    } catch (e) {
      console.log(e);
    }
    alert('added');
  }

  static async get(uid: string) {
    const querySnapshot = await getDocs(collection(db, `${uid}`));
    return querySnapshot.docs.map((doc) => ({
      ...doc.data(),
    })) as BookmarkType[];
  }
}
