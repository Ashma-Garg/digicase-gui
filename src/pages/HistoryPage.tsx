// src/pages/HistoryPage.tsx

import React, { useState } from 'react';
import { Grid, Typography, IconButton, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PatientDataList from '../modules/history/accordianSummary/PatientDataList';
import { generateRandomHealthRecord } from '../utils/healthUtils';
import './HistoryPage.scss';  // Corrected import statement
import AccordionSummary from '../modules/history/accordianSummary/PatientDataAccordions';

const HistoryPage = () => {
  const [expandedId, setExpandedId] = React.useState<string | null>(null);

  const handleExpand = (id: string) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  // Generate dynamic sample data (5 records with 3 parameters each)
  const healthRecords = Array.from({ length: 5 }, () => generateRandomHealthRecord());

  return (
    // <Grid container className="history-page">
    //   {healthRecords.map((record, index) => (
    //     <Grid item key={index} className={`history-box ${record.timestamp === expandedId ? 'expanded' : ''}`}>
    //       <Grid container justifyContent="space-between" alignItems="center">
    //         <Typography variant="h6" onClick={() => handleExpand(record.timestamp)}>{`Timestamp: ${record.timestamp}`}</Typography>
    //         <IconButton onClick={() => handleExpand(record.timestamp)}>
    //           <ExpandMoreIcon />
    //         </IconButton>
    //       </Grid>
    //       <Box className="expanded-content">
    //         {record.timestamp === expandedId && (
    //           <>
    //             <PatientDataList patientData={record.parameters} />
    //           </>
    //         )}
    //       </Box>
    //     </Grid>
    //   ))}
    // </Grid>
    <AccordionSummary/>
   
  );
};

export default HistoryPage;