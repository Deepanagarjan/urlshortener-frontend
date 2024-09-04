import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/login', { email, password });
      // Redirect or show success message
    } catch (err) {
      setError('Login failed');
    }
  };

  return (
    <Box>
      <FormControl isInvalid={!!error}>
        <FormLabel>Email</FormLabel>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <FormLabel>Password</FormLabel>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={handleSubmit}>Login</Button>
        {error && <FormErrorMessage>{error}</FormErrorMessage>}
      </FormControl>
    </Box>
  );
};

export default Login;
