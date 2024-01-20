import Form from "react-bootstrap/Form";
import { useState } from "react";

export const SelectCareer = ({ onSelect }) => {
  const [selectedCareer, setSelectedCareer] = useState("");

  const handleCareerChange = (e) => {
    const selected = e.target.value;
    setSelectedCareer(selected);
    onSelect("career", selected); 
  };
  return (
    <Form.Select
      value={selectedCareer}
      onChange={handleCareerChange}
      aria-label="Default select example"
    >
      <option>-- Selecciona una carrera --</option>
      <option value="1">Diseño Gráfico</option>
      <option value="2">Diseño y Administración de Negocios de la Moda</option>
      <option value="3">Administracion Turística y Hotelera</option>
      <option value="4">Ingeniería de Software</option>
      <option value="5">Administración de Negocios Internacionales</option>
      <option value="6">Administracion de Negocios Internacionales - Distancia</option>
      <option value="7">Administracion Financiera</option>
      <option value="8">Gestión Logística Empresarial</option>
    </Form.Select>
  );
};
