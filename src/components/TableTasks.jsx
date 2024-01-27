import React, { useState } from 'react';
import { Table, Badge } from 'react-bootstrap';
import { IoMdEye, IoMdDownload } from 'react-icons/io';
import tableTaskData from '../data/tableTaskData';

const TableTasks = () => {
  
    const [data, setData] = useState(tableTaskData);

    return (
        <React.Fragment>
            <Table striped hover bordered responsive>
                <thead>
                    <tr className='text-center'>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Estado</th>
                        <th>Encargado</th>
                        <th>Entregable</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {data.map((value) => (
                        <tr key={value.id}>
                            <td>{value.name}</td>
                            <td>{value.description}</td>
                            <td>
                                {value.state === 'En ejecución' ? (
                                <Badge bg='success'>{value.state}</Badge>
                                ) : value.state === 'Terminada' ? (
                                <Badge bg='primary'>{value.state}</Badge>
                                ) : (
                                <Badge bg='danger'>{value.state}</Badge>
                                )}
                            </td>
                            <td>{value.manager}</td>
                            <td>
                                <a href={value.deliverable} target='_blank' rel='noopener noreferrer'>
                                    <IoMdEye className='linkIcon'/>
                                </a>
                                <a href={value.deliverable} download>
                                    <IoMdDownload className='linkIcon'/>
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </React.Fragment>
    )
}

export {TableTasks}
