import Form from 'react-bootstrap/Form';

export const SelectUserRol = () => {
  return (
    <Form.Select aria-label="Default select example">
      <option>-- Selecciona un Rol --</option>
      <option value="1">Administrador</option>
      <option value="2">Aprobador</option>
      <option value="3">Director</option>
      <option value="3">Docente</option>
      <option value="3">Estudiante</option>
    </Form.Select>
  );
};
