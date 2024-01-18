import React, { useState } from 'react';

const NewBoxForm = ({ createBox }) => {
    const INITIAL_STATE = {
        width: '',
        height: '',
        backgroundColor: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        createBox(formData);
        setFormData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="width">Width:</label>
            <input 
                type="text"
                name="width"
                value={formData.width}
                onChange={handleChange}
            />
            <label htmlFor="height">Height:</label>
            <input 
                type="text"
                name="height"
                value={formData.height}
                onChange={handleChange}
            />
            <label htmlFor="backgroundColor">Background Color:</label>
            <input 
                type="text"
                name="backgroundColor"
                value={formData.backgroundColor}
                onChange={handleChange}
            />
            <button>Add a new box</button>
        </form>
    )
}

export default NewBoxForm;