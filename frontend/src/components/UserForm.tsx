import React, { useState, useEffect } from 'react';
import { createUser, updateUser } from '../services/userService';
import './UserForm.css';

interface UserFormProps {
    onUserSaved: () => void;
    selectedUser: { id: number; name: string; email: string } | null;
}

export const UserForm: React.FC<UserFormProps> = ({ onUserSaved, selectedUser }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (selectedUser) {
            setName(selectedUser.name);
            setEmail(selectedUser.email);
        }
    }, [selectedUser]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (selectedUser) {
            await updateUser(selectedUser.id, { name, email });
        } else {
            await createUser({ name, email });
        }
        setName('');
        setEmail('');
        onUserSaved(); // Refresh list after save
    };

    return (
        <div className="form-container">
            <h1>{selectedUser ? 'Edit User' : 'Add User'}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button type="submit">{selectedUser ? 'Update' : 'Add'} User</button>
            </form>
        </div>
    );
};