import { NextResponse } from 'next/server';

/**
 * A simple api call to mock logout and delete the cookie
 */
// eslint-disable-next-line
export async function GET() {
  const response = NextResponse.json({ authenticated: false });
  response.cookies.delete('authentication');
  return response;
}
