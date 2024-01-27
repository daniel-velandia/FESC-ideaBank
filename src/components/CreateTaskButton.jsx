import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { BsPlus } from 'react-icons/bs';

const CreateTaskButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    const styleIcon = {
        fontSize: '160%',
        transition: 'opacity 0.3s ease',
    }

    const styleButton = {
        position: 'relative',
        overflow: 'hidden',
        width: isHovered ? '21%' : '16%', 
        transition: 'width 0.3s ease'
    }   

    return (
        <Button variant='light' style={styleButton} className="mt-3" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <BsPlus style={{ ...styleIcon, opacity: isHovered ? 0 : 1 }} />
            <span className='button-text fw-semibold'>Crear tarea</span>
        </Button>
    )
}

export {CreateTaskButton}