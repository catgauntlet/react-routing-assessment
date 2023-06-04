## Running the project

For this project I assume the developer has nvm (node version manager) installed on their machine, if not, the installation instructions can be found [here](https://github.com/nvm-sh/nvm#installing-and-updating)

To get started you first have to make sure you have the proper version of node installed (this uses installs and uses the LTS version of node defined in the nvmrc):

```bash
nvm install
nvm use
```

The following steps assume you already have npm installed, this is necessary to install yarn, if that's not the case, please follow the instructions [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

Then you install yarn, set it to the version recommended by yarn and install the required dependencies:

```bash
npm install --global yarn
yarn set version berry
yarn install
```

Then you can run, the development server on port 3000 with:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Logging in

For this assessment you can log in with the following test credentials: `uncinc` `letmein` 

## Building and hosting for production

You can run and then host a local production build with:

```bash
yarn run build
yarn run start
```

This builds the application with tree shaking, minimizing all the other optimalisations expected in a production build.

## Tests

You can run the Jest unit tests by running:

```bash
yarn run test
```

You can run the cypress e2e tests headlessly by first making sure that the dev environment is running and then running:

```bash
yarn run test:e2e
```

You can also run the Cypress UI to see the tests visualized with:

```bash
yarn run cypress
```

Cypress e2e tests can be found under `cypress` and Jest Unit Tests can be found under `tests`.

Both the unit tests and the e2e test are ran pre-push, but you need to have the dev enviroment running for the e2e tests to pass, since it needs to access localhost. I kept that for now, in a real scenario those would fire up the application in the background as a deamon so it's not a blocker.

## Decision Log

In this section you can find some explanation on the decisions during the process.

### Rendering

The application is set up in a way that supports Server Side Rendering for large static parts, combined with locally rendered client side that support user input. In this case that is the dynamic navigation bar and login form. This way there is as little Javascript as necessary performed on the client side.

### Next and Typescript

I created the assessment using Next.js as a React framework, which takes away a lot of the work needed, it provides SSR routing, is lightweight, scalable, has important quality of life dependencies like PostCSS built in and can handle things like authenticated routes easily. Next to this I will only be adding minimal dependencies as needed, for instance for testing.

To set up the project I started with: [Create Next App](https://nextjs.org/docs/pages/api-reference/create-next-app)

The application is be written in Typescript, since it makes debugging painless and it couples well with the refactoring-approach of the TDD way of working. 

### Mock API

I added mock API routes, which run on the server side and are accessible through `/api` they provide authentication states and login/logout calls based on a cookie saved on the client side and automatically sent with every request through the browser.

### Linting

For linting I use ESlint through Nextjs, which uses the default .eslintrc, next to that I added Husky as a pre-commit hook to enforce the linting.

Next to the default airbnb + react + next recommended linting sets, I modified one rule in the eslintrc that allows JSX in TSX files, by default you cannot write JSX files without the JSX file extension in the base react linting set. The consensus online is that the best way to deal with this is to also allow this in .tsx files.

### Testing framework

Initially I chose Jest as a testing library, because it assertions and mocking tools like Sinon built in, it's popular nowadays, which means that it is easy to pick up for other developers as well and there is loads of guides/tutorials available.

During development however, I figured out that the time needed to implement Jest with a Server Side Rendered application with session cookies, meant a lot of time lost on mocking all side dependencies, so I decided to go for e2e tests with cypress (luckily also recommended by Next.js) to test the general flow of the application.

I reintroduced the Jest tests later just for the utility method for the route guard.

### Git hooks

I opted to use Husky for pre-commit linting and pre-push test running, since it is still the most used git hooks library around. I doubted on using Lefthook, which is supposed to be faster, but the support and usage of Husky is at this point still much better online.

### State management

Since most of the application is rendered on the server side, and React state management takes place on the client side, state management is limited. I use useState in the client side components like the login form and navigation bar to keep the loading state of the form and request and to store errors. Between the client side components,I use the Context API to share the authentication state to different menu items if you're logged in and to display the username component.

### Design setup

I added some initial variables in the globals.css which could be extended using a design system, library like tailwind/bulma or could for instance be replaced by figma design tokens.

## Total time spent

I like to be transparent in the amount of time spent on this, which was 9 hours. Roughly half of this was spent attempting to configure Jest properly to work with the SSR, mocking dependencies and getting it to work with the components, before switching to Cypress and converting all my tests except the utility tests (which are still in Jest) to functional e2e tests.

## Tech used with links

- [React 18.2.x](https://react.dev/)
- [Yarn](https://yarnpkg.com/)
- [Nextjs 13.4.x](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [PostCSS](https://postcss.org/)
- [ESlint with React/Airbnb standards](https://eslint.org/)
- [Jest](https://jestjs.io/)
- [Cypress](https://www.cypress.io/)
- [Husky](https://typicode.github.io/husky)
