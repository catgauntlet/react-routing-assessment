import React from 'react';

import styles from './page.module.css';
import LoginForm from './components/LoginForm.tsx';

export default function Login() {
  return (
    <section className={styles.loginPage}>
      <h1>Welcome! Please log in to continue</h1>
      <LoginForm />
    </section>
  );
}
