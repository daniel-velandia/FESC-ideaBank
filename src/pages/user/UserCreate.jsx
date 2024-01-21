import { CreateUserForm } from "../../components/CreateUserForm";
import { useState } from "react";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import { isEmptyObject } from "../../connections/helpers/isEmptyObject";
import validator from "validator";
import { USER_CREATE_POST_ENDPOINT } from "../../connections/helpers/endpoints";
import axios from "axios";

export const UserCreate = () => {
  const [errors, setErrors] = useState({});

  const createUser = async (user) => {
    const error = {};

    if (validator.isEmpty(user.name)) {
      error.name = "El nombre no puede estar vacio";
    }

    if (validator.isEmpty(user.lastName)) {
      error.lastName = "El apellido no puede estar vacio";
    }

    if (!validator.isEmail(user.email)) {
      error.email = "El correo electronico es invalido";
    }

    if (validator.isEmpty(user.cellPhone)) {
      error.cellPhone = "El telefono no puede estar vacio";
    }

    if (!validator.isLength(user.password, { min: 6, max: 30 })) {
      error.password = "La contraseña debe tener entre 6 y 30 caracteres";
    }

    if (user.password !== user.repeatPassword) {
      error.password = "Las contraseñas debe coincidir";
    }

    if (validator.isEmpty(user.program)) {
      error.program = "Tiene que asignar una carrera";
    }

    if (validator.isEmpty(user.rol)) {
      error.rol = "Tiene que asignar un rol";
    }

    if (!isEmptyObject(error)) {
      setErrors(error);
    } else {
      const token = localStorage.getItem("token"); 
      axios
        .post(USER_CREATE_POST_ENDPOINT, user, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => console.log(res))
        .catch((err) =>
          setErrors({
            register:
              "Hubo un problema al crear el usuario, puede que el correo ya haya sido registrado",
          })
        );
    }
  };

  return (
    <Container>
      <Row className="flex-container justify-content-md-center">
        <Col sm="12" md="6">
          <div className="d-flex align-items-center mt-3 mb-2 px-3">
            <div>
              <h1 className="h3 font-weight-normal">Crear usuario</h1>
              <p>
                Crea un usuario para que el pueda que acceder a la plataforma de
                manera segura y personalizada.
              </p>
            </div>
          </div>

          <Card.Body>
            {errors.register && (
              <Alert variant="danger">{errors.register}</Alert>
            )}
            <CreateUserForm errors={errors} callback={createUser} />
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
};
