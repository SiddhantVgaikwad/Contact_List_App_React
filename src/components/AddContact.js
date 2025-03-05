import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import  ThemeContext  from '../ThemeContext';

const AddContact = ({ addContact }) => {
        // State for form fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();
    const { theme } = useContext(ThemeContext);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newContact = { name, email, phone };
        await addContact(newContact);
        navigate('/');
    };

    return (
        <div className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'} min-h-screen p-6`}>
            <h1 className="text-3xl font-bold text-center my-6">Add Contact</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        className={`w-full px-4 py-2 border rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        className={`w-full px-4 py-2 border rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Phone</label>
                    <input
                        type="tel"
                        className={`w-full px-4 py-2 border rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className={`${theme === 'dark' ? 'bg-green-700 hover:bg-green-800' : 'bg-green-600 hover:bg-green-700'} text-white px-4 py-2 rounded-lg w-full`}
                >
                    Add Contact
                </button>
            </form>
        </div>
    );
};

export default AddContact;