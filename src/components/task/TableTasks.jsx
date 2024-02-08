import React from 'react';
import { Badge } from 'react-bootstrap';

const TableTasks = ({ task, onClick }) => {
  return (
    <tr onClick={onClick}>
      <td>{task.title}</td>
      <td>{task.assignedUser}</td>
      <td>{task.finishDate}</td>
      <td>{task.status === 'EN PROGRESO' ? (
        <Badge className='my-badge-progress-state'>{task.status}</Badge>
      ) : task.status === 'PENDIENTE' ? (
        <Badge className='my-badge-pending-state'>{task.status}</Badge>
      ) : task.status === 'APROBADO' ? (
        <Badge className='my-badge-appoved-state'>{task.status}</Badge>
      ) : task.status === 'LISTO' ? (
        <Badge className='my-badge-done-state'>{task.status}</Badge>
      ) : 
        <Badge className='my-badge-rejected-state'>{task.status}</Badge>
      }
      </td>
    </tr>
  );
};

export { TableTasks }