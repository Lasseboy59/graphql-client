import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// componets
import BookList from './components/BookList';
import AddBook from './components/AddBook';

// apollo client setup
const client = new ApolloClient({
  uri: 'https://basic-graphql-server.herokuapp.com/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <div className="App">
            <h1>Book List</h1>
            <BookList />
            <AddBook />
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
