import { useState } from 'react';
import { REGISTER_POST_ENDPOINT } from '../../connections/helpers/endpoints';
import { Alert, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { RegisterForm } from '../../components/RegisterForm';
import { isEmptyObject } from "../../connections/helpers/isEmptyObject";
import validator from 'validator';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logof from "../../img/logof.png"

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
        
        if (!validator.isEmail(user.email)) {
            error.email = 'El correo electronico es invalido';
        }

        if (validator.isEmpty(user.cellPhone)) {
            error.cellPhone = 'El telefono no puede estar vacio';
        }
        
        if (!validator.isLength(user.password, { min: 8, max: 30 })) {
            error.password = 'La contraseña debe tener entre 8 y 30 caracteres';
        }

        if (user.password !== user.repeatPassword) {
            error.password = 'Las contraseñas debe coincidir';
        }

        if (!isEmptyObject(error)) {
            setErrors(error);
        } else {
            axios.post(REGISTER_POST_ENDPOINT, user)
            .then(res => navigation('/login'))
            .catch(err => setErrors({ register: 'Hubo un problema al crear el usuario, puede que el correo ya haya sido registrado' }));
        }
    }

    return (
<Container>
    <Row className='flex-container justify-content-md-center'>
        <Col sm='12' md='8' lg='7' className='custom-container shadow p-3 mb-5 bg-white rounded'>

            <div className="d-md-flex align-items-center mt-3 mb-2 px-3 custom-header">
                <div className="text-center mb-3 mb-md-2 mx-auto">
                    <Image className="me-4" src={logof} />
                </div>

                <div className="text-center text-md-start flex-grow-1">
                    <h1 className="h3 font-weight-normal">Registro</h1>
                    <p>Crea una cuenta para acceder a la plataforma de manera segura y personalizada.</p>
                </div>
            </div>

            <Card.Body className="custom-card-body">
                {errors.register && <Alert variant='danger'>{errors.register}</Alert>}
                <RegisterForm errors={errors} callback={register} />
            </Card.Body>

        </Col>
    </Row>
</Container>







    );
}

export { Register };