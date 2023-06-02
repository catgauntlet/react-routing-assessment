import React from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <a href="/">Home</a>
      <a href="/dashboard">Dashboard</a>
      <a href="/login">Login</a>
    </nav>
  );
}
