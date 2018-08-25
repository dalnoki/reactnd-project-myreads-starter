import React from "react";
import { bookshelves } from "./Bookshelves";

class Book extends React.Component {
  handleChange = e => {
    const newBook = { ...this.props.book, shelf: e.target.value };
    this.props.onChange(newBook);
  };

  render() {
    return this.props.book.imageLinks ? (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" />
          <img
            src={this.props.book.imageLinks.thumbnail}
            style={{ width: 128, height: 192 }}
            alt={
              this.props.book.imageLinks ? this.props.book.title : "placeholder"
            }
          />
          <div className="book-shelf-changer">
            <select
              onChange={this.handleChange}
              value={this.props.book.shelf ? this.props.book.shelf : "none"}
            >
              <option value="moveToShelf" disabled>
                Move to Shelf...
              </option>
              {bookshelves.map(shelf => (
                <option key={shelf.id} value={shelf.id}>
                  {shelf.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    ) : (
      " "
    );
  }
}

export default Book;