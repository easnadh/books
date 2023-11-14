import { BookAPIDataType } from '@/types';
import { ImageListItem, ImageListItemBar } from '@mui/material';
import s from '@/components/Book/Preview.module.scss';
import { useState } from 'react';
import { Modal } from '@/components/Book/Modal.tsx';

type Props = {
  item: BookAPIDataType;
};

export const Preview = ({ item }: Props) => {
  const book = {
    id: item.id,
    title: item.volumeInfo.title,
    subtitle: item.volumeInfo.subtitle || '',
    authors: item.volumeInfo.authors?.join(', '),
    description: item.volumeInfo.description,
    image: item.volumeInfo.imageLinks?.smallThumbnail,
    language: item.volumeInfo.language,
    pageCount: item.volumeInfo.pageCount,
    publishedDate: item.volumeInfo.publishedDate,
    publisher: item.volumeInfo.publisher,
  };

  const [open, setOpen] = useState<boolean>(false);

  if (book.image)
    return (
      <>
        <ImageListItem
          className={s.hover}
          style={{
            width: 175,
            cursor: 'pointer',
          }}
          onClick={() => setOpen(true)}
        >
          <img
            style={{ borderRadius: 10 }}
            height='247'
            src={book.image}
            title={book.title + '\n' + book.subtitle}
            alt={'image ' + book.title}
            loading='eager'
          />
          <ImageListItemBar
            style={{ borderRadius: '0 0 10px 10px' }}
            title={book.title}
            subtitle={book.authors}
          />
        </ImageListItem>
        <Modal open={open} book={book} onClose={() => setOpen(false)} />
      </>
    );
};
