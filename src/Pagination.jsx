import React from "react";

const Pagination = React.forwardRef(
  ({ currentPage, changeCurrPage, totalData, recordsPerPage }, ref) => {
    const totalPages = Math.ceil(totalData / recordsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    const handleClick = (num) => {
      changeCurrPage(num);
    };
    const changeToPrevPage = () => {
      changeCurrPage(currentPage - 1);
    };
    const changeToNextPage = () => {
      changeCurrPage(currentPage + 1);
    };

    return (
      <ol className="flex justify-center gap-1 text-xs font-medium my-4">
        <li>
          <button
            onClick={changeToPrevPage}
            className="inline-flex h-10 w-10 items-center justify-center bg-blue-600 text-white rounded border border-gray-100"
          >
            <span className="sr-only">Prev Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>

        {pageNumbers.map((num, indx) => (
          <li key={indx}>
            <button
              onClick={() => handleClick(num)}
              className={`block h-10 w-10 rounded text-2xl border border-gray-100 text-center ${
                currentPage === num ? "bg-blue-600 text-white" : ""
              }`}
            >
              {num}
            </button>
          </li>
        ))}

        <li>
          <button
            onClick={changeToNextPage}
            className="inline-flex h-10 w-10 items-center bg-blue-600 text-white justify-center rounded border border-gray-100"
          >
            <span className="sr-only">Next Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>
      </ol>
    );
  }
);

export default Pagination;
