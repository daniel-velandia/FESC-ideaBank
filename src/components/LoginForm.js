import {useState} from "react";
import {Button, Form} from "react-bootstrap";

function LoginForm({errors, callback}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const sendResponse = (e) => {
        e.preventDefault();
        callback({email, password});
    }

    return (

        <Form onSubmit={sendResponse}>
            <Form.Group className='mt-3 mb-3' controlId='email'>
                <Form.Label>correo</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Ingrese su correo'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    isInvalid={errors.email} />

                <Form.Control.Feedback type='invalid'>
                    {errors.email}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mt-3 mb-3' controlId='password'>
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
                Iniciar sesion
            </Button>
        </Form>
    )
}

export { LoginForm }