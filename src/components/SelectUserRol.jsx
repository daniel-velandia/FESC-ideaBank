import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { ROL_ALL_GET_ENDPOINT } from "../connections/helpers/endpoints";
import axios from "axios";


export const SelectUserRol = ({ onSelect }) => {
  const [selectedRol, setSelectedRol] = useState("");
  const [rols, setrols] = useState([]);

  useEffect(() => {
    axios
      .get(ROL_ALL_GET_ENDPOINT)
      .then((response) => {
        setrols(response.data);
      })
      .catch((error) => {
        console.error("Error fetching rols:", error);
      });
  }, []);

  const handleRolChange = (e) => {
    const selected = e.target.value;
    setSelectedRol(selected);
    onSelect("rol", selected);
  };
  return (
    <Form.Select
      value={selectedRol}
      onChange={handleRolChange}
      aria-label="Default select example"
    >
      <option>-- Selecciona un Rol --</option>
      {rols.map((rol, index) => (
        <option key={index} value={rol.nameRol}>
          {rol.nameRol}
        </option>
      ))}
    </Form.Select>
  );
};
