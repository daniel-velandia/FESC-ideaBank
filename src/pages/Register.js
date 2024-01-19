import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { REGISTER_POST_ENDPOINT } from '../connections/helpers/endpoints';
import { Alert, Card, Col, Container, Row } from 'react-bootstrap';
import { RegisterForm } from '../components/RegisterForm';
import { isEmptyObject } from "../connections/helpers/isEmptyObject";
import validator from 'validator';
import axios from 'axios';

const Register = () => {

    const [errors, setErrors] = useState({});
    const navigation = useNavigate();

    const register = async ({password, name, email}) => {

        const error = {};

        if (validator.isEmpty(name)) {
            error.name = 'El nombre no puede estar vacio';
        }
        
        if (!validator.isEmail(email)) {
            error.email = 'El correo electronico es invalido';
        }
        
        if (!validator.isLength(password, { min: 8, max: 30 })) {
            error.password = 'La contraseña Debe tener entre 8 y 30 caracteres';
        }

        if (!isEmptyObject(error)) {
            setErrors(error);
        } else {
            axios.post(REGISTER_POST_ENDPOINT, { password, name, email },
                { headers: { 'Accept': 'application/json', 'Content-type': 'application/json' } }
            ).then(res => navigation('/login'))
            .catch(err => setErrors({register: err.response.data.message}));
        }
    }

    return (
        <Container className='mt-3 mb-3'>
            <Row className='justify-content-md-center'>
                <Col sm='12' md='8' lg='6'>
                    <h3 className='text-center'>Registro usuario</h3>
                    <Card.Body>
                        {errors.register && <Alert variant='danger'>{errors.register}</Alert>}
                        <RegisterForm errors={errors} callback={register} />
                        <div className='mt-3'>
                            <Link to={'/login'}>¿Ya tienes una cuenta? Iniciar sesion aqui</Link>
                        </div>
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    );
}

export { Register };