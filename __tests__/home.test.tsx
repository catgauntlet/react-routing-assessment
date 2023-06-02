
import { render, screen } from '@testing-library/react';
import HomePage from '../app/home/page';

describe("Home screen - Happy flows", () => {
    test('When I load the homepage component when I am not logged in, I expect to see the welcome text, I also expect the dashboard link to not be there', () => {
        render(<HomePage />)

        const heading = screen.getByRole('heading', {
          name: /Home/i,
        });
    
        expect(heading).toBeInTheDocument();
    });

    test('When I load the homepage component when I am logged in, I expect the dashboard menu link to be clickable and to redirect me', () => {
        // Object.defineProperty(document, 'cookie', {
        //   writable: true,
        //   value: 'authentication=NOT_A_REAL_TOKEN',
        // });

        // console.log(document.cookie);
    });

    test.skip('When I load the homepage when I am logged in, I expect the logout button to be available and take me to the logged out state of the home page, I expect the token to be gone', () => {
    
    });
});