import React from "react";
import { Container } from "react-bootstrap";
import { TableTasks } from "../../components/TableTasks";
import { CreateModalTarea } from "../../components/CreateModalTarea";
import PermissionCheck from "../../components/PermissionCheck";
import { roles } from "../../utils/roles";

const TableTask = () => {
  return (
    <Container>
      <div className="d-flex justify-content-between">
        <h3 className="fw-bold text-uppercase fs-3 mt-3">Tareas</h3>
        <PermissionCheck requiredRoles={[roles.DIRECTOR, roles.TEACHER]}>
          <CreateModalTarea />
        </PermissionCheck>
      </div>
      <div className="table-container">
        <div className="mt-4">
          <TableTasks />
        </div>
      </div>
    </Container>
  );
};

export { TableTask };
