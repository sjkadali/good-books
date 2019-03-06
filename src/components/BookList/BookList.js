import React, { Component } from 'react'
import './BookList.scss';
import Book from '../Book/Book';
import {booksInfo} from '../../booksInfo';

export default class BookList extends Component {
  
  state = {
    books: booksInfo
  };
    render() {
        const { books } = this.state;

        return (
        <section className="booklist">
            {books.map(book => {
                return <Book key={book.id}  book={book}/>
            })}
            
        </section>
        )
  }
}
