import React, { Component } from "react";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import CreateRecipe from "./CreateRecipe";
import RandomRecipe from "./RandomRecipe";

const httpLink = createHttpLink({
  uri: "/.netlify/functions/graphql"
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <RandomRecipe />
        <CreateRecipe />
      </ApolloProvider>
    );
  }
}

export default App;
