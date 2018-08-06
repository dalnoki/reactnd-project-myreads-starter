import React from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import { BrowserRouter, Route, Link } from 'react-router-dom'

class SearchPage extends React.Component {
  state = {
      books : []
  }

  handleSearch = (e) => {
    BooksAPI.search(e.target.value).then(books => {
      if (books) {
      books = books.map((book) => (this.props.books.find( (b) => b.id === book.id) || book ))
      } else {
        books = []
      }
      this.setState({ books })
  
  })


  }

  render() {
    return (
  <div className="search-books">
    <div className="search-books-bar">
      <Link to="/" className="close-search" >Close</Link>
      <div className="search-books-input-wrapper">
        {/*
          NOTES: The search from BooksAPI is limited to a particular set of search terms.
          You can find these search terms here:
          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
          you don't find a specific author or title. Every search is limited by search terms.
        */}
        <input type="text" placeholder="Search by title or author" onChange={this.handleSearch}/>

      </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid">
      {this.state.books.map(book => <Book book={book} key={book.id} onChange={this.props.onChange}/>)}
      </ol>
    
    </div>
  </div>
    )  
}
      }

export default SearchPage