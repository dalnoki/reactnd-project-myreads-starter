import React from 'react';
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
  <div className="book-cover"></div>
  <img src={this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : "none" } style={{ width: 128, height: 192 }} alt={this.props.book.imageLinks ? this.props.book.title : "placeholder"} />
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