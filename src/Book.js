import React, { Component } from 'react';
import { bookshelves } from './Bookshelves'





class Book extends React.Component {

handleChange = (e) => {
  const newBook = {...this.props.book, shelf :  e.target.value }
  this.props.onChange(newBook)
    
}
    
render () {
return(

<div className="book">
<div className="book-top">
  <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}></div>
  <div className="book-shelf-changer">
  <select onChange={this.handleChange} value={this.props.book.shelf}>
  <option value="moveToShelf">Move to Shelf</option>
  {bookshelves.map( shelf => (
                    <option key={shelf.id} value={shelf.id}>{shelf.name}</option>
                  ))}
  </select>


  </div>
</div>
<div className="book-title">{this.props.title}</div>
<div className="book-authors">{this.props.authors}</div>
</div>

)}


}

export default Book