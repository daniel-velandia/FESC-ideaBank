import { Badge } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

const UserProyectsTable = (props) => {

  const states = {
    'PENDIENTE': 'my-badge-pending-state',
    'APROBADO': 'my-badge-appoved-state',
    'EN PROGRESO': 'my-badge-progress-state',
    'LISTO': 'my-badge-done-state'
  };

  return (
    <div className='my-projects-table'>
      <Table responsive>
        <thead>
          <tr>
            <th>Empresa</th>
            <th>Estado</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {props.projects.map((project, index) => 
            <tr key={index} >
              <td>{project.manager}</td>
              <td><Badge className={states[project.state]}>{project.state}</Badge></td>
              <td>{project.creationDate}</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export { UserProyectsTable };