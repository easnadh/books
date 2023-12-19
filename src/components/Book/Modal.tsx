import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { BookType } from '@/types';
import { BookmarksService } from '@/services/BookmarksService.ts';
import { useAuth } from '@/hooks/useAuth.ts';

type Props = {
  open: boolean;
  book: BookType;
  onClose: () => void;
};

export const Modal = ({ open, book, onClose }: Props) => {
  const { user } = useAuth();

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{book.title}</DialogTitle>
        <DialogContent>
          {/* TODO: add to list */}
          <Button
            variant='outlined'
            onClick={() => {
              user
                ? BookmarksService.create(user, book)
                : alert('login to add');
            }}
          >
            add to list
          </Button>
          <DialogContentText id='alert-dialog-description'>
            {book.description}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};
