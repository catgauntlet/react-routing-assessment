'use client';

import React, {
  createContext, useMemo, useEffect, useContext, Dispatch, SetStateAction, useState,
} from 'react';

interface ContextProps {
  authenticated: boolean,
  setAuthenticated: Dispatch<SetStateAction<boolean>>,
  authenticationLoading: boolean,
  setAuthenticationLoading: Dispatch<SetStateAction<boolean>>,
}

const AuthenticationContext = createContext<ContextProps>({
  authenticated: false,
  authenticationLoading: false,
  setAuthenticated: (): boolean => false,
  setAuthenticationLoading: (): boolean => false,
});

/**
 * A context provider for sharing the authentication state
 * between client side components that need it
 */
export function AuthenticationContextProvider({ children }: any) {
  const [authenticated, setAuthenticated] = useState(false);
  const [authenticationLoading, setAuthenticationLoading] = useState(true);

  /**
   * Check if the user is authenticated by performing an API call to a mock api,
   * then update the authenticated state in the context api
   */
  const checkIfAuthenticated = () => {
    setAuthenticationLoading(true);
    fetch('api/authenticated')
      .then((response) => response.json())
      .then((data) => {
        setAuthenticationLoading(false);
        setAuthenticated(data.authenticated);
      })
      .catch((error) => {
        console.warn(error);
        setAuthenticationLoading(false);
        setAuthenticated(false);
      });
  };

  // Only check if authenticated on first load
  useEffect(() => {
    checkIfAuthenticated();
  }, []);

  const memoContext = useMemo(
    () => (
      {
        authenticated, setAuthenticated, authenticationLoading, setAuthenticationLoading,
      }
    ),
    [authenticated, setAuthenticated, authenticationLoading, setAuthenticationLoading],
  );

  return (
    <AuthenticationContext.Provider value={memoContext}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export const useAuthenticationContext = () => useContext(AuthenticationContext);
