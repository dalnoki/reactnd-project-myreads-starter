import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import Bookshelf from "./Bookshelf";
import Header from "./Header";
import * as BooksAPI from "./BooksAPI";
import { bookshelves } from "./Bookshelves";
import SearchPage from "./searchPage";
import { BrowserRouter, Route, Link } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    loading: true,
    books: [],
    showSearchPage: false
  };
  onChange = book => {
    const books = [...this.state.books];
    const index = books.findIndex(b => b.id === book.id);
    if (index !== -1) {
      books[index] = book;
    } else {
      books.push(book);
    }
    this.setState({ books });
    BooksAPI.save(book);
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books, loading: false }));
  }

  render() {
    return this.state.loading ? (
      <h3>Loading....</h3>
    ) : (
      <BrowserRouter>
        <div className="app">
          <Route
            path="/search"
            render={() => (
              <SearchPage onChange={this.onChange} books={this.state.books} />
            )}
          />
          <Route
            path="/"
            render={() => (
              <div>
                <Header />
                {bookshelves.map(shelf => (
                  <Bookshelf
                    name={shelf.name}
                    key={shelf.id}
                    books={this.state.books.filter(
                      book => book.shelf === shelf.id
                    )}
                    onChange={this.onChange}
                  />
                ))}

                <div className="open-search">
                  <Link to="/search">Add book</Link>
                </div>
              </div>
            )}
            exact
          />
        </div>
      </BrowserRouter>
    );
  }
}
export default BooksApp;