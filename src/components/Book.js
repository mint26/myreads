import React, { Component } from "react";
import propTypes from "prop-types";

class Book extends Component {
  static propTypes = {
    title: propTypes.string.isRequired,
    authors: propTypes.array,
    bookURL: propTypes.string,
    shelf: propTypes.string,
    onShelfChanged: propTypes.func,
    id: propTypes.string.isRequired
  };

  state = {
    shelf: this.props.shelf
  };

  onShelfChange = e => {
    let newValue = e.target.value;
    this.props.onShelfChanged(this.props.id, this.state.shelf, newValue);
    this.setState({ shelf: newValue });
  };

  render() {
    let coverImage = this.props.bookURL ? null : (
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
                backgroundImage: `url(${this.props.bookURL})`
              }}
            >
              {coverImage}
            </div>
            <div className="book-shelf-changer">
              <select
                onChange={this.onShelfChange}
                value={this.state.shelf ? this.state.shelf : "none"}
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
          <div className="book-title">{this.props.title}</div>
          <div className="book-authors">
            {this.props.authors ? this.props.authors.join(",") : ""}
          </div>
        </div>
      </li>
    );
  }
}

export default Book;
