'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const performLoginFetch = (username: String, password: String) => {
    let requestResultedInErrorCode = false;
    setLoginLoading(true);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    };
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}api/login`, requestOptions)
      .then((response) => {
        setLoginLoading(false);
        if (response.status !== 200) {
          requestResultedInErrorCode = true;
        }
      }).then((data: any) => {
        if (requestResultedInErrorCode) {
          setLoginError(data.error);
        } else {
          router.push('/dashboard');
        }
      })
      .catch((error) => {
        console.warn(error);
        setLoginError(error);
        setLoginLoading(false);
      });
  };

  const onLoginFormSubmit = () => {
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    performLoginFetch(username, password);
  };

  return (
    <form>
      <label htmlFor="username">
        <input type="text" id="username" name="username" required />
        Username
      </label>
      <label htmlFor="password">
        <input type="password" id="password" name="password" required />
        Password
      </label>
      {
        (loginError) && (
        <span>
          This does not ring a bell with us.
          please make sure you filled in the right login information.
        </span>
        )
      }
      <button type="submit" onClick={() => onLoginFormSubmit()} disabled={loginLoading}>Submit</button>
    </form>
  );
}
