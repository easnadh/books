import { useEffect, useState } from 'react';
import { BookmarksService } from '@/services/BookmarksService.ts';

type Props = {
  uid: string;
};

export const Bookmarks = ({ uid }: Props) => {
  const [bookmarks, setBookmarks] = useState();

  const getBookmarks = async () => {
    await BookmarksService.get(uid);
    setBookmarks(bookmarks);
  };

  useEffect(() => {
    getBookmarks();
  }, []);

  return (
    <>
      <div>
        My books:
        <div></div>
      </div>
    </>
  );
};
