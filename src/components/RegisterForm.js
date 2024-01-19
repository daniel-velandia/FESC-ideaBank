import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const RegisterForm = ({errors, callback}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const sendResponse = (e) => {
        e.preventDefault();
        callback({password, name, email});
    }

    return (
        <Form onSubmit={sendResponse}>
            <Form.Group className='mt-3 mb-3' controlId='name'>
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Ingrese su nombre'
                    value={name}
                    onChange={e => setName(e.target.value)}
                    isInvalid={errors.name} />

                <Form.Control.Feedback type='invalid'>
                    {errors.name}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mb-3' controlId='email'>
                <Form.Label>Correo</Form.Label>
                <Form.Control
                    type='email'
                    placeholder='Ingrese su correo'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    isInvalid={errors.email} />

                <Form.Control.Feedback type='invalid'>
                    {errors.email}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mb-3' controlId='password'>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                    type='password'
                    placeholder='Ingrese su contraseña'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    isInvalid={errors.password} />

                <Form.Control.Feedback type='invalid'>
                    {errors.password}
                </Form.Control.Feedback>
            </Form.Group>

            <Button type='submit' variant='primary' className='mt-3'>
                Crear usuario
            </Button>
        </Form>
    )
}

export { RegisterForm };