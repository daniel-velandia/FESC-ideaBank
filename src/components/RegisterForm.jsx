import { useState } from 'react';
import { Form, Button, Row, Col, FloatingLabel } from 'react-bootstrap';
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
                    <Form.Group className='mb-3' controlId='name'>
                        <FloatingLabel label='Nombre' className='label'>
                        <Form.Control
                            size="lg"
                            type='text'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            isInvalid={errors.name} />
                            </FloatingLabel>
                        <Form.Control.Feedback type='invalid'>
                            {errors.name}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            
                <Col sm="12" md="6">
                    <Form.Group className='mb-3' controlId='lastName'>
                        <FloatingLabel label='Apellido' className='label'>
                        <Form.Control
                            size="lg"
                            type='text'
                            name='lastName'
                            value={formData.lastName}
                            onChange={handleChange}
                            isInvalid={errors.lastName} />
                        </FloatingLabel>
                        <Form.Control.Feedback type='invalid'>
                            {errors.lastName}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>

                <Col sm="12">
                    <Form.Group className='mb-3' controlId='email'>
                        <FloatingLabel label='Correo electrónico' className='label'>
                        <Form.Control
                            size="lg"
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            isInvalid={errors.email} />
                        </FloatingLabel>
                        <Form.Control.Feedback type='invalid'>
                            {errors.email}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>

                <Col sm="12" md="6">
                    <Form.Group className='mb-3' controlId='cellPhone'>
                        <FloatingLabel  label='Teléfono celular' className='label'>
                        <Form.Control
                            size="lg"
                            type='number'
                            name='cellPhone'
                            value={formData.cellPhone}
                            onChange={handleChange}
                            isInvalid={errors.cellPhone} />
                        </FloatingLabel>
                        <Form.Control.Feedback type='invalid'>
                            {errors.cellPhone}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>

                <Col sm="12" md="6">
                    <Form.Group className='mb-3' controlId='companyName'>
                        <FloatingLabel label='Nombre de la empresa' className='label'>
                        <Form.Control
                            size="lg"
                            type='text'
                            name='companyName'
                            value={formData.companyName}
                            onChange={handleChange}
                            isInvalid={errors.companyName} />
                        </FloatingLabel>
                        <Form.Control.Feedback type='invalid'>
                            {errors.companyName}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>

                <Col sm="12" md="6">
                    <Form.Group className='mb-3' controlId='password'>
                        <FloatingLabel label='Contraseña' className='label'>
                        <Form.Control
                            size="lg"
                            type='password'
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            isInvalid={errors.password} />
                        </FloatingLabel>
                        <Form.Control.Feedback type='invalid'>
                            {errors.password}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>

                <Col sm="12" md="6">
                    <Form.Group className='mb-3' controlId='repeatPassword'>
                        <FloatingLabel label='Repetir contraseña' className='label'>
                        <Form.Control
                            size="lg"
                            type='password'
                            name='repeatPassword'
                            value={formData.repeatPassword}
                            onChange={handleChange}
                            isInvalid={errors.password} />
                            </FloatingLabel>
                        <Form.Control.Feedback type='invalid'>
                            {errors.password}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>

            </Row>

            <Button type='submit' variant='danger' size="lg" className='mt-3 w-100' style={{ backgroundColor: "#9c0f06", width: "fit-content" }}>
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