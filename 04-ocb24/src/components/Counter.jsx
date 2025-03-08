import PropTypes from 'prop-types';
import { useState } from 'react';

const Counter = props => {
    const [count, setCount] = useState(0);

    const handleClick = () => setCount((previousCount) => {
        return previousCount + 1;
    });

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '3px'
        }}>
            <p>Hello {props.name}</p>
            <p>Counter: {count}</p>
            <button onClick={handleClick}>Add 1</button>
        </div >
    )
}

Counter.propTypes = {
    name: PropTypes.string,
}

export default Counter