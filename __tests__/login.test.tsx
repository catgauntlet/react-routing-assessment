
import { render, screen, act } from '@testing-library/react';
import LoginPage from '../app/login/page';

const mockUseRouter = jest.fn();
const mockPush = jest.fn();

jest.mock('next/navigation', () => ({
    useRouter: () => mockUseRouter,
}));

const mockReturnValue = {
    query: {},
    // return mock for push method
    push: () => mockPush,
    // ... add the props or methods you need
};

describe("Login screen - Happy flows", () => {
    test('When I fill in the correct credentials, I am redirected to the authenticated page I was trying to reach and my login token is saved', async () => {
        // mockUseRouter.mockReturnValue(mockReturnValue);
        // global.fetch = jest.fn(() =>
        //   Promise.resolve()
        // );

        // render(<LoginPage />)

        // const usernameField = screen.getByLabelText('username');

        // const passwordField = screen.getByLabelText('password');

        // const submitButton = screen.getByRole('button');

        // usernameField.value = 'uncinc';
        // passwordField.value = 'letmein';
        // await act(async () => submitButton.click());
        // expect(mockPush).toBeCalled();
    });
});

describe("Login screen - Unhappy flows", () => {
    test.skip('When I fill in incorrect credentials, the login form gives me feedback', () => {

    });
});