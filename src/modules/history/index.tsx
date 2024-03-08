import Typography from "@mui/material/Typography";
import {
  DigicareAccordion,
  DigicareAccordionDetails,
  DigicareAccordionSummary,
} from "../common/components/DigicareAccordian";
import React, { useState } from 'react';
import { historyData } from "../../dummyData/histroy";
import { IDigicareHistory } from "./interface";
import { capitalizeSentence } from "../common/helper/string";
import './style.scss';
import BasicDateTimePicker from "../common/components/Calender";
import FilterListIcon from '@mui/icons-material/FilterList';

export const History = () => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleDateTimeChange = (dateTime: Date | null) => {
    setSelectedDateTime(dateTime);
  };

  const fetchDataFromBackend = async () => {
    if (selectedDateTime) {
      // Use the selectedDateTime variable to fetch data from the backend
      try {
        console.log(selectedDateTime.toISOString());
        const response = await fetch(`your-backend-api-endpoint?timestamp=${selectedDateTime.toISOString()}`);
        const data = await response.json();
        // Handle the fetched data as needed
        console.log(data);
      } catch (error) {
        console.error('Error fetching data from the backend:', error);
      }
    }
  };

  return (
    <>
      
      <div className="history-container">
      <div className="datetime-picker">
        <BasicDateTimePicker onDateTimeChange={handleDateTimeChange} />
        <button onClick={fetchDataFromBackend} className="history-data-button">Filter <FilterListIcon style={{ marginRight: '5px' }} /></button>
      </div>
        <div className="history-data">
          {historyData.map((data: IDigicareHistory) => {
            return (
              <DigicareAccordion
                expanded={expanded === data._id}
                onChange={handleChange(data._id)}
                key={data._id}
              >
                <DigicareAccordionSummary
                  aria-controls={`${data._id}-content`}
                  id={`${data._id}-header`}
                >
                  <Typography>{data.timestamp.toLocaleString()}</Typography>
                </DigicareAccordionSummary>
                <DigicareAccordionDetails>
                  <Typography className="history-record-text-wrapper">
                    {data.record.map((readings, index) => (
                      <Typography variant="body1"  key={index}>
                        <span className="history-record-text-title">{capitalizeSentence(readings.name.split("_").join(" "))}:</span>{" "}
                        {readings.reading}
                        {readings.unit}
                      </Typography>
                    ))}
                  </Typography>
                </DigicareAccordionDetails>
              </DigicareAccordion>
            );
          })}
        </div>
      </div>
    </>
  );
};
