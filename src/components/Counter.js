import React from 'react';

function Counter(props) {
    return (
        <div className='btn-group'>
            <button className="btn btn-success">inc</button>
            <button className="btn btn-secondary">dec</button>
            <button className="btn btn-danger">reset</button>
        </div>
    );
}

export default Counter;