// resources/js/Components/PaymentBadge.jsx
import React from 'react';

const PaymentBadge = ({ status }) => {
  let badgeClass = '';

  switch (status) {
    case 'pending':
      badgeClass = 'p-1.5 text-xs font-medium uppercase tracking-wider text-white bg-yellow rounded-lg bg-opacity-80';
      break;
    case 'paid':
      badgeClass = 'p-1.5 text-xs font-medium uppercase tracking-wider text-white bg-green rounded-lg bg-opacity-80';
      break;
    case 'unpaid':
      badgeClass = 'p-1.5 text-xs font-medium uppercase tracking-wider text-white bg-red rounded-lg bg-opacity-80';
      break;
    default:
      badgeClass = 'badge';
      break;
  }

  return <span className={badgeClass}>{status}</span>;
};

export default PaymentBadge;
