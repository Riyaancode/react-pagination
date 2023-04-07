import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const startingIndex = lastIndex - recordsPerPage;
  const records = data.slice(startingIndex, lastIndex);
  const totalPages = Math.ceil(data.length / recordsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  useEffect(() => {
    fetchData();
    // console.log(pageNumbers);
  }, []);
  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  };
  const changeCurrPage = (num) => {
    setCurrentPage(num);
  };
  const changeToPrevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const changeToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <div className="App">
      {/* <table>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
        {records.map((post) => (
          <tr>
            <td>{post.id}</td>
            <td>{post.title.slice(0, 10)}</td>
            <td>{post.body.slice(0, 50)}</td>
          </tr>
        ))}
      </table> */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-full mt-5">
          <h3 className="text-gray-800 text-3xl font-bold lg:text-4xl">
            Pagination Demo
          </h3>
          <p className="text-gray-600 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b">
              <tr className="divide-x">
                <th className="py-3 px-6">ID</th>
                <th className="py-3 px-6">Title</th>
                <th className="py-3 px-6">Body</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {records.map((item, idx) => (
                <tr key={idx} className="divide-x">
                  <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.title.slice(0, 20)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.body.slice(0, 100)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
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
              onClick={() => changeCurrPage(num)}
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
    </div>
  );
}

export default App;
