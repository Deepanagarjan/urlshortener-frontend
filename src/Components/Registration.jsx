import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/register', { email, firstName, lastName, password });
      // Redirect or show success message
    } catch (err) {
      setError('Registration failed');
    }
  };

  return (
    <Box>
      <FormControl isInvalid={!!error}>
        <FormLabel>First Name</FormLabel>
        <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <FormLabel>Last Name</FormLabel>
        <Input value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <FormLabel>Email</FormLabel>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <FormLabel>Password</FormLabel>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={handleSubmit}>Register</Button>
        {error && <FormErrorMessage>{error}</FormErrorMessage>}
      </FormControl>
    </Box>
  );
};

export default Register;
