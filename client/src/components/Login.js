import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login({userList}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const history = useHistory();
 // const [postNewAccount, setPostNewAccount] = useState('')


  const handleSignIn = () => {
    // Add logic for signing in here.
    // Check username and password, and if they are correct, redirect to the welcome page.
  
    if (username === 'exampleUser' && password === 'examplePassword') {
      history.push('/inventory'); // Redirect to the welcome page upon successful sign-in.
    } else {
      alert('Incorrect username or password');
    }
  };

  const handleCreateAccount = () => {
    setIsCreatingAccount(true);
    // Redirect to the account creation page.
    history.push('/create-account');
  };

  const handleCancelCreateAccount = () => {
    setIsCreatingAccount(false);
  };

  const handleCreateAccountSubmit = (e) => {
   // e.preventdefault();
    // Validate user input (e.g., check if username and password are not empty)

    if (!username || !password) {
      alert('Please enter a username and password');
      return;
    }
    fetch('http://localhost:5555/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        // Account creation was successful, redirect to the welcome page.
        history.push('/inventory');
      } else {
        // Account creation failed, handle the error.
        alert(data.message); // display an error message to the user.
      }
    })
    .catch((error) => {
      // Handle network or other errors.
      alert('An error occurred while creating the account. Please try again later.');
    });
    // use our backend API endpoint for creating accounts,  POST request
  };
  
  return (
    <div>
      {isCreatingAccount ? (
        <div>
          <h2>Create Account</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleCreateAccountSubmit}>Create Account</button>
          <button onClick={handleCancelCreateAccount}>Cancel</button>
        </div>
      ) : (
        <div>
          <h2>Sign In</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSignIn}>Sign In</button>
          <button onClick={handleCreateAccount}>Create Account</button>
        </div>
      )}
    </div>
  );
}

export default Login;
