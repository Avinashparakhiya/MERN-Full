import React, { useState } from 'react';
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
  let history = useNavigate();
  const paperStyle = { padding: '30px 20px', width: 300, margin: '20px auto' };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: '#1bbd7e' };

  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = async () => {
    const { firstname, lastname, email, password } = user;
    if (!firstname || !lastname || !email || !password) {
      toast.error('Please enter all the detail');
    } else {
      try {
        const { data } = await axios.post(
          'http://localhost:3000/api/users',
          user
        );
        //console.log('da', data.message);
        toast.success(data.message);
        //.post('http://localhost:4000/auth/register', user)
        //.then((res) => {
        //toast.success(res.data.message);
        //history.push('/login');
        //});
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <Grid className="register">
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <PersonAddAltIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <TextField
          fullWidth
          label="Firstname"
          name="firstname"
          input
          type="text"
          value={user.firstname}
          placeholder="Enter your name"
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Lastname"
          name="lastname"
          type="text"
          value={user.lastname}
          placeholder="Enter your name"
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={user.email}
          placeholder="Enter Your Email Id"
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Password"
          name="password"
          input
          type="password"
          value={user.password}
          placeholder="Enter your password"
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={register}
        >
          Registration
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={() => {
            history('/login');
          }}
        >
          Login
        </Button>
      </Paper>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Grid>
  );
};

export default Register;
