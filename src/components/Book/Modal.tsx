import { Fragment } from 'react';
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { BookType } from '@/types';

type Props = {
  open: boolean;
  book: BookType;
  onClose: () => void;
};

export const Modal = ({ open, book, onClose }: Props) => {
  return (
    <>
      <Fragment>
        <Dialog
          open={open}
          onClose={onClose}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogTitle id='alert-dialog-title'>{book.title}</DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              {book.description}
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </Fragment>
    </>
  );
};
