import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import  ThemeContext  from '../ThemeContext';

const EditContact = ({ contacts, updateContact }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();
    const { theme } = useContext(ThemeContext);

    const contact = contacts.find(contact => contact.id === parseInt(id));

    // Set form values when the contact is found
    useEffect(() => {
        if (contact) {
            setName(contact.name);
            setEmail(contact.email);
            setPhone(contact.phone);
        }
    }, [contact]);


     // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedContact = { id: parseInt(id), name, email, phone };
        await updateContact(updatedContact);
        navigate('/');
    };

    return (
        <div className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'} min-h-screen p-6`}>
            <h1 className="text-3xl font-bold text-center my-6">Edit Contact</h1>
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
                    className={`${theme === 'dark' ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-yellow-500 hover:bg-yellow-600'} text-white px-4 py-2 rounded-lg w-full`}
                >
                    Update Contact
                </button>
            </form>
        </div>
    );
};

export default EditContact;