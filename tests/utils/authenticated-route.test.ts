const cookiesMock = jest.fn();
const getCookieMock = jest.fn();
const redirectMock = jest.fn();

cookiesMock.mockImplementation(() => {
  return {
    get: getCookieMock,
  };
});

jest.mock('next/headers', () => {
  return {
    cookies: cookiesMock
  }
});

jest.mock('next/navigation', () => {
  return {
    redirect: redirectMock,
  };
})

import guardServerSideAuthenticatedRoute from '../../app/utils/authenticated-route';
import { redirect } from 'next/navigation';
import { expect } from '@jest/globals';

describe('Tests for Authenticated Routes', () => {
  afterEach(() => {
    redirectMock.mockClear();
  });

  it('When the route guard is fired, and there is no authentication cookie, expect redirect to be called', () => {
    getCookieMock.mockImplementation(() => {
      return null;
    });

    guardServerSideAuthenticatedRoute('testRoute');
    expect(redirect).toHaveBeenCalledTimes(1);
  });

  it('When the route guard is fired, and there is an authentication cookie, expect redirect not to be called', () => {
    getCookieMock.mockImplementation(() => {
      return 'test';
    });

    guardServerSideAuthenticatedRoute('testRoute');
    expect(redirect).toHaveBeenCalledTimes(0);
  });
});