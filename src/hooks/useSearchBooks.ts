import { useEffect, useRef, useState } from 'react';
import { BookAPIService } from '@/services/BookAPIService.ts';

export const useSearchBooks = (searchQuery: string) => {
  const [bookList, setBookList] = useState<[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const timeoutRef = useRef<null | ReturnType<typeof setTimeout>>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await BookAPIService.getBooks(searchQuery);
      setBookList(data);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!searchQuery || searchQuery.trim() === '') {
      setBookList([]);
      return;
    } else {
      clearTimeout(Number(timeoutRef.current));
      timeoutRef.current = setTimeout(() => {
        fetchData();
      }, 500);
    }

    return () => {
      clearTimeout(Number(timeoutRef.current));
    };
  }, [searchQuery]);

  return { bookList, isLoading };
};
