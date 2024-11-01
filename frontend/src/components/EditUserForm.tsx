import React, { useState, useEffect } from 'react';
import { updateUser } from '../services/userService';
import './EditUserForm.css';

interface EditUserFormProps {
    onUserSaved: () => void;
    selectedUser: { id: number; name: string; email: string };
}

export const EditUserForm: React.FC<EditUserFormProps> = ({ onUserSaved, selectedUser }) => {
    const [name, setName] = useState(selectedUser.name);
    const [email, setEmail] = useState(selectedUser.email);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        await updateUser(selectedUser.id, { name, email });
        onUserSaved(); // Refresh list after save
    };

    return (
        <div className="edit-form-container">
            <form onSubmit={handleSubmit}>
                <h2>Edit User</h2>
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
                <button type="submit">Update User</button>
            </form>
        </div>
    );
};
