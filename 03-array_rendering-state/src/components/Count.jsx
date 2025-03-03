import { useState } from 'react';
import Display from './Display';
// import PropTypes from 'prop-types'

const Count = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <Display displayNumber={counter} />
            <button onClick={() => setCounter((previousValue) => previousValue + 1)}>Increase</button>
        </div>
    )
}

// Count.propTypes = {}

export default Count