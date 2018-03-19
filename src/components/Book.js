import React, { Component } from "react";
import propTypes from "prop-types";

class Book extends Component {
  static propTypes = {
    book: propTypes.object,
    onShelfChange: propTypes.func
  };

  onShelfChange = (e, id, shelf) => {
    let newValue = e.target.value;
    this.props.onShelfChanged(id, shelf, newValue);
  };

  render() {
    let { title, imageLinks, authors, shelf, id } = this.props.book;
    let coverImage =
      imageLinks && imageLinks.thumbnail ? null : (
        <div className="book-cover-placeholder">No cover available</div>
      );
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${imageLinks.thumbnail})`
              }}
            >
              {coverImage}
            </div>
            <div className="book-shelf-changer">
              <select
                onChange={e => {
                  this.onShelfChange(e, id, shelf);
                }}
                value={shelf ? shelf : "none"}
              >
                <option value="label" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{authors ? authors.join(",") : ""}</div>
        </div>
      </li>
    );
  }
}

export default Book;
