import React from 'react';
import styles from './page.module.css';
import guardAuthenticatedRoute from '@/app/utils/authenticated-route';

export default function DashboardPage() {
  guardAuthenticatedRoute();

  return (
    <section className={styles.dashBoardPage}>
      <h1>Logged in Dashboard</h1>
    </section>
  );
}
