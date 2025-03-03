import PropTypes from 'prop-types'

const Card = (props) => {
    if (props.hidden) { return null };

    return (
        <div
            style={{
                border: '1px solid #000',
                borderRadius: '5px',
                padding: '10px',
                margin: '1rem',
            }}
        >
            <p>Hello {props.user.name} from {props.user.location}</p>
        </div>
    )
}

Card.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string,
        location: PropTypes.string,
        age: PropTypes.number,
        active: PropTypes.bool,
    }),
    hidden: PropTypes.bool,
}

export default Card