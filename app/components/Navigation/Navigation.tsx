'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Navigation.module.css';

export default function Navigation() {
  const router = useRouter();
  const [logoutLoading, setLogoutLoading] = useState(false);
  const [authenticationLoading, setAuthenticationLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onLogOutClicked = () => {
    setLogoutLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}api/logout`)
      .then(() => {
        setLogoutLoading(false);
        router.push('/');
      })
      .catch((error) => {
        console.warn(error);
        setLogoutLoading(false);
      });
  };

  const onLoginClicked = () => {
    router.push('/login');
  };

  const checkIfAuthenticated = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}api/authenticated`)
      .then((response) => response.json())
      .then((data) => {
        setAuthenticationLoading(false);
        setIsAuthenticated(data.authenticated);
      })
      .catch((error) => {
        console.warn(error);
        setAuthenticationLoading(false);
        setIsAuthenticated(false);
      });
  };

  checkIfAuthenticated();

  return (
    <nav className={styles.navigation}>
      <section className={styles.menuItems}>
        <a href="/">Home</a>
        {(isAuthenticated && !authenticationLoading) && <a href="/dashboard">Dashboard</a>}
      </section>
      <section className={styles.authentication}>
        {(!isAuthenticated && !authenticationLoading) && <button type="button" onClick={onLoginClicked}>Log in</button>}
        {(isAuthenticated && !authenticationLoading) && <button type="button" onClick={onLogOutClicked} disabled={logoutLoading}>Log out</button>}
      </section>
    </nav>
  );
}
