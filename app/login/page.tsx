import React from 'react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import styles from './page.module.css';
import LoginForm from './components/LoginForm.tsx';

export default function Login() {
  const nextCookies = cookies();
  const authentication = nextCookies.get('authentication');

  // If we are already logged in, navigate to the dashboard
  if (authentication) {
    redirect('/dashboard');
  }

  return (
    <section className={styles.loginPage}>
      <h1>Welcome! Please log in to continue</h1>
      <LoginForm />
    </section>
  );
}
