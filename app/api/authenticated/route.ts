import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

/**
 * A simple api call to check if there is a cookie, if you are logged in
 */
// eslint-disable-next-line
export async function GET() {
  const cookieStore = cookies();
  const token = cookieStore.get('authentication');

  if (token) {
    return NextResponse.json({ authenticated: true });
  }

  return NextResponse.json({ authenticated: false }, { status: 401 });
}
