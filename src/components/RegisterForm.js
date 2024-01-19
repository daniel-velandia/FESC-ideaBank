import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RegisterForm = ({errors, callback}) => {

    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        cellPhone: '',
        companyName: '',
        password: '',
        repeatPassword: ''
      });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
    };

    const sendResponse = (e) => {
        e.preventDefault();
        callback(formData);
    }

    return (
        <Form onSubmit={sendResponse} className="px-3">

            <Row>
                <Col sm="12" md="6">
                    <Form.Group className='mt-3 mb-3' controlId='name'>
                        <Form.Control
                            size="lg"
                            type='text'
                            name='name'
                            placeholder='Nombre'
                            value={formData.name}
                            onChange={handleChange}
                            isInvalid={errors.name} />

                        <Form.Control.Feedback type='invalid'>
                            {errors.name}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            
                <Col sm="12" md="6">
                    <Form.Group className='mt-3 mb-3' controlId='lastName'>
                        <Form.Control
                            size="lg"
                            type='text'
                            name='lastName'
                            placeholder='Apellido'
                            value={formData.lastName}
                            onChange={handleChange}
                            isInvalid={errors.lastName} />

                        <Form.Control.Feedback type='invalid'>
                            {errors.lastName}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>

                <Col sm="12">
                    <Form.Group className='mt-3 mb-3' controlId='email'>
                        <Form.Control
                            size="lg"
                            type='email'
                            name='email'
                            placeholder='Correo eletrónico'
                            value={formData.email}
                            onChange={handleChange}
                            isInvalid={errors.email} />

                        <Form.Control.Feedback type='invalid'>
                            {errors.email}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>

                <Col sm="12" md="6">
                    <Form.Group className='mt-3 mb-3' controlId='cellPhone'>
                        <Form.Control
                            size="lg"
                            type='number'
                            name='cellPhone'
                            placeholder='Telefono'
                            value={formData.cellPhone}
                            onChange={handleChange}
                            isInvalid={errors.cellPhone} />

                        <Form.Control.Feedback type='invalid'>
                            {errors.cellPhone}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>

                <Col sm="12" md="6">
                    <Form.Group className='mt-3 mb-3' controlId='companyName'>
                        <Form.Control
                            size="lg"
                            type='text'
                            name='companyName'
                            placeholder='Nombre de empresa'
                            value={formData.companyName}
                            onChange={handleChange}
                            isInvalid={errors.companyName} />

                        <Form.Control.Feedback type='invalid'>
                            {errors.companyName}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>

                <Col sm="12" md="6">
                    <Form.Group className='mt-3 mb-3' controlId='password'>
                        <Form.Control
                            size="lg"
                            type='password'
                            name='password'
                            placeholder='Contraseña'
                            value={formData.password}
                            onChange={handleChange}
                            isInvalid={errors.password} />

                        <Form.Control.Feedback type='invalid'>
                            {errors.password}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>

                <Col sm="12" md="6">
                    <Form.Group className='mt-3 mb-3' controlId='repeatPassword'>
                        <Form.Control
                            size="lg"
                            type='password'
                            name='repeatPassword'
                            placeholder='Repita la contraseña'
                            value={formData.repeatPassword}
                            onChange={handleChange}
                            isInvalid={errors.password} />

                        <Form.Control.Feedback type='invalid'>
                            {errors.password}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>

            </Row>

            <Button type='submit' variant='primary' size="lg" className='mt-3 w-100'>
                Registrarse
            </Button>

            <div className='mt-3 text-center'>
                <Link to={'/login'}>¿Ya tienes una cuenta?, Inicia sesion aquí</Link>
            </div>
            
            <p className="mt-5 mb-3 text-muted text-center">&copy; 2023-2024</p>
        </Form>
    )
}

export { RegisterForm };