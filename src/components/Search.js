import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "../BooksAPI";

class Search extends Component {
  updateQuery = e => {
    let val = e.target.value;
    if (val) {
      BooksAPI.search(val).then(data => {
        this.setState({
          query: val,
          books: data.error
            ? []
            : data.filter(book => !this.props.books[book.id]),
          your_books: data.error
            ? []
            : data.filter(book => this.props.books[book.id])
        });
      });
    } else {
      this.setState({
        query: "",
        books: [],
        your_books: []
      });
    }
  };

  state = {
    query: "",
    books: [],
    your_books: []
  };

  render() {
    let searchResult = null;
    let availableBooks =
      this.state.books.length > 0
        ? this.state.books.filter(book => !this.props.books[book.id])
        : [];

    if (availableBooks.length > 0) {
      searchResult = availableBooks.map((book, index) => {
        return (
          <Book
            key={`book-${index}`}
            book={book}
            onShelfChanged={this.props.onShelfChanged}
          />
        );
      });
    }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*                 
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.

                */}

            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.value}
              onChange={this.updateQuery}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">{searchResult}</ol>
        </div>
      </div>
    );
  }
}

export default Search;
