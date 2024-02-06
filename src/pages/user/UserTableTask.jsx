import React, { useState, useEffect } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";
import { LISTTASKS_GET_ENDPOINT } from "../../connections/helpers/endpoints";
import { TableTasks } from "../../components/TableTasks";
import { CreateModalTarea } from "../../components/CreateModalTarea";
import PermissionCheck from "../../components/PermissionCheck";
import { roles } from "../../utils/roles";

const TableTask = () => {
  const { identificator } = useParams();
  const [tasks, setTasks] = useState([]);
  const [found, setFound] = useState(true);

  useEffect(() => {
    axios
      .get(`${LISTTASKS_GET_ENDPOINT}?identificator=${identificator}`)
      .then((response) => {
        setTasks(response.data);
        setFound(false);
      })
      .catch((err) => {
        console.error("Error al traer las tareas ", err);
        setFound(false);
      });
  }, [identificator]);

  return (
    <Container>
      <Row className="gx-5 mx-2 mt-2 p-2 align-items-center">
        <Col xs={12} md={6}>
          <h3>Tareas</h3>
        </Col>
        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-end align-items-center"
        >
          <PermissionCheck requiredRoles={[roles.DIRECTOR, roles.TEACHER]}>
            <CreateModalTarea />
          </PermissionCheck>
        </Col>
      </Row>
      <div className="py-2"></div>
      <Table responsive>
        <thead>
          <tr>
            <th>Título</th>
            <th>Usuario asignado</th>
            <th>Fecha de finalización</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {found ? (
            <tr>
              <td colSpan="6" className="text-center">
                Buscando...
              </td>
            </tr>
          ) : tasks.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center">
                No se encontraron tareas
              </td>
            </tr>
          ) : (
            tasks.map((task) => (
              <TableTasks key={task.identificator} task={task} />
            ))
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export { TableTask }