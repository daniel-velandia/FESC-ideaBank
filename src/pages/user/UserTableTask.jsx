import React from 'react';
import { Container } from 'react-bootstrap';
import { CreateTaskButton } from '../../components/CreateTaskButton';
import { TableTasks } from '../../components/TableTasks';

const TableTask = () => {
    
    return (
        <Container>
            <div className='d-flex justify-content-between'>
                <h3 className='fw-bold text-uppercase fs-3 mt-3'>Tareas</h3>
                <CreateTaskButton />
            </div>
            <div className='table-container'>
                <div className='mt-4'>
                    <TableTasks />
                </div>
            </div>
        </Container>
    )
}

export {TableTask}
