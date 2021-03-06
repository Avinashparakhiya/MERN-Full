import { Route, Routes, Navigate } from 'react-router-dom';
import Main from './components/Main/index';
import Register from './components/Register/index';
import Login from './components/Login/index';
import EmailVerify from './components/EmailVerify/index';
import NoteState from './components/context/Notes/NoteState';

function App() {
  const user = localStorage.getItem('token');

  return (
    <NoteState>
      <Routes>
        {user && <Route path="/" exact element={<Main />} />}
        <Route path="/register" exact element={<Register />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" exact element={<Navigate replace to="/login" />} />
        <Route path="/api/users/:id/verify/:token" element={<EmailVerify />} />
      </Routes>
    </NoteState>
  );
}

export default App;
