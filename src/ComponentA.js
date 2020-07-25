import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap';

const ComponentA = () => {

    return (
        <>
            <h1>MENU</h1>
            <ul>
                <li><Link to='/' >HOME</Link></li>
                <li><Link to='/componentb' >ComponentB</Link></li>
                <li><Link to='/componentc' >ComponentC</Link></li>
            </ul>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
};

export default ComponentA
