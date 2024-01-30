import React from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { BsPlus } from 'react-icons/bs';

const CreateTaskButton = () => {

    const styleIcon = {
        fontSize: "140%"
    }

    const styleButton = {
        height: "20%"
    }
    
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Haz clic para crear una tarea
        </Tooltip>
    )
    
    return (
        <OverlayTrigger
          placement="left"
          delay={{ show: 100, hide: 100 }}
          overlay={renderTooltip}
        >
          <Button variant="light" style={styleButton} className='mt-2'><BsPlus style={styleIcon}/></Button>
        </OverlayTrigger>
    )
}

export {CreateTaskButton}