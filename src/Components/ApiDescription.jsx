import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import DashboardHeader from "./DashboardHeader";
import HeaderData from "./HeaderData";
import axios from 'axios';
import Loading from './Loading';


function ApiDescription() {

  const [vin, setVin] = useState('');
  const [reportData, setReportData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setVin(event.target.value);
  };

  const getReportbyVin = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.allreports.tools/wp-json/v1/get_report_check/${vin}`);
      
      setReportData(response.data); // Assuming response.data is the data you want to store
    } catch (error) {
      if (error.response) {
        // Server responded with an error status code
        setError(error.response.data.error);
      } else if (error.request) {
        // Request made but no response received
        setError('Network Error: Please check your internet connection');
      } else {
        // Something happened in setting up the request
        setError('Error: ' + error.message);
      }
    }
    setLoading(false);
  };

  const renderCards = () => {
    if (!reportData) return null;
    return Object.entries(reportData).map(([source, data]) => (
      <div key={source} className="ml-5 sm:flex-wrap  md:flex-wrap">
        <Link to="#" className="block max-w-sm pt-3 pb-3 pl-10 pr-10 ml-auto mr-auto  lg:justify-evenly  mb-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-200">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{source.toUpperCase()}</h5>
        <span className='text-xl font-medium text-cyan-600'>Records:</span><p className="font-semibold mb-1 text-gray-700 dark:text-gray-800">{data.records}</p>
        <span className='text-xl font-medium text-cyan-600'>Vehicle:</span><p className="font-semibold mb-1 text-gray-700 dark:text-gray-800">{data.vehicle}</p>
        <span className='text-xl font-medium text-cyan-600'>Year:</span><p className="font-semibold mb-1 text-gray-700 dark:text-gray-800">{data.year}</p>
        <span className='text-xl font-medium text-cyan-600'>VIN:</span><p className="font-semibold mb-1  text-gray-700 dark:text-gray-800">{data.vin}</p>
        <span className='text-xl font-medium text-cyan-600'>Body:</span><p className="font-semibold mb-1 text-gray-700 dark:text-gray-800">{data.body}</p>
       </Link>
 
      </div>
    ));
  };

  return (
    <>
    <div className="">
      <DashboardHeader/>
      <HeaderData/>
      <main className=''>
          <div className='flex max-sm:w-2/3 shadow-md pr-5 pl-5 rounded-xl max-md:w-72 lg:w-96 flex-col justify-center mt-4 ml-auto mr-auto sm:w-43'>
        <div>
        <div><h2 className='text-2xl font-medium text-yellow-500'>Get Report</h2>
        <hr className='border-2 border-amber-400 '/>
        </div>    
        </div>
          <div  className=''>
           <label htmlFor="vin" className="mt-4 block text-xl font-medium leading-6 text-gray-900">
              VIN:
              </label>
              <div className="mt-2">
                <input
                  id="vin"
                  name="vin"
                  type="vin"
                  autoComplete="vin"
                  placeholder='  VIN'
                  value={vin}
                  onChange={handleChange}
                  required
                  className=" block w-full rounded-md border border-amber-400 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
            </div> 
            <div className=" flex justify-end justify-self-end mb-5">
              <button onClick={getReportbyVin} className=" ml-2 mt-5 bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow">
               Search
              </button>
            </div>
          </div>
       </main>
       {loading && <Spinner />} {/* Render spinner if loading */}
          {/* Error Popup */}
          {error && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <p className="text-xl text-red-500">{error}</p>
                  <button
                    onClick={() => setError(null)}
                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          {/* Display Report Data */}
          <div className="card-container mt-5 flex flex-wrap   justify-center ">
          {renderCards()}
          </div>
    </div>
  </>
  )
}


// Placeholder Spinner component
const Spinner = () => {
  return <div className='mt-5 justify-center content-center items-center ml-auto mr-auto'><Loading/></div>;
};




export default ApiDescription
