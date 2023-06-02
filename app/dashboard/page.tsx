import React from 'react';
import guardAuthenticatedRoute from '@/app/utils/authenticated-route.ts';
import styles from './page.module.css';
import UserName from './components/UserName.tsx';

export default function DashboardPage() {
  guardAuthenticatedRoute('dashboard');

  return (
    <section className={styles.dashBoardPage}>
      <h1>Logged in Dashboard</h1>
      <UserName />
    </section>
  );
}
