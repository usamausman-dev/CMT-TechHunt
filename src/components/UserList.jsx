import React from 'react';
import { AvatarGroup, Avatar } from '@mui/material';

const UsersList = ({ users }) => {

  const getInitials = (name) => {
    const parts = name?.split(' ');
    const initials = parts?.map((part) => part.charAt(0)).join('');
    return initials?.toUpperCase();
  }

  const getRandomColor = () => {
    const colors = ['red', 'green', 'blue', 'orange', 'purple', 'pink', 'teal'];
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  }

  return (
    <AvatarGroup max={4}>
      {users?.map((user) => (<Avatar key={user} sx={{ bgcolor: getRandomColor() }}>{getInitials(user)}</Avatar>))}
    </AvatarGroup>
  );
}

export default UsersList