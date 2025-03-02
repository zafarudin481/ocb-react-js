// function Title() {
//     return <h1>Title Component</h1>
// };

// second way to write a function
const Title = (props) => {
    props.something?.();

    return (
        <div
            style={{
                border: '1px solid black',
                padding: '1rem 2rem',
                borderRadius: '1rem',
                backgroundColor: 'burlywood',
            }}
        >
            <p
                style={{
                    fontWeight: 'bold',
                    fontSize: 40
                }}
            >{props.name}</p>
            <p>{props.role}</p>
            {
                props.isManager && <p style={{ color: 'red' }}>Manager</p>
            }
        </div>
    )
};

export default Title;