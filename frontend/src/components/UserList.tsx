import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../services/userService'; 
import { UserForm } from './UserForm';
import { EditUserForm } from './EditUserForm';
import './UserList.css';

interface User {
    id: number;
    name: string;
    email: string;
}

export const UserList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [showAddForm, setShowAddForm] = useState(false);

    const loadUsers = async () => {
        const response = await getUsers();
        setUsers(response.data);
    };

    const handleDelete = async (id: number) => {
        await deleteUser(id);
        loadUsers();
    };

    const handleEdit = (user: User) => {
        setSelectedUser(user);
        setShowAddForm(false); // Hide add form
    };

    const handleAddUser = () => {
        setSelectedUser(null); // Clear selected user
        setShowAddForm(true); // Show add form
    };

    const handleUserSaved = () => {
        loadUsers();
        setShowAddForm(false); // Hide forms after saving
        setSelectedUser(null);
    };

    useEffect(() => {
        loadUsers();
    }, []);

    return (
        <div>

            {showAddForm && (
                <UserForm onUserSaved={handleUserSaved} selectedUser={null} />
            )}

            {selectedUser && (
                <EditUserForm onUserSaved={handleUserSaved} selectedUser={selectedUser} />
            )}

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button onClick={() => handleEdit(user)}>Edit</button>
                                    <button onClick={() => handleDelete(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};