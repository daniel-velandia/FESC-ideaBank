import { TableViewUsers } from "../../components/TableViewUsers";
import { Container } from "react-bootstrap";

export const UserList = () => {
  return (
    <Container className="col-md-6">
      <div className="table-container">
        <div className="mt-3">
          <TableViewUsers />
        </div>
      </div>
    </Container>
  );
};
