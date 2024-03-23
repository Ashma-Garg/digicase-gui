import { RealTimeDataProps } from "../modules/homepage/realTimeCards/interface";

export const patientRealTimeData: RealTimeDataProps[] = [
  {
    patient_id: "1p",
    records: [
      {
        _id: "1r",
        name: "blood_pressure",
        reading: "121/85",
        // reading: `${Math.floor(Math.random() * 180)}/${Math.floor(Math.random() * 120)}`,
        unit: "mmHg",
        min_value: "90/60",
        max_value: "120/80",
      },
      {
        _id: "2r",
        name: "heart_rate",
        reading: "110",
        // reading: `${Math.floor(Math.random() * 185)}`,
        unit: "bpm",
        min_value: "60",
        max_value: "100",
      },
      {
        _id: "3r",
        name: "bmi",
        reading: "20.5",
        // reading: `${Math.floor(Math.random() * 40)}`,
        unit: "kg/msq",
        min_value: "18.5",
        max_value: "24.9",
      },
      {
        _id: "5r",
        name: "o2",
        reading: "91",
        // reading: `${Math.floor(Math.random() * 100)}`,
        unit: "%",
        min_value: "90",
        max_value: "100",
      },
      {
        _id: "6r",
        name: "sugar_level",
        reading: "100",
        // reading: `${Math.floor(Math.random() * 300)}`,
        unit: "mg/dL",
        min_value: "70",
        max_value: "125",
      },
    ],
  },
];

export const realTimeData: RealTimeDataProps[] = [
  {
    patient_id: "1p",
    records: [
      {
        _id: "1r",
        name: "blood_pressure",
        reading: "121/85",
        // reading: `${Math.floor(Math.random() * 180)}/${Math.floor(Math.random() * 120)}`,
        unit: "mmHg",
        min_value: "90/60",
        max_value: "120/80",
      },
      {
        _id: "2r",
        name: "heart_rate",
        reading: "110",
        // reading: `${Math.floor(Math.random() * 185)}`,
        unit: "bpm",
        min_value: "60",
        max_value: "100",
      },
      {
        _id: "3r",
        name: "bmi",
        reading: "20.5",
        // reading: `${Math.floor(Math.random() * 40)}`,
        unit: "kg/msq",
        min_value: "18.5",
        max_value: "24.9",
      },
      {
        _id: "5r",
        name: "o2",
        reading: "91",
        // reading: `${Math.floor(Math.random() * 100)}`,
        unit: "%",
        min_value: "90",
        max_value: "100",
      },
      {
        _id: "6r",
        name: "sugar_level",
        reading: "100",
        // reading: `${Math.floor(Math.random() * 300)}`,
        unit: "mg/dL",
        min_value: "70",
        max_value: "125",
      },
    ],
  },
  {
    patient_id: "2p",
    records: [
      {
        _id: "21r",
        name: "blood_pressure",
        reading: `110/70`,
        unit: "mmHg",
        min_value: "90/60",
        max_value: "120/80",
      },
      {
        _id: "25r",
        name: "o2",
        reading: `93`,
        unit: "%",
        min_value: "90",
        max_value: "100",
      },
      {
        _id: "26r",
        name: "sugar_level",
        reading: `90`,
        unit: "mg/dL",
        min_value: "70",
        max_value: "125",
      },
    ],
  },
  {
    patient_id: "3p",
    records: [
      {
        _id: "31r",
        name: "blood_pressure",
        reading: `${Math.floor(Math.random() * 180)}/${Math.floor(Math.random() * 120)}`,
        unit: "mmHg",
        min_value: "120/80",
        max_value: "90/60",
      },
      {
        _id: "32r",
        name: "heart_rate",
        reading: `${Math.floor(Math.random() * 185)}`,
        unit: "bpm",
        min_value: "60",
        max_value: "100",
      },
      {
        _id: "33r",
        name: "bmi",
        reading: `${Math.floor(Math.random() * 40)}`,
        unit: "kg/msq",
        min_value: "18.5",
        max_value: "24.9",
      },
      {
        _id: "35r",
        name: "o2",
        reading: `${Math.floor(Math.random() * 100)}`,
        unit: "%",
        min_value: "90",
        max_value: "100",
      },
      {
        _id: "36r",
        name: "sugar_level",
        reading: `${Math.floor(Math.random() * 300)}`,
        unit: "mg/dL",
        min_value: "70",
        max_value: "125",
      },
    ],
  },
];
