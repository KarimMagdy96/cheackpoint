import axios from "axios";
import React, { useEffect, useState } from "react";

export default function List() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((Response) => {
      setdata(Response.data);
    });
  }, []);

  return (
    <div className="grid  grid-cols-4  mx-3">
      {data.map((ele) => {
        return (
          <>
            <a
              href="#"
              class="m-3  block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 "
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {ele.title}
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                {ele.body}
              </p>
            </a>
          </>
        );
      })}
    </div>
  );
}
