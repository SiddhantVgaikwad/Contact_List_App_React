import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext'; // Import ThemeProvider
import Navbar from './components/Navbar'; // Import Navbar
import Home from './components/Home';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';

const App = () => {
    const [contacts, setContacts] = useState([]);

    // Fetch contacts from API on component mount
    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setContacts(data); // Update the contacts state with the fetched data
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
        };

        fetchContacts();
    }, []);

    //function to add a new contact
    const addContact = async (newContact) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newContact),
            });

            if (!response.ok) {
                throw new Error('Failed to add contact');
            }

            const data = await response.json();
            setContacts([...contacts, data]); // Add the new contact to local state
        } catch (error) {
            console.error('Error adding contact:', error);
        }
    };

    //function to update an existing contact
    const updateContact = async (updatedContact) => {
        try {
            //PUT request to update the contact
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/users/${updatedContact.id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(updatedContact),
                }
            );

            if (!response.ok) {
                throw new Error('Failed to update contact');
            }

            const data = await response.json();
            setContacts(
                contacts.map(contact =>
                    contact.id === updatedContact.id ? data : contact
                )
            ); // Update the contact in local state
        } catch (error) {
            console.error('Error updating contact:', error);
        }
    };

    // Delete a contact
    const deleteContact = async (id) => {
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/users/${id}`,
                {
                    method: 'DELETE',
                }
            );

            if (!response.ok) {
                throw new Error('Failed to delete contact');
            }

            setContacts(contacts.filter(contact => contact.id !== id)); // Remove the contact from local state
        } catch (error) {
            console.error('Error deleting contact:', error);
        }
    };

    return (
       
        <ThemeProvider>
            <BrowserRouter>
               
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                contacts={contacts}
                                deleteContact={deleteContact}
                            />
                        }
                    />
                    <Route
                        path="/add"
                        element={<AddContact addContact={addContact} />}
                    />
                    <Route
                        path="/edit/:id"
                        element={
                            <EditContact
                                contacts={contacts}
                                updateContact={updateContact}
                            />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;