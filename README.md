## Running the project

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

Create a `.env.local` file (gitignored so it can be configurable and contain local tokens etc.) containing the following:

```
NEXT_PUBLIC_API_BASE_URL='http://localhost:3000/'

Then you can run, the development server on port 3000 with:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tests

You can run the tests by running:

```bash
yarn run test
```

## Decision Log

In this section you can find some explanation on the decisions during the process.

### Rendering

The application is set up in a way that supports Server Side Rendering for large static parts, combined with locally rendered client side that support user input. In this case that is the dynamic navigation bar and login form. This way there is as little Javascript as necessary performed on the client side.

### Linting

For linting I use ESlint through Nextjs, which uses the default .eslintrc, next to that I added Husky as a pre-commit hook to enforce the linting.

Next to the default airbnb + react + next recommended linting sets, I modified one rule in the eslintrc that allows JSX in TSX files, by default you cannot write JSX files without the JSX file extension in the base react linting set. The consensus online is that the best way to deal with this is to also allow this in .tsx files.

### Testing framework

I chose Jest, because it has assertions and mocking tools like Sinon built in, it's popular nowadays, which means that it is easy to pick up for other developers as well and there is loads of guides/tutorials available.

Next to Jest I added testing-library/react which is the recommended testing library by React itself and Next.js. It allows you to render the DOM of React components, and gives you the ability to query their contents just as a user of the browser would, enabling straightforward and readable testing.

### Git hooks

I opted to use Husky for pre-commit linting and pre-push test running, since it is still the most used git hooks library around. I doubted on using Lefthook, which is supposed to be faster, but the support and usage of Husky is at this point still much better online.

### State management

Since most of the application is rendered on the server side, and React state management takes place on the client side, there is little state management. I use useState in the client side components like the login form and navigation bar to keep the loading state of the form and request and to store errors. I dabbled in using the context API for the state of authentication, but because we catch the authentication guard on the server side, protecting it from the client, there was no need for it.

### Total time spent

I like to be transparent in the amount of time spent on this, which was 4,5 hours. I lost some time configuring Jest to play nice, so I could write the tests.

## Links

