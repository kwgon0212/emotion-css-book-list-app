import styled from "@emotion/styled";
import React from "react";

const Input = styled.input`
  outline: 0;
  padding: 0.6rem 1rem;
  border: 1px solid rgba(34, 36, 38, 0.5);
  border-radius: 3px;
  max-width: 280px;
  &:focus,
  &:active {
    border-color: #85b7d9;
  }
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const Button = styled.button`
  background-color: #fcfcfd;
  color: #36395a;
  border: 1px solid rgba(34, 36, 38, 0.5);
  padding: 0.5rem 1.5rem;
  margin-left: 15px;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Form = styled.form``;

interface BookSearchFormProps {
  searchTerm: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const BookSearchForm = ({
  searchTerm,
  onChange,
  onSubmit,
}: BookSearchFormProps) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="search"
        placeholder="책 명을 검색하세요"
        onChange={onChange}
        value={searchTerm}
      />
      <Button type="submit">검색</Button>
    </Form>
  );
};

export default BookSearchForm;
