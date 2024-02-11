import { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginForm = ({errors, callback}) => {

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
                <FloatingLabel label='Correo electronico' name='email' type='email' >
                <Form.Control
                    size="lg"
                    type='email'
                    name="email"
                    placeholder='Correo electrónico'
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={errors.email} />
                    </FloatingLabel>
                <Form.Control.Feedback type='invalid'>
                    {errors.email}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className='mt-3 mb-3' controlId='password'>
                <FloatingLabel  label='Contraseña' name='password' type='password'>
                <Form.Control
                    size="lg"
                    type='password'
                    name="password"
                    placeholder='Contraseña'
                    value={formData.password}
                    onChange={handleChange}
                    isInvalid={errors.password} />
                    <Form.Text id="passwordHelpBlock" muted>
                        <Link to={'/changePassword'}>Cambiar contraseña</Link>
                    </Form.Text>
                 </FloatingLabel>
                <Form.Control.Feedback type='invalid'>
                    {errors.password}
                </Form.Control.Feedback>
            </Form.Group>

            <Button type='submit' variant='danger' size="lg" className='mt-3 w-100' style={{ backgroundColor: "#9c0f06", width: "fit-content" }}>
                Iniciar sesion
            </Button>

            <div className='mt-3 small text-start'>
                <p>¿No tienes una cuenta?, <Link to={'/register'}>registrate aquí</Link></p>
            </div>
            
            
        </Form>
    )
}

export { LoginForm };
