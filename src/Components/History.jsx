import React from 'react';
import DashboardHeader from "./DashboardHeader";
import HeaderData from "./HeaderData";

function History() {
  return (
    <>
      <div className="">
        <DashboardHeader/>
        <HeaderData/>
        <main className=''>
            <div className='flex max-sm:w-2/3 shadow-md pr-5 pl-5 rounded-xl  max-md:w-72 lg:w-96 flex-col justify-center mt-4 ml-auto mr-auto sm:w-43'>
            <div  className=''>
             <label htmlFor="amount" className="mt-4 block text-xl font-medium leading-6 text-gray-900">
                VIN
                </label>
                <div className="mt-2">
                  <input
                    id="amount"
                    name="amount"
                    type="amount"
                    autoComplete="amount"
                    placeholder='  Amount'
                    required
                    className=" block w-full rounded-md border-0  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div> 
              <div  className=''>
             <label htmlFor="date" className="mt-4 block text-xl font-medium leading-6 text-gray-900">
                Date Range
                </label>
                <div className="mt-2">
                  <input
                    id="date"
                    name="amount"
                    type="date"
                    autoComplete="date"
                    required
                    className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div> 
              <div  className=''>
             <label htmlFor="name" className="  mt-4 block text-xl font-medium leading-6 text-gray-900">
                Select Report Type
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder=' Name'
                    required
                    className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div> 
              <div className=" flex justify-end justify-self-end mb-5">
                <button className=" mr-2 mt-5 bg-white hover:bg-gray-100 text-red-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow">
                 Reset
                </button>
                <button className=" ml-2 mt-5 bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow">
                 Search
                </button>
                </div>
            </div>
            <div className="flex flex-col mt-4 mb-4">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8 ">
                <div className="overflow-hidden">
                    <table className="sm:w-full lg:w-2/3 text-center border-2 text-sm font-light ml-auto mr-auto bg-slate-100">
                    <thead className="border-b font-medium dark:border-neutral-500">
                        <tr>
                        <th scope="col" className="px-6 py-4">VIN</th>
                        <th scope="col" className="px-6 py-4">Date</th>
                        <th scope="col" className="px-6 py-4">Price $</th>
                        <th scope="col" className="px-6 py-4">Type</th>
                        <th scope="col" className="px-6 py-4">View Report</th>
                        <th scope="col" className="px-6 py-4">Pdf</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-secondary-200 text-neutral-800">
                        <td colSpan={6} className="whitespace-nowrap px-6 py-4 font-large text-red-600">
                            No Data Found
                        </td>
                        </tr>   
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            </div>
        </main>
      </div>
    </>
  )
}

export default History
