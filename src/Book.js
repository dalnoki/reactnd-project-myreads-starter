import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'





class Book extends React.Component {

    state =  {
        books: [],
        bookState : '' //current, want, read, none
    }


    setBookState(event) {
      this.setState({bookState: event.target.value});
      console.log(this.state.bookState)
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => this.setState({books}))
      }
      setBookState(event){
       this.setState({bookState: event.target.value});
    }


    
render () {
return(

<div className="book">
<div className="book-top">
  <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")' }}></div>
  <div className="book-shelf-changer">
  <select onClick={this.setBookState} value={this.state.bookState}>
    <option value="move" disabled>Move to...</option>
    <option value="currentlyReading">Currently Reading</option>
    <option value="wantToRead">Want to Read</option>
    <option value="read">Read</option>
    <option value="none">None</option>
  </select>


  </div>
</div>
<div className="book-title">{this.props.title}</div>
<div className="book-authors">{this.props.authors}</div>
</div>

)}


}

export default Book