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

Then you can run, the development server on port 3000 with:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Decision Log

In this section you can find some explanation on the decisions during the process.

### Linting

For linting I use ESlint through Nextjs, which uses the default .eslintrc, next to that I added Husky as a pre-commit hook to enforce the linting.

Next to the default airbnb + react + next recommended linting sets, I modified one rule in the eslintrc that allows JSX in TSX files, by default you cannot write JSX files without the JSX file extension in the base react linting set. The consensus online is that the best way to deal with this is to also allow this in .tsx files.

### Testing framework

I chose Jest, because it has assertions and mocking tools like Sinon built in, it's popular nowadays, which means that it is easy to pick up for other developers as well and there is loads of guides/tutorials available.