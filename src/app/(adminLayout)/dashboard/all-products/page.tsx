import { TCloths } from "@/types/types";
import React from "react";

const AllProducts = async() => {
  //   --- fetching data from server with SSR
  const res = await fetch(
    "https://server-for-assignment-8.vercel.app/allCloths",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  let content = null ;
  if(data.length > 0) {
    content = data.map((item : TCloths) => (
        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {item.Title}
          </th>
          <td className="px-6 py-4">{item.Category}</td>
          <td className="px-6 py-4">{item.Ratings}</td>
          <td className="px-6 py-4 flex flex-col gap-1 md:flex md:flex-row">
            <label
            //   onClick={() => enableEdit(item._id)}
              htmlFor="my_modal_7"
              className="btn btn-xs btn-warning font-normal"
            >
              Edit
            </label>
            <label
            //   onClick={() => handleDelete(item._id)}
              htmlFor="my_modal_7"
              className="btn btn-xs btn-neutral text-white font-normal ms-1"
            >
              Delete
            </label>
          </td>
        </tr>
      ));
  }
  console.log(data);
  return (
    <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-40">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Supply name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>{content}</tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProducts;
