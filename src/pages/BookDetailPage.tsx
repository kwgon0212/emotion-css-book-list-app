import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BookType } from "../components/BookType";
import axios from "axios";
import {
  Container,
  Header,
  HeaderContainer,
  LogoText,
} from "../components/Shared";
import Loader from "../components/Loader";
import BookDetail from "../components/BookDetail";

const BookDetailPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState<BookType | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const API_BASE_URL = "https://www.googleapis.com/books";
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const result = await axios.get(`${API_BASE_URL}/v1/volumes/${id}`);
        setBook(result.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, [id]);

  return (
    <>
      <Header>
        <HeaderContainer>
          <Link to={"/"}>
            <LogoText>Book List</LogoText>
          </Link>
        </HeaderContainer>
      </Header>
      <Container>
        <Loader loading={loading}>
          <strong>Book-ID: {id}</strong>의 책 정보를 가져오는 중입니다...
        </Loader>
        {book && <BookDetail book={book} />}
      </Container>
    </>
  );
};

export default BookDetailPage;
