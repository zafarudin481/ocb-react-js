const Cat = () => {
    const catName = 'Munchy';
    const catRole = 'Guardian';

    return (
        <div
            style={{
                border: '1px solid blue',
                padding: '1rem 2rem',
                borderRadius: '1rem',
                backgroundColor: 'lightblue'
            }}
        >
            <p>{catName}</p>
            <p>{catRole}</p>
        </div>
    )
};

export default Cat;