import PropTypes from 'prop-types'

const Display = (props) => {
    return (
        <div>
            Counter: {props.displayNumber}
        </div>
    )
}

Display.propTypes = {
    displayNumber: PropTypes.number,
}

export default Display