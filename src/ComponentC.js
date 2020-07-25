import React from 'react'
import { Link } from 'react-router-dom'

const ComponentC = (props) => {
    const backPage = () => {
        props.history.push('componentb')
    }

    return (
        <>
            <div>ComponentC</div>
            <button onClick={backPage}>ホームへ戻る</button>
            <Link to='/componentb' >ComponentBへ移動</Link>
        </>
    );
};

export default ComponentC
