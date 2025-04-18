import React from "react";
import { BookType } from "./BookType";
import formatAuthors from "../helpers/formatAuthors";

interface BookDetailProps {
  book: BookType;
}

const BookDetail = ({ book }: BookDetailProps) => {
  const IMG_BASE_URL = "http://books.google.com/books";
  return (
    <section>
      <div>
        <img
          src={`${IMG_BASE_URL}/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
          alt={book.volumeInfo.title}
        />
      </div>
      <div>
        <h3>
          <strong>책 이름:</strong>
          {book.volumeInfo.title}
        </h3>
        <p>
          <strong>저자:</strong>
          {formatAuthors(book.volumeInfo.authors)}
        </p>
        <p>
          <strong>출판일:</strong>
          {book.volumeInfo.publishedDate}
        </p>
        <p>
          <strong>출판사:</strong>
          {book.volumeInfo.publisher}
        </p>
        <div>
          <strong>설명:</strong>
          <div
            dangerouslySetInnerHTML={{ __html: book.volumeInfo.description }}
          />
        </div>
      </div>
    </section>
  );
};

export default BookDetail;
