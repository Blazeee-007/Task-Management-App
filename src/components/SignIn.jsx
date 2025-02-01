import React, { useState } from 'react';
    import { signInWithEmailAndPassword } from "firebase/auth";
    import { auth } from '../App';
    import { useNavigate } from 'react-router-dom';
    import { TextField, Button, Typography } from '@mui/material';

    function SignIn() {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const navigate = useNavigate();

      const handleSignIn = async (e) => {
        e.preventDefault();
        try {
          await signInWithEmailAndPassword(auth, email, password);
          navigate('/tasks');
        } catch (error) {
          console.error("Error signing in:", error);
        }
      };

      return (
        <form onSubmit={handleSignIn}>
          <Typography variant="h4" gutterBottom>Sign In</Typography>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">Sign In</Button>
        </form>
      );
    }

    export default SignIn;
