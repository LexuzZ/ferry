// resources/js/Components/Role.jsx
import React from 'react';

const Role = ({ role }) => {
  let badgeClass = '';

  switch (role) {
    case 'admin':
      badgeClass = 'p-1.5 text-xs font-bold uppercase tracking-wider text-midnight bg-yellow rounded-lg bg-opacity-50 ';
      break;
    case 'user':
      badgeClass = 'p-1.5 text-xs font-bold uppercase tracking-wider text-midnight bg-green rounded-lg bg-opacity-50';
      break;
    case 'guest':
      badgeClass = 'p-1.5 text-xs font-bold uppercase tracking-wider text-midnight bg-red rounded-lg bg-opacity-50';
      break;
    default:
      badgeClass = 'badge';
      break;
  }

  return <span className={badgeClass}>{role}</span>;
};

export default Role;
