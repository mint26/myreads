import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import Row from "./components/Row";
import Book from "./components/Book";
import * as BooksAPI from "./BooksAPI";
import { Route } from "react-router-dom";
import Search from "./components/Search";
import Bookshelf from "./components/Bookshelf";

const SHELF_TYPES = ["currentlyReading", "wantToRead", "read"];
const getShelfTypeName = type => {
  switch (type) {
    case "currentlyReading":
      return "Currently Reading";
    case "wantToRead":
      return "Want To Read";
    case "read":
      return "Read";
    default:
      return "";
  }
};
class BooksApp extends React.Component {
  state = {
    bookListing: {},
    books: {}
  };

  componentDidMount() {
    this.getBooks().then(response => {
      let { bookListing, books } = response;
      this.setState({ bookListing: bookListing, books: books });
    });
  }

  getBooks = () => {
    return BooksAPI.getAll().then(books => {
      let tmpBooks = {};
      books.forEach(book => {
        tmpBooks[book.id] = book;
      });
      let bookListing = this.sortBookListing(books);
      return {
        bookListing: bookListing,
        books: tmpBooks
      };
    });
  };

  sortBookListing = books => {
    let tmpBookListing = {};
    SHELF_TYPES.forEach(type => {
      let bookGrouping = books
        .filter(book => {
          return book.shelf === type;
        })
        .map(book => book.id);
      tmpBookListing[type] = bookGrouping;
    });
    return tmpBookListing;
  };

  onShelfChanged = (id, oldValue, newValue) => {
    console.log("[ON SHELF CHANGED]", this.state);
    let book = this.state.books[id];
    if (book) {
      return BooksAPI.update(book, newValue).then(bookListing => {
        let tmpBooks = JSON.parse(JSON.stringify(this.state.books)) || {};
        tmpBooks[id].shelf = newValue;
        this.setState({ bookListing: bookListing, books: tmpBooks });
      });
    } else {
      return BooksAPI.get(id).then(book => {
        return BooksAPI.update(book, newValue).then(bookListing => {
          let tmpBooks = JSON.parse(JSON.stringify(this.state.books)) || {};
          tmpBooks[id] = book;
          tmpBooks[id].shelf = newValue;
          this.setState({ bookListing: bookListing, books: tmpBooks });
        });
      });
    }
  };

  render() {
    let types = Object.keys(this.state.bookListing);
    let shelves = [];
    types.forEach(type => {
      let booksList = this.state.bookListing[type] || [];
      let books = this.state.books || {};
      let booksRender = booksList.map(id => {
        return (
          <Book
            key={`book-${books[id].title}`}
            id={id}
            title={books[id].title}
            authors={books[id].authors}
            bookURL={books[id].imageLinks.thumbnail}
            shelf={books[id].shelf}
            onShelfChanged={this.onShelfChanged}
          />
        );
      });
      shelves.push(
        <Row title={getShelfTypeName(type)} key={`shelf-${type}`}>
          {booksRender}
        </Row>
      );
    });

    return (
      <div className="app">
        <Route
          path="/search"
          render={() => {
            return (
              <Search
                onShelfChanged={this.onShelfChanged}
                books={this.state.books}
              />
            );
          }}
        />
        <Route
          path="/"
          exact
          render={({ history }) => {
            return (
              <Bookshelf addHandler={() => history.push("/search")}>
                {shelves}
              </Bookshelf>
            );
          }}
        />
      </div>
    );
  }
}

export default BooksApp;
