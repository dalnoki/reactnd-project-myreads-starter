import React from 'react'
import Book from './Book'


class Bookshelf extends React.Component {
  render() {
    return (
  
    <div className="bookshelf">
    <h2 className="bookshelf-title">{this.props.name}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
      {this.props.books.map(book => <Book book={book} key={book.id} onChange={this.props.onChange}/>)}
     
      </ol>
    </div>
  </div>
    )
  }
}


export default Bookshelf
