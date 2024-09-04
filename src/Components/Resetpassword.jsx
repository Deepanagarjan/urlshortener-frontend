import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/reset-password', { password, token });
      // Redirect or show success message
    } catch (err) {
      setError('Failed to reset password');
    }
  };

  return (
    <Box>
      <FormControl isInvalid={!!error}>
        <FormLabel>New Password</FormLabel>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={handleSubmit}>Reset Password</Button>
        {error && <FormErrorMessage>{error}</FormErrorMessage>}
      </FormControl>
    </Box>
  );
};

export default ResetPassword;
