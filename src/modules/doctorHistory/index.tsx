import { Grid } from "@mui/material";
// import { useContext } from "react"
// import { AppContext } from "../../context/app"
import {
  PatientDoctorHistory,
  doctorData,
} from "../../dummyData/patientDoctorHistory";
import { IDoctorHistory } from "./interface";
import { useEffect, useState } from "react";
import { DigiStickyHeaderTable } from "../common/components/DigiStickyHeaderTable";
import { DigiStickyHeaderTableColumnsProps } from "../common/interface/DigiStickyHeaderTable";

const columns: DigiStickyHeaderTableColumnsProps[] = [
  { id: "hospital", label: "Hospital", minWidth: 70 },
  { id: "name", label: "Name", minWidth: 100 },
  { id: "treatments", label: "Treatments", minWidth: 100 },
  {
    id: "registration_date",
    label: "Registration Date",
    minWidth: 130,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "start_date",
    label: "Admit Date",
    minWidth: 130,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "end_date",
    label: "Discard Date",
    minWidth: 130,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "age",
    label: "Doctor Age",
    minWidth: 70,
    align: "right",
  },
  {
    id: "sex",
    label: "Gender",
    minWidth: 70,
    align: "right",
  },
  {
    id: "contact_number",
    label: "Contact Number",
    minWidth: 120,
    align: "right",
  },
  {
    id: "availability_hours",
    label: "Avalaiblility Hours",
    minWidth: 120,
    align: "right",
    object_field: ["start_time", "end_time"],
    object_joiner: "-",
  },
  {
    id: "specialization",
    label: "Specialization",
    minWidth: 100,
    align: "right",
  },
  {
    id: "study_history",
    label: "Study History",
    minWidth: 100,
    align: "right",
  },
  {
    id: "assistant_id",
    label: "Assistant ID",
    minWidth: 70,
    align: "right",
  },
  {
    id: "year_of_practice",
    label: "Years of practice",
    minWidth: 50,
    align: "right",
  },
//   {
//     id: "assosiated_with",
//     label: "Work Type",
//     minWidth: 170,
//     align: "right",
//   },
];

export const MDoctorHistory = () => {
  // const { patientId } = useContext(AppContext);
  const [doctorHistoryData, setDoctorHistoryData] =
    useState<(IDoctorHistory | undefined)[]>();

  useEffect(() => {
    const doctorHistoryDataDetails = getDoctorHistory().map((dataId) => {
      return doctorData.find((data) => data._id === dataId);
    });
    setDoctorHistoryData(doctorHistoryDataDetails);
  }, []);

  const getDoctorHistory = () => {
    return PatientDoctorHistory as Array<string>;
  };

  return (
    <Grid>
      {doctorHistoryData && (
        <DigiStickyHeaderTable<IDoctorHistory | undefined>
          columns={columns}
          rows={doctorHistoryData}
        />
      )}
    </Grid>
  );
};