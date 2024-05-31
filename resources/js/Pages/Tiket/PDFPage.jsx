// resources/js/Pages/Tickets/PDFPage.js
import React from 'react';

// import { PDFViewer } from '@react-pdf/renderer';
import TicketPDF from './CetakTiket';
import { PDFViewer } from '@react-pdf/renderer';

const PDFPage = ({ ticket }) => {
  console.log('Ticket data:', ticket); // Tambahkan ini untuk debugging
  return (
    <PDFViewer width="100%" height="600">
      <TicketPDF ticket={ticket} />
    </PDFViewer>
  );
};

export default PDFPage;
