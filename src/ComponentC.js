import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap';

const ComponentC = (props) => {
    const backPage = () => {
        props.history.push('componentb')
    }

    return (
        <>
            <div>ComponentC</div>
            <button onClick={backPage}>ホームへ戻る</button>
            <Link to='/componentb' >ComponentBへ移動</Link>

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

export default ComponentC
