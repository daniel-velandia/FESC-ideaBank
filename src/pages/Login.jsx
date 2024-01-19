import { useEffect, useState } from "react";
import { Alert, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { LoginForm } from '../components/LoginForm';
import { authentication } from '../connections/userActions';
import { isEmptyObject } from "../connections/helpers/isEmptyObject";
import validator from "validator";

const Login = () => {

    const [errors, setErrors] = useState({});
    const connected = useSelector(state => state.connected);
    const navigation = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if(connected) {
            navigation('/');
        }
    });

    const login = (user) => {

        const error = {};

        if (validator.isEmpty(user.email)) {
            error.email = 'El correo no puede estar vacio';
        }
        
        if (validator.isEmpty(user.password)) {
            error.password = 'La contraseña no puede estar vacia';
        }

        if (!isEmptyObject(error)) {
            setErrors(error);
        } else {
            dispatch(authentication(user))
            .then(res => navigation('/'))
            .catch(err => setErrors({ login: 'Credenciales incorrectas' }));
        }
    }

    return (

        <Container>
            <Row className='flex-container justify-content-md-center'>
                <Col sm='12' md='4'>

                    <div className="text-center mb-4">
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

export { Login };