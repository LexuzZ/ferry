// resources/js/Pages/Seats/Index.jsx

import React from 'react';
import SeatSelection from '@/Components/SeatSelection';

const Index = ({ seats, reservedSeats, kapal_id, jadwal_id ,totalSeats, totalAvailableSeats, totalUnavailableSeats }) => {
    return <SeatSelection seats={seats} reservedSeats={reservedSeats} kapal_id={kapal_id} jadwal_id={jadwal_id} totalSeats={totalSeats} totalAvailableSeats={totalAvailableSeats} totalUnavailableSeats={totalUnavailableSeats}/>;
};

export default Index;
