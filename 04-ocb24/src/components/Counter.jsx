import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './Counter.module.css';

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
            <p className={styles.title}>Hello {props.name}</p>
            <p className={styles.description}>Counter: {count}</p>
            <button onClick={handleClick}>Add 1</button>
        </div >
    )
}

Counter.propTypes = {
    name: PropTypes.string,
}

export default Counter