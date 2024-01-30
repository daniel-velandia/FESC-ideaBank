import { CardViewUsers } from "../../components/CardViewUsers";
import { ModalUserDetail } from "../../components/ModalUserDetail";
import { Container, Row } from "react-bootstrap";

export const UserList = () => {
  return (
    <Container className="my-3">
      <Row>
        <ModalUserDetail />
      </Row>
      <CardViewUsers />
    </Container>
  );
};
