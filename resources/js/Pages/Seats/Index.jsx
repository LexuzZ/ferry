// resources/js/Pages/Seats/Index.jsx

import React from 'react';
import SeatSelection from '@/Components/SeatSelection';

const Index = ({ seats, kapal_id }) => {
    return <SeatSelection seats={seats} kapal_id={kapal_id} />;
};

export default Index;
