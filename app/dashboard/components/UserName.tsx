'use client';

import React from 'react';
import { useAuthenticationContext } from '@/app/context/authentication.tsx';

export default function UserName() {
  const { authenticated } = useAuthenticationContext();
  return (
    <article>
      {(authenticated) && <h2>Hi Unc Inc!</h2>}
    </article>
  );
}
