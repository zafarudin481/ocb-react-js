import PropTypes from 'prop-types';
import { useState } from 'react';

const NewTodo = (props) => {
    /**
     * 1. Buat form
     * 2. ada 2 input - title, description
     * 3. ada 1 button - submit
     * 4. bila button diklik, function onSubmit akan dipanggil
     * 5. extract input daripada form
     * 6. panggil API
     */

    const [title, setTitle] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const formContent = event.target.elements;
        const title = formContent.title.value;
        const description = formContent.description.value;

        props.addNewTodo({
            title,
            description,
        })

        event.target.reset();
    };

    return (
        <form onSubmit={handleSubmit} style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "0.725rem",
            padding: "1rem",
            backgroundColor: "#444",
            borderRadius: "0.5rem",
        }} disabled={!title.trim()}>
            <fieldset style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
            }}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" onChange={(event) => {
                    setTitle(event.target.value);
                }} style={{
                    padding: '0.5rem 0.75rem',
                    borderRadius: '0.25rem',
                    border: 'none',
                    backgroundColor: '#fff',
                    color: '#000',
                    outline: 'none',
                }} required />
            </fieldset>

            <fieldset style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
            }}>
                <label htmlFor="description">Description</label>
                <input type="text" id="description" name="description" style={{
                    padding: '0.5rem 0.75rem',
                    borderRadius: '0.25rem',
                    border: 'none',
                    backgroundColor: '#fff',
                    color: '#000',
                    outline: 'none',
                }} />
            </fieldset>

            <button type="submit" className="submit" disabled={!title.trim()}>Submit</button>
        </form>
    )
}

NewTodo.propTypes = {
    addNewTodo: PropTypes.func,
}

export default NewTodo;