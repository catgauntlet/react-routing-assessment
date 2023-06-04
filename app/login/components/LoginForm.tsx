'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import { useAuthenticationContext } from '@/app/context/authentication.tsx';

export default function LoginForm() {
  const router = useRouter();
  const { setAuthenticated } = useAuthenticationContext();
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);

  /**
   * Perform the login fetch POST to the mock API, which will return authenticated: true
   * and a cookie if the correct credentials are filled in
   * If logged in correclty, update the state and navigate to the target page
   * from the query or to dashboard as a fallback
   */
  const performLoginFetch = (username: String, password: String) => {
    let requestResultedInErrorCode = false;
    setLoginLoading(true);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    };

    fetch('api/login', requestOptions)
      .then((response) => {
        setLoginLoading(false);
        if (response.status !== 200) {
          requestResultedInErrorCode = true;
        }
      }).then((data: any) => {
        if (requestResultedInErrorCode) {
          setLoginError(data.error);
          setAuthenticated(false);
        } else {
          setAuthenticated(true);
          const urlParams = new URLSearchParams(window.location.search);
          const target = urlParams.get('target');
          router.push(target || '/dashboard');
        }
      })
      .catch((error) => {
        console.warn(error);
        setLoginError(error);
        setLoginLoading(false);
        setAuthenticated(false);
      });
  };

  /**
   * On login submit, get the values from the form and perform the login fetch
   * if there was extra form validation, this is also were it would take place
   */
  const onLoginFormSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const username = document.getElementById('username') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;
    performLoginFetch(username.value, password.value);
  };

  return (
    <form>
      <label htmlFor="username">
        <span>Username</span>
        <input type="text" id="username" name="username" aria-label="username" required />
      </label>
      <label htmlFor="password">
        <span>Password</span>
        <input type="password" id="password" name="password" aria-label="password" required />
      </label>
      {
        (loginError) && (
          <p id="loginErrorMessage" className="error">
            This does not ring a bell with us.
            please make sure you filled in the right login information.
          </p>
        )
      }
      <button id="loginFormSubmit" type="submit" onClick={(e) => onLoginFormSubmit(e)} disabled={loginLoading}>Submit</button>
    </form>
  );
}
