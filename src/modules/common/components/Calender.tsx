import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

interface BasicDateTimePickerProps {
  onDateTimeChange: (dateTime: Date | null) => void;
}

const BasicDateTimePicker: React.FC<BasicDateTimePickerProps> = ({ onDateTimeChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker label="Select a Date and Time" onChange={onDateTimeChange} />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default BasicDateTimePicker;
