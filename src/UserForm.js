import React, { useState } from 'react';

const UserForm = () => {
    const initialState = {
        username: "",
        email: ""
    }
    const [formData, setFormData] = useState(initialState);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, email } = formData;
        alert(`created user, ${username} w/email ${email}`)
        // reset to emptystring
        setFormData(initialState);
    }
     return (
        <form onSubmit={handleSubmit }>
            <label htmlFor="username">Username </label>
            <input id="username"
                   name="username"
                   type="text"
                   placeholder="username"
                   value={formData.username}
                   onChange={handleChange} />

            <label htmlFor="email">Email </label>
            <input type="email"
                   name="email"
                   placeholder="email"
                   id="email"
                   value={formData.email}
                   onChange={handleChange} />
            <button>Add me</button>
        </form>
    )
}

export default UserForm;

// using vanilla js, we usually wait until the form
// is submitted to capture the user input data 

// controlled input bc react is controlling it every
// step of the way