import React from 'react';
import guardAuthenticatedRoute from '@/app/utils/authenticated-route.ts';
import styles from './page.module.css';

export default function DashboardPage() {
  guardAuthenticatedRoute();

  return (
    <section className={styles.dashBoardPage}>
      <h1>Logged in Dashboard</h1>
    </section>
  );
}
