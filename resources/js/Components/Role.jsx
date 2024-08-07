// resources/js/Components/Role.jsx
import React from 'react';

const Role = ({ role }) => {
  let badgeClass = '';

  switch (role) {
    case 'admin':
      badgeClass = 'p-1.5 text-xs font-bold uppercase tracking-wider text-white bg-yellow rounded-lg bg-opacity-80 ';
      break;
    case 'user':
      badgeClass = 'p-1.5 text-xs font-bold uppercase tracking-wider text-white bg-green rounded-lg bg-opacity-80';
      break;
    case 'guest':
      badgeClass = 'p-1.5 text-xs font-bold uppercase tracking-wider text-white bg-red rounded-lg bg-opacity-80';
      break;
    default:
      badgeClass = 'badge';
      break;
  }

  return <span className={badgeClass}>{role}</span>;
};

export default Role;
