'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthenticationContext } from '@/app/context/authentication.tsx';
import styles from './Navigation.module.css';

export default function Navigation() {
  const router = useRouter();
  const { authenticated, setAuthenticated, authenticationLoading } = useAuthenticationContext();
  const [logoutLoading, setLogoutLoading] = useState(false);

  /**
   * On logout clicked click, perform a call to the mock api,
   * which will unset the cookie, then push to home.
   */
  const onLogOutClicked = () => {
    setLogoutLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}api/logout`)
      .then(() => {
        setLogoutLoading(false);
        setAuthenticated(false);
        router.push('/', { shallow: true });
      })
      .catch((error) => {
        console.warn(error);
        setAuthenticated(false);
        setLogoutLoading(false);
      });
  };

  /**
   * On login click, navigate to the login page
   */
  const onLoginClicked = () => {
    router.push('/login');
  };

  return (
    <nav className={styles.navigation}>
      <section className={styles.menuItems}>
        <Link id="homeLink" className={styles.item} href="/">Home</Link>
        {(authenticated) && <Link id="dashboardLink" className={styles.item} href="/dashboard">Dashboard</Link>}
      </section>
      <section className={styles.authentication}>
        {(!authenticated && !authenticationLoading) && <button id="loginButton" type="button" onClick={onLoginClicked}>Log in</button>}
        {(authenticated && !authenticationLoading) && <button id="logoutButton" type="button" onClick={onLogOutClicked} disabled={logoutLoading}>Log out</button>}
      </section>
    </nav>
  );
}
