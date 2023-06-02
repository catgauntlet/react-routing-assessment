'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Navigation.module.css';

export default function Navigation() {
  const router = useRouter();
  const [logoutLoading, setLogoutLoading] = useState(false);

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

  return (
    <nav className={styles.navigation}>
      <a href="/">Home</a>
      <a href="/dashboard">Dashboard</a>
      <a href="/login">Login</a>
      <button type="button" onClick={onLogOutClicked} disabled={logoutLoading}>Log out</button>
    </nav>
  );
}
