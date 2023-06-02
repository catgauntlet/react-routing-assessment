import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default (targetRoute: String) => {
  const nextCookies = cookies();
  const authentication = nextCookies.get('authentication');

  if (!authentication) {
    redirect(`/login?target=${targetRoute}`);
  }
};
