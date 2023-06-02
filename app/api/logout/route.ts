import { NextResponse } from 'next/server';

/**
 * A simple api call to mock logout and delete the cookie
 */
export async function GET() {
  const response = NextResponse.json({ authenticated: false });
  response.cookies.delete('authentication');
  return response;
}

export default GET;
