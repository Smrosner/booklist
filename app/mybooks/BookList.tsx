import React from "react";
import books from "./books";
import Book from "./Book";

const BookList: React.FC = () => {
  return (
    <div className="flex flex-col divide-y divide-solid justify-center	">
    {/* <div className="flex flex-col justify-center"> */}
      {books.map((book, index) => (
        <Book
          key={index}
          name={book.name}
          author={book.author}
          description={book.description}
          publishingYear={book.publishingYear}
          genre={book.genre}
        />
      ))}
    </div>
  );
};

export default BookList;
