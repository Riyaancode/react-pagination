import { useState, useEffect, useRef } from "react";

export default function Pagination({
  currentPage,
  onPageChange,
  totalItems,
  itemsPerPage,
}) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handleClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  return (
    <div>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => handleClick(pageNumber)}
          disabled={pageNumber === currentPage}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
}
