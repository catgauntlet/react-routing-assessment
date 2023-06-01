# Unc Inc Assessment - React routing
This is an assessment to implement a React app with several pages that can be accessed by URL paths in your browser. Some of these routes are accessible anonymously, while others can only be accessed after a user is logged in.

## Technical requirements

- React, v17 or higher.
- Use yarn, not npm.
- You can use Typescript, or 'regular' JavaScript, whichever you prefer.
- You can use a project generator like Create React App (or alike).
- Use Git, send us the repository by making a git bundle, a ZIP file, or just share an online link to the repo.
- The code needs to adhere to the standard React and Airbnb standards.
- Use whatever editor or IDE you prefer.

## General requirements

- Start your project by writing down a small plan, and share this with us.
- Keep track of your progress using separate git commits with useful commit messages.
- Choose external packages wisely. Do not write unnecessary code yourself.
- This assessment does not cover a backend to communicate with. Some things can be hard-coded.

## Functional requirements

- As a regular user, I want to be able to access the homepage on either / or /home.
- As a regular user, I want to be able to login using a form on /login with username "uncinc" and password "letmein" in order to become a logged in user.
- As a regular user, I want to get a message if I fill out wrong credentials.
- As a logged in user, I want to be able to access a dashboard on /dashboard.
- As a regular user, I want to access /dashboard from /home.
- As a regular user, I want to be redirected to the login form when trying to access a page that I have no access to.
- As a regular user, I want to be redirected from the login form to the page I originally wanted to go to.
- As a logged in user, I want my session to be remembered, so that I can come back to the dashboard later without having to log in again.
- As a logged in user, I want to be able to log out.

## Things we will look out for

- Proper interpretation of the assignment: how well you read the assignment and specifications.
- State management: how you deal with data being stored and shared throughout the application.
- Proper use of existing packages: which packages you select, and why.
- Code quality: how easy to understand your code is, and how well it conforms to standards.
- A README explaining your thoughts and choices made during the assessment.
- Use of tests (this is not obligated but a big plus!)
- Good use of Git so send us a git repo

## Things we will NOT look out for

- Styling, that is not really required for this assignment.
- Security of the credentials, that is NOT part of this assignment.
