import React, { useState } from 'react';
import { Table, Badge } from 'react-bootstrap';
import { HiOutlineDocumentArrowUp, HiOutlineDocumentArrowDown } from 'react-icons/hi2';
import tableTaskData from '../data/tableTaskData';

const TableTasks = () => {
  
    const [data, setData] = useState(tableTaskData);

    return (
        <React.Fragment>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Estado</th>
                        <th>Encargado</th>
                        <th>Entregable</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((value) => (
                        <tr key={value.id}>
                            <td>{value.name}</td>
                            <td>{value.description}</td>
                            <td>
                                {value.state === 'En ejecución' ? (
                                <Badge className='bd-progress'>{value.state}</Badge>

                                ) : value.state === 'Aprobado' ? (
                                <Badge className='bd-appoved'>{value.state}</Badge>

                                ) : value.state === 'Pendiente' ? (
                                    <Badge className='bd-pending'>{value.state}</Badge>

                                ) : value.state === 'Hecho' ? (
                                    <Badge className='bd-done'>{value.state}</Badge>

                                ) : (
                                <Badge className='bd-rechazado'>{value.state}</Badge>
                                )}
                            </td>
                            <td>{value.manager}</td>
                            <td>
                                <a href={value.deliverable} target='_blank' rel='noopener noreferrer'>
                                    <HiOutlineDocumentArrowUp className='linkIconEye'/>
                                </a>
                                <a href={value.deliverable} download>
                                    <HiOutlineDocumentArrowDown className='linkIconDownload'/>
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
