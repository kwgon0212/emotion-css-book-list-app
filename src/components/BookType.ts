export interface BookListType {
  books: {
    items: BookType[];
    kind: string;
    totalItems: number;
  };
}

export interface BookType {
  id: string;
  volumeInfo: {
    authors: string[];
    title: string;
    publishedDate: string;
    description: string;
    publisher: string;
  };
}
