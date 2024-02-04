import { useEffect, useState } from "react";
import { Alert, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginForm } from "../../components/auth/LoginForm";
import { authentication } from "../../connections/userActions";
import { isEmptyObject } from "../../connections/helpers/isEmptyObject";
import validator from "validator";
import ToastError from "../../components/ToastError";
import FESCfondo from "../../img/fachada.png"
import logof from "../../img/logof.png"

const Login = () => {
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);

  const connected = useSelector((state) => state.user.connected);
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

    if (!isEmptyObject(error)) {
      setErrors(error);
    } else {
      dispatch(authentication(user))
        .then((res) => navigation("/"))
        .catch((err) => {
          setErrorMessage(err.response.data.mensaje)
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
<Container className="d-flex align-items-center justify-content-center" style={{ height: '105vh' }}>
    <div className="shadow p-3 mb-5 bg-white rounded" style={{ maxWidth: '800px', width: '100%', maxHeight: '800px' }}>
        <Row className='flex-container h-100'>
            <Col md='6' lg='6' className="custom-card left-container d-flex align-items-center justify-content-center">
                <Image src={FESCfondo} alt="imagen" className="img-fluid d-none d-md-block" style={{ objectFit: 'cover', maxHeight: '100%', width: '100%' }} />
            </Col>

            <Col md='6'  lg='6' className="custom-card right-container d-flex align-items-center">
                <div className="d-flex flex-column justify-content-between h-100">
                    <div>
                        <div className="text-center mt-3 mb-2">
                            <Image src={logof} alt="logo" className="img-fluid" />
                        </div>

                        <div className="text-center mt-3 mb-2">
                            <p>Ingresa tus credenciales para acceder a la plataforma de manera segura y personalizada.</p>
                        </div>

                        <Card.Body>
                            {errors.login && <Alert variant='danger'>{errors.login}</Alert>}
                            <LoginForm errors={errors} callback={login} />
                        </Card.Body>
                    </div>

                    <div>
                        <p className="mt-5 mb-3 text-muted text-center">&copy; 2023-2024</p>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
    {renderToastError()}
</Container>







  );
};

export { Login };
