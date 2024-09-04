import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/forgot-password', { email });
      // Show success message or redirect
    } catch (err) {
      setError('Failed to send reset email');
    }
  };

  return (
    <Box>
      <FormControl isInvalid={!!error}>
        <FormLabel>Email</FormLabel>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Button onClick={handleSubmit}>Send Reset Link</Button>
        {error && <FormErrorMessage>{error}</FormErrorMessage>}
      </FormControl>
    </Box>
  );
};

export default ForgotPassword;
