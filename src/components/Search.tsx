import { InputAdornment, TextField } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { Preview } from '@/components/Book/Preview.tsx';
import { useSearchBooks } from '@/hooks/useSearchBooks.ts';
import { ChangeEvent, useState } from 'react';
import { Loader } from '@/styles/Loader/Loader.tsx';

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { bookList, isLoading } = useSearchBooks(searchQuery);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
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
        value={searchQuery}
        onChange={handleChange}
      />

      {searchQuery ? (
        isLoading ? (
          <Loader />
        ) : bookList ? (
          <div
            style={{
              display: 'flex',
              gap: 20,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {bookList.map((item, index) => (
              <Preview key={'book' + index} item={item} />
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
