import styled from "@emotion/styled";
import BookSearchForm from "../components/BookSearchForm";
import { useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import BookList from "../components/BookList";
import { BookListType } from "../components/BookType";
import {
  Header,
  HeaderContainer,
  LogoText,
  Container,
} from "../components/Shared";

const HeaderSearchForm = styled.div`
  margin-left: auto;
`;

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState<BookListType["books"] | null>(null);
  const [loading, setLoading] = useState(false);

  const API_BASE_URL = "https://www.googleapis.com/books";

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const result = await axios.get(
        `${API_BASE_URL}/v1/volumes?q=${searchTerm}`
      );
      setBooks(result.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchBooks();
  };

  return (
    <>
      <Header>
        <HeaderContainer>
          <LogoText>Book List</LogoText>
          <HeaderSearchForm>
            <BookSearchForm
              searchTerm={searchTerm}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          </HeaderSearchForm>
        </HeaderContainer>
      </Header>
      <Container>
        <Loader loading={loading}>
          "<strong>{searchTerm}</strong>" 책을 찾는 중입니다....
        </Loader>
        {books && <BookList books={books} />}
      </Container>
    </>
  );
};

export default SearchPage;
