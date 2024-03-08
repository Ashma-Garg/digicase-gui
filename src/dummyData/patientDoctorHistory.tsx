import { IDoctorHistory } from "../modules/doctorHistory/interface";

export const PatientDoctorHistory: Array<string> = ["1d", "2d"];

export const doctorData: IDoctorHistory[] = [
  {
    _id: "1d",
    name: "Dr. Arun Tyagi",
    hospital: "Madanta",
    treatments: ["Cardiac Attack"],
    registration_date: "3/6/2024, 6:50:47 PM",
    start_date: "3/6/2024, 6:50:47 PM",
    end_date: "3/9/2024, 6:50:47 PM",
    specialization: ["Surgon"],
    study_history: ["MBBS", "MD"],
    contact_number: "+1(382)-880-1789",
    assistant_id: "657890",
    age: 60,
    sex: "male",
    year_of_practice: 20,
    assosiated_with: [
      { type: "On Contract", hospital: "ABC" },
      { type: "Full-Time", hospital: "Madanta" },
    ],
    availability_hours: ["9:00 AM -12:00 PM", "7:00 PM - 9:00 PM"],
  },
  {
    _id: "2d",
    name: "Dr. Aasha Negi",
    hospital: "AAIMS",
    treatments: ["Fever"],
    registration_date: "12/24/2023, 6:50:47 PM",
    start_date: "12/24/2023, 6:50:47 PM",
    end_date: "12/24/2023, 7:15:15 PM",
    specialization: [],
    study_history: ["MBBS"],
    contact_number: "+1(382)-880-0995",
    assistant_id: null,
    age: 40,
    sex: "female",
    year_of_practice: 5,
    assosiated_with: [{ type: "Full-Time", hospital: "AAIMS" }],
    availability_hours: ["9:00 AM - 6:00 PM"],
  },
];
