import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { REGISTER_POST_ENDPOINT } from '../connections/helpers/endpoints';
import { Alert, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { RegisterForm } from '../components/RegisterForm';
import { isEmptyObject } from "../connections/helpers/isEmptyObject";
import validator from 'validator';
import axios from 'axios';

const Register = () => {

    const [errors, setErrors] = useState({});
    const navigation = useNavigate();

    const register = async (user) => {

        const error = {};

        if (validator.isEmpty(user.name)) {
            error.name = 'El nombre no puede estar vacio';
        }

        if (validator.isEmpty(user.lastName)) {
            error.lastName = 'El apellido no puede estar vacio';
        }
        
        if (!validator.isEmail(user.Alertemail)) {
            error.email = 'El correo electronico es invalido';
        }

        if (validator.isEmpty(user.cellPhone)) {
            error.cellPhone = 'El telefono no puede estar vacio';
        }
        
        if (!validator.isLength(user.password, { min: 8, max: 30 })) {
            error.password = 'La contraseña debe tener entre 8 y 30 caracteres';
        }

        if (user.password !== user.repeatPasword) {
            error.password = 'Las contraseñas debe coincidir';
        }

        if (!isEmptyObject(error)) {
            setErrors(error);
        } else {
            axios.post(REGISTER_POST_ENDPOINT, user,
                { headers: { 'Accept': 'application/json', 'Content-type': 'application/json' } }
            ).then(res => navigation('/login'))
            .catch(err => setErrors({register: err.response.data.message}));
        }
    }

    return (
        <Container>
            <Row className='flex-container justify-content-md-center'>
                <Col sm='12' md='6'>
                    
                    <div className="d-flex align-items-center mb-2 px-3">
                        <Image className="me-4" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" rounded alt="" width="96" height="96" />
                        <div>
                            <h1 className="h3 font-weight-normal">Registro</h1>
                            <p>Crea una cuenta para acceder a la plataforma de manera segura y personalizada.</p>
                        </div>
                    </div>

                    <Card.Body>
                        {errors.register && <Alert variant='danger'>{errors.register}</Alert>}
                        <RegisterForm errors={errors} callback={register} />
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    );
}

export { Register };