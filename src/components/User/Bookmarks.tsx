import { useEffect, useState } from 'react';
import { BookmarksService } from '@/services/BookmarksService.ts';
import { BookmarkType } from '@/types';

type Props = {
  uid: string;
};

export const Bookmarks = ({ uid }: Props) => {
  const [bookmarks, setBookmarks] = useState<BookmarkType[]>([]);

  const getBookmarks = async () => {
    const bookmarks = await BookmarksService.get(uid);
    setBookmarks(bookmarks);
  };

  useEffect(() => {
    getBookmarks();
  }, []);

  return (
    <>
      <div>
        My books:
        {bookmarks.map((item, index) => (
          <div key={index}>
            {item.id}: {item.status}
          </div>
        ))}
      </div>
    </>
  );
};
