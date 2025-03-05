import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../ThemeContext';

const Home = ({ contacts, deleteContact }) => {
    const { theme } = useContext(ThemeContext);

    
    const handleFakeCall = (phoneNumber) => {
        alert(`Calling ${phoneNumber}...`); // Simulate a call with an alert
    };

    return (
        <div className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'} min-h-screen p-6`}>
            <h1 className="text-3xl font-bold text-center my-6">Contact List</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {contacts.map(contact => (
                    <div
                        key={contact.id}
                        className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow`}
                        onClick={() => handleFakeCall(contact.phone)} // Adding fake call on card click
                    >
                        <h2 className="text-xl font-semibold">{contact.name}</h2>
                        <p className="text-gray-600">{contact.email}</p>
                        <p className="text-gray-600">{contact.phone}</p>
                        <div className="mt-4 space-x-4">
                            <Link
                                to={`/edit/${contact.id}`}
                                className={`${theme === 'dark' ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-yellow-500 hover:bg-yellow-600'} text-white px-4 py-2 rounded-lg`}
                                onClick={(e) => e.stopPropagation()} 
                            >
                                Edit
                            </Link>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevent card click when deleting
                                    deleteContact(contact.id);
                                }}
                                className={`${theme === 'dark' ? 'bg-red-600 hover:bg-red-700' : 'bg-red-500 hover:bg-red-600'} text-white px-4 py-2 rounded-lg`}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;