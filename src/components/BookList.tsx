import React from "react";
import { Link } from "react-router-dom";
import formatAuthors from "../helpers/formatAuthors";
import { BookListType, BookType } from "./BookType";

const Book = ({ book }: { book: BookType }) => {
  return (
    <li>
      <div>
        <img
          src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
          alt={`${book.volumeInfo.title} book`}
        />
      </div>
      <div>
        <Link to={`/book/${book.id}`}>
          <h3>{book.volumeInfo.title}</h3>
        </Link>
        <p>{formatAuthors(book.volumeInfo.authors)}</p>
        <p>{book.volumeInfo.publishedDate}</p>
      </div>
    </li>
  );
};

const BookList = ({ books }: BookListType) => {
  if (!books.totalItems) {
    return <div>책 이름을 검색해주세요</div>;
  } else if (books.items.length === 0) {
    return <div>검색 결과가 없습니다.</div>;
  } else {
    return (
      <ul>
        {books.items.map((book) => {
          return <Book book={book} key={book.id} />;
        })}
      </ul>
    );
  }
};

export default BookList;
