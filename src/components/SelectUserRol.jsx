import Form from "react-bootstrap/Form";
import { useState } from "react";

export const SelectUserRol = ({ onSelect }) => {
  const [selectedRol, setSelectedRol] = useState("");

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
      <option value="Administrador">Administrador</option>
      <option value="Aprobador">Aprobador</option>
      <option value="Director">Director</option>
      <option value="Docente">Docente</option>
      <option value="Estudiante">Estudiante</option>
    </Form.Select>
  );
};
