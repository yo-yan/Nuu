import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';

const ComponentB = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setData(res.data);
            })
    }, []);

    console.log(data, 'dataの確認');

    return (
        <div>
            <div>ComponentB</div>
            <Link to='componentc'>ComponentCへ移動</Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((element, index) => {
                        return (
                            <tr key={index}>
                                <td>{element.userId}</td>
                                <td>{element.id}</td>
                                <td>{element.title}</td>
                                <td>{element.body}</td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ComponentB
