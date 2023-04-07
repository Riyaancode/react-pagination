import { useState, useEffect, useRef } from "react";
import "./App.css";
import Pagination from "./Pagination";

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const startingIndex = lastIndex - recordsPerPage;
  const records = data.slice(startingIndex, lastIndex);

  const paginationRef = useRef(null);
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (paginationRef.current) {
      paginationRef.current.update(currentPage);
    }
  }, [currentPage]);

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

  return (
    <div className="App">
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
      <Pagination
        ref={paginationRef}
        currentPage={currentPage}
        changeCurrPage={changeCurrPage}
        totalData={data.length}
        recordsPerPage={recordsPerPage}
      />
    </div>
  );
}

export default App;
