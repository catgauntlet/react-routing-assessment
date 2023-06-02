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
    return NextResponse.json({ error: 'INVALID_CREDENTIALS' }, { status: 400 });
  }

  return NextResponse.json({ token: 'THIS_IS_NOT_A_REAL_TOKEN' });
}

export default POST;
