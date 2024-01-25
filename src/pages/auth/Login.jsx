import { useEffect, useState } from "react";
import { Alert, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginForm } from "../../components/LoginForm";
import { authentication } from "../../connections/userActions";
import { isEmptyObject } from "../../connections/helpers/isEmptyObject";
import validator from "validator";
import ToastError from "../../components/ToastError";

const Login = () => {
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);

  const connected = useSelector((state) => state.connected);
  const navigation = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (connected) {
      navigation("/");
    }
  });

  const login = (user) => {
    setErrorMessage(null);
    const error = {};

    if (validator.isEmpty(user.email)) {
      error.email = "El correo no puede estar vacio";
    }

    if (validator.isEmpty(user.password)) {
      error.password = "La contraseña no puede estar vacia";
    }

<<<<<<< HEAD
    if (!isEmptyObject(error)) {
      setErrors(error);
    } else {
      dispatch(authentication(user))
        .then((res) => navigation("/"))
        .catch((err) => {
          setErrorMessage(err.response.data.mensaje);
        });
    }
  };

  const renderToastError = () => {
    if (errorMessage) {
      return <ToastError message={errorMessage} />;
    }
    return null;
  };

  return (
    <Container>
      <Row className="flex-container justify-content-md-center">
        <Col sm="12" md="4">
          <div className="text-center mt-3 mb-2">
            <Image
              className="mb-4"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
              rounded
              alt=""
              width="72"
              height="72"
            />
            <h1 className="h3 mb-3 font-weight-normal">Login</h1>
            <p>
              Ingresa tus credenciales para acceder a la plataforma de manera
              segura y personalizada.
            </p>
          </div>
=======
        <Container>
            <Row className='flex-container justify-content-md-center'>
                <Col sm='12' md='4' lg="5">
                    <div className="text-center mt-3 mb-2">
                        <Image className="mb-4" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" rounded alt="" width="72" height="72" />
                        <h1 className="h3 mb-3 font-weight-normal">Login</h1>
                        <p>Ingresa tus credenciales para acceder a la plataforma de manera segura y personalizada.</p>
                    </div>
                    <Card.Body>
                        {errors.login && <Alert variant='danger'>{errors.login}</Alert>}
                        <LoginForm errors={errors} callback={login} />
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    )
}
>>>>>>> navbarCorrections

          <Card.Body>
            {errors.login && <Alert variant="danger">{errors.login}</Alert>}
            <LoginForm errors={errors} callback={login} />
            {renderToastError()}
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
};

export { Login };
