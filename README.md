> ⚠️You may not need `netlify-lambda`. [Netlify Dev](https://github.com/netlify/netlify-dev-plugin) works with `create-react-app` out of the box, give it a try! Only use `netlify-lambda` if you need a build step for your functions. [See its README for details](https://github.com/netlify/netlify-lambda/blob/master/README.md#netlify-lambda).

This project is based on latest versions of [Create React App v3](https://github.com/facebookincubator/create-react-app) and [netlify-lambda v1](https://github.com/netlify/netlify-lambda).

The main addition to base Create-React-App is a new folder: `src/lambda`. Each JavaScript file in there will be built for Lambda function deployment in `/built-lambda`, specified in [`netlify.toml`](https://www.netlify.com/docs/netlify-toml-reference/).

As an example, we've included a small `src/lambda/hello.js` function, which will be deployed to `/.netlify/functions/hello`. We've also included an async lambda example using async/await syntax in `async-chuck-norris.js`.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify/create-react-app-lambda)

## Video

Learn how to set this up yourself (and why everything is the way it is) from scratch in a video: https://www.youtube.com/watch?v=3ldSM98nCHI

## Babel/webpack compilation

All functions are compiled with webpack using the Babel Loader, so you can use modern JavaScript, import npm modules, etc., without any extra setup.

## Local Development

Before developing, clone the repository and run `yarn` from the root of the repo to install all dependencies.

### Option 1: Starting both servers at once

Most people should be able to get up and running just by running:

```bash
yarn start
```

This uses [npm-run-all](https://github.com/mysticatea/npm-run-all#readme) to run the functions dev server and app dev server concurrently.

### Option 2: Start each server individually

**Run the functions dev server**

From inside the project folder, run:

```
yarn start:lambda
```

This will open a local server running at `http://localhost:9000` serving your Lambda functions, updating as you make changes in the `src/lambda` folder.

You can then access your functions directly at `http://localhost:9000/{function_name}`, but to access them with the app, you'll need to start the app dev server. Under the hood, this uses `react-scripts`' [advanced proxy feature](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#configuring-the-proxy-manually) with the `setupProxy.js` file.

**Run the app dev server**

While the functions server is still running, open a new terminal tab and run:

```
yarn start:app
```

This will start the normal create-react-app dev server and open your app at `http://localhost:3000`.

Local in-app requests to the relative path `/.netlify/functions/*` will automatically be proxied to the local functions dev server.

