import { useEffect, useState } from "react";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
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

    const login = ({email, password}) => {

        const error = {};

        if (validator.isEmpty(email)) {
            error.email = 'El correo no puede estar vacio';
        }
        
        if (validator.isEmpty(password)) {
            error.password = 'La contraseña no puede estar vacia';
        }

        if (!isEmptyObject(error)) {
            setErrors(error);
        } else {
            dispatch(authentication({ email, password }))
            .then(res => navigation('/'))
            .catch(err => setErrors({ login: 'Credenciales incorrectas' }));
        }
    }

    return (

        <Container className='mt-3 mb-3'>
            <Row className='justify-content-md-center'>
                <Col sm='12' md='8' lg='6'>
                    <h3 className='text-center'>Iniciar sesion</h3>
                    <Card.Body>
                        {errors.login && <Alert variant='danger'>{errors.login}</Alert>}
                        <LoginForm errors={errors} callback={login} />
                        <div className='mt-3'>
                            <Link to={'/register'}>¿No tienes una cuenta? Registrate aqui</Link>
                        </div>
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    )
}

export { Login };