"use client";
import React, { useState } from "react";

type BookProps = {
  name: string;
  author: string;
  description: string;
  publishingYear: number;
  genre: string;
};

const Book: React.FC<BookProps> = ({
  name,
  author,
  description,
  publishingYear,
  genre,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div
      className="flex flex-col py-5 px-3 hover:bg-slate-200 cursor-pointer"
      onClick={toggleDetails}
    >
      <h2 className="text-center w-full">{name}</h2>
      {showDetails && (
        <div className="text-left pl-4">
          <h3>Author: {author}</h3>
          <p>Description: {description}</p>
          <p>Publishing Year: {publishingYear}</p>
          <p>Genre: {genre}</p>
        </div>
      )}
    </div>
  );
};

export default Book;
