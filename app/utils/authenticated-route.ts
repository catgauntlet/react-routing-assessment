import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

/**
 * A helper from the server side, to check if the cookie is being set from the client,
 * to mock-check if we are logged in
 */
export default (targetRoute: String) => {
  const nextCookies = cookies();
  const authentication = nextCookies.get('authentication');

  if (!authentication) {
    redirect(`/login?target=${targetRoute}`);
  }
};
