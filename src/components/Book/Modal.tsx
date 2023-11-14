import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { BookType } from '@/types';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/services/firebase.ts';

type Props = {
  open: boolean;
  book: BookType;
  onClose: () => void;
};

export const Modal = ({ open, book, onClose }: Props) => {
  const [user] = useAuthState(auth);

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
              user ? alert('added') : alert('login to add');
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
