import React from 'react';

const showPassword = () => {
  const passwordElement = document.getElementById('inputPassword');
  if (passwordElement.type === 'password') {
    passwordElement.type = 'text';
  } else {
    passwordElement.type = 'password';
  }
};

export default showPassword;
