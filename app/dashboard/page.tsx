import React from 'react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import styles from './page.module.css';

export default function DashboardPage() {
  const guardAuthenticatedRoute = () => {
    const nextCookies = cookies();
    const authentication = nextCookies.get('authentication');

    if (!authentication) {
      redirect('/login');
    }
  };

  guardAuthenticatedRoute();

  return (
    <section className={styles.dashBoardPage}>
      <h1>Logged in Dashboard</h1>
    </section>
  );
}
