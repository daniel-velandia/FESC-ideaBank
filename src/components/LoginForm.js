import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function LoginForm({errors, callback}) {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
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

            <Form.Group className='mt-3 mb-3' controlId='email'>
                <Form.Control
                    size="lg"
                    type='email'
                    name="email"
                    placeholder='Correo electrónico'
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={errors.email} />

                <Form.Control.Feedback type='invalid'>
                    {errors.email}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className='mt-3 mb-3' controlId='password'>
                <Form.Control
                    size="lg"
                    type='password'
                    name="password"
                    placeholder='Contraseña'
                    value={formData.password}
                    onChange={handleChange}
                    isInvalid={errors.password} />

                <Form.Control.Feedback type='invalid'>
                    {errors.password}
                </Form.Control.Feedback>
            </Form.Group>

            <Button type='submit' variant='primary' size="lg" className='mt-3 w-100'>
                Iniciar sesion
            </Button>

            <div className='mt-3 text-center'>
                <Link to={'/register'}>¿No tienes una cuenta?, registrate aquí</Link>
            </div>
            
            <p className="mt-5 mb-3 text-muted text-center">&copy; 2023-2024</p>
        </Form>
    )
}

export { LoginForm };
