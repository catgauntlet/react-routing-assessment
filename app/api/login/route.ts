import { NextResponse } from 'next/server';

interface LoginRequestBody {
  username: String;
  password: String;
}

/**
 * A simple api call to mock login and return a mock token
 */
export async function POST(request: Request) {
  const requestBody = await request.json() as LoginRequestBody;

  if (requestBody.username !== 'uncinc' || requestBody.password !== 'letmein') {
    const response = NextResponse.json({ authenticated: false, error: 'INVALID_CREDENTIALS' }, { status: 400 });
    response.cookies.delete('authentication');
    return response;
  }

  const response = NextResponse.json({ authenticated: true });

  response.cookies.set({
    name: 'authentication',
    value: 'THIS_IS_NOT_A_REAL_TOKEN',
    httpOnly: true,
  });

  return response;
}

export default POST;
