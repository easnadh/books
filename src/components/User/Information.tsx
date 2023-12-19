import { Avatar } from '@mui/material';
import { User } from '@firebase/auth';

type Props = {
  user: User;
};
export const Information = ({ user }: Props) => {
  return (
    <>
      <div>
        <div>@{user?.uid}</div>
        <div>{user?.displayName}</div>
        <Avatar
          style={{ height: 100, width: 100 }}
          variant='rounded'
          src={`${user?.photoURL}`}
          alt={`${user?.displayName} profile picture`}
        />
      </div>
    </>
  );
};
