import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import UserListPage from './pages/UserListPage';
import AddUserPage from './pages/AddUserPage';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/users">User List</Link></li>
                        <li><Link to="/add-user">Add User</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users" element={<UserListPage />} />
                    <Route path="/add-user" element={<AddUserPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
