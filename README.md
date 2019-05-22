

### Starting both servers at once

```bash
yarn start
```

### Start each server individually

**Run the functions dev server**

From inside the project folder, run:

```
yarn start:lambda
```

This will open a local server running at `http://localhost:9000`

 Access the functions directly at `http://localhost:9000/graphql`

**Run the app dev server**

While the functions server is still running, open a new terminal tab and run:

```
yarn start:app
```

This will start the normal create-react-app dev server and open your app at `http://localhost:3000`.


