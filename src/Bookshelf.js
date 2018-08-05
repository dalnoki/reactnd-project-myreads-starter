import React from 'react'
import Book from './Book'


class Bookshelf extends React.Component {
  render() {
    return (
  
    <div className="bookshelf">
    <h2 className="bookshelf-title">{this.props.bookshelfName}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
      <Book />
     
      </ol>
    </div>
  </div>
    )
  }
}


export default Bookshelf
