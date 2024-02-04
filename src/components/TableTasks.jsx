import React from 'react';

const TableTasks = ({ task }) => {
  return (
    <tr>
      <td>{task.title}</td>
      <td>{task.description}</td>
      <td>{task.assignedUser}</td>
      <td>{task.creationDate}</td>
      <td>{task.finishDate}</td>
    </tr>
  );
};

export { TableTasks }