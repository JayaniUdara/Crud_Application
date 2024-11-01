import React from 'react';
import { UserForm } from '../components/UserForm';

const AddUserPage: React.FC = () => {
    return (
        <div>
            <UserForm onUserSaved={() => {}} selectedUser={null} />
        </div>
    );
};

export default AddUserPage;
