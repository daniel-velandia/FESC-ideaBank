import Form from "react-bootstrap/Form";

export const SelectUserRol = () => {
  return (
    <Form.Select aria-label="Default select example">
      <option>-- Selecciona un Rol --</option>
      <option value="Administrador">Administrador</option>
      <option value="Aprobador">Aprobador</option>
      <option value="Director">Director</option>
      <option value="Docente">Docente</option>
      <option value="Estudiante">Estudiante</option>
    </Form.Select>
  );
};
