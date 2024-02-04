import React, { useState, useEffect } from 'react';
import { Container, Table } from "react-bootstrap";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { LISTTASKS_GET_ENDPOINT } from '../../connections/helpers/endpoints';
import { TableTasks } from "../../components/TableTasks";
import { CreateModalTarea } from "../../components/CreateModalTarea";
import PermissionCheck from "../../components/PermissionCheck";
import { roles } from "../../utils/roles";

const TableTask = () => {

    const { identificator } = useParams();
    const [tasks, setTasks] = useState([]);
    const [found, setFound] = useState(true);
  
    useEffect(() => {
      axios.get(`${LISTTASKS_GET_ENDPOINT}?identificator=${identificator}`)
        .then(response => {
          setTasks(response.data);
          setFound(false);
        })
        .catch(err => {
          console.error('Error al traer las tareas ', err);
          setFound(false);
        });
    }, [identificator]);

  return (
    <Container>
      <div className="d-flex justify-content-between">
        <h3 className="fw-bold text-uppercase fs-3 mt-3">Tareas</h3>
        <PermissionCheck requiredRoles={[roles.DIRECTOR, roles.TEACHER]}>
          <CreateModalTarea />
        </PermissionCheck>
      </div>
      <div className='py-2'></div>
      <Table responsive>
          <thead>
            <tr>
              <th>Título</th>
              <th>Descripción</th>
              <th>Usuario asignado</th>
              <th>Fecha de creación</th>
              <th>Fecha de finalización</th>
            </tr>
          </thead>
          <tbody>
            {found ? (
              <tr>
                <td colSpan="6" className='text-center'>Buscando...</td>
              </tr>
            ) : tasks.length === 0 ? (
              <tr>
                <td colSpan="6" className='text-center'>No se encontraron tareas</td>
              </tr>
            ) : (
              tasks.map(task => <TableTasks key={task.identificator} task={task} />)
            )}
          </tbody>
        </Table>
    </Container>
  );
};

export { TableTask }