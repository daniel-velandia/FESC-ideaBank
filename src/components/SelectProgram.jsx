import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import axios from "axios";
import { CAREER_ALL_GET_ENDPOINT } from "../connections/helpers/endpoints";

export const SelectProgram = ({ onSelect }) => {
  const [selectedCareer, setSelectedCareer] = useState("");
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    axios
      .get(CAREER_ALL_GET_ENDPOINT)
      .then((response) => {
        setPrograms(response.data);
      })
      .catch((error) => {
        console.error("Error fetching programs:", error);
      });
  }, []);

  const handleCareerChange = (e) => {
    const selected = e.target.value;
    setSelectedCareer(selected);
    onSelect("program", selected);
  };
  return (
    <Form.Select
      value={selectedCareer}
      onChange={handleCareerChange}
      aria-label="Default select example"
    >
      <option>-- Selecciona una carrera --</option>
      {programs.map((program, index) => (
        <option key={index} value={program.programName}>
          {program.programName}
        </option>
      ))}
    </Form.Select>
  );
};
