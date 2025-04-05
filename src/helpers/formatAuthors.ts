const formatAuthors = (authors: string[]) => {
  if (!authors) {
    return "";
  }
  return authors.join(", ");
};

export default formatAuthors;
