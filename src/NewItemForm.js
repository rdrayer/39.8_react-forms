import React, { useState } from 'react';

const NewItemForm = ({ addItem }) => {
    const INITIAL_STATE = {
        name: '',
        qty: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const [isInvalid, setIsInvalid] = useState(true);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addItem({ ...formData });
        setFormData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Product</label>
            <input 
                id="name"
                type="text"
                name="name"
                placeholder="Item Name"
                value={formData.name}
                onChange={handleChange}
            />
            <label htmlFor="qty">Quantity:{formData.qty}</label>
            <input 
                id="qty"
                type="range"
                name="qty"
                min="1" 
                max="10"
                value={formData.qty}
                onChange={handleChange}
            />
            {isInvalid && <span style={{ color: 'red' }}>Can't be blank</span>}
            <p>{formData.name}</p>
            <p>{formData.qty}</p>
            <button>Add Item</button>
        </form>
    )
}

export default NewItemForm;