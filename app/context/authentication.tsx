'use client';

import React, {
  createContext, useMemo, useContext, Dispatch, SetStateAction, useState,
} from 'react';

interface ContextProps {
  authenticated: boolean,
  setAuthenticated: Dispatch<SetStateAction<boolean>>,
}

const AuthenticationContext = createContext<ContextProps>({
  authenticated: false,
  setAuthenticated: (): boolean => false,
});

/**
 * A context provider for sharing the authentication state
 * between client side components that need it
 */
export function AuthenticationContextProvider({ children }: any) {
  const [authenticated, setAuthenticated] = useState(false);
  const memoContext = useMemo(() => (
    { authenticated, setAuthenticated }), [authenticated, setAuthenticated]);

  return (
    <AuthenticationContext.Provider value={memoContext}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export const useAuthenticationContext = () => useContext(AuthenticationContext);
