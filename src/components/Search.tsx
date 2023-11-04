import { InputAdornment, TextField } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { ChangeEvent, useState } from 'react';
import { BookService } from '@/services/BookService.ts';
import { Preview } from './Book/Preview.tsx';

export const Search = () => {
  const [search, setSearch] = useState<string>('');
  const [booksData, setBooksData] = useState<[]>([]);

  const searchBook = async (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);

    const response = await BookService.getBooks(value);
    setBooksData(response?.data.items);
  };

  return (
    <>
      <TextField
        label='Search book'
        variant='outlined'
        fullWidth
        margin='normal'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        value={search}
        onChange={searchBook}
      />

      {search ? (
        booksData ? (
          <div
            style={{
              display: 'flex',
              gap: 20,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {booksData.map((book, index) => (
              <Preview key={book + index} book={book} />
            ))}
          </div>
        ) : (
          <>No result</>
        )
      ) : (
        <>Start searching</>
      )}
    </>
  );
};
