// resources/js/Pages/Seats/Index.jsx

import React from 'react';
import SeatSelection from '@/Components/SeatSelection';

const Index = ({ seats, reservedSeats, kapal_id, jadwal_id }) => {
    return <SeatSelection seats={seats} reservedSeats={reservedSeats} kapal_id={kapal_id} jadwal_id={jadwal_id} />;
};

export default Index;
