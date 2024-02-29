import DashboardHeader from "./DashboardHeader";
import HeaderData from "./HeaderData";
import React, { useState } from "react";
import axios from "axios";
function GetReport() {
  const [vin, setVin] = useState("");
  const [reportData, setReportData] = useState(null);
  const [error, setError] = useState(null);
  const [type, setType] = useState("carfax");
  const [lang, setLang] = useState("en");
  const [loading, setLoading] = useState(false); // Added loading state

  const apiKey = "68523d5476af56837fd1b57c867f2fe9";

  const handleVinChange = (event) => {
    setVin(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleLangChange = (event) => {
    setLang(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(`https://api.allreports.tools/wp-json/v1/get_report_by_wholesaler/${vin}/${apiKey}/${type}/${lang}`);
      setReportData(response.data);
    } catch (error) {
      if (error.response) {
        const errorMessage = error.response.data.error;
        if (errorMessage === "Not enough funds on your balance to buy a report" || errorMessage === "Invalid data for test account") {
          setError(errorMessage);
        } else {
          setError("An error occurred. or Invalid Data.");
        }
      } else {
        setError("An error occurred. Please check your internet connection.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="">
        <DashboardHeader />
        <HeaderData />
        <main className="">
          <form onSubmit={handleSubmit}>
            <div className="flex max-sm:w-2/3 shadow-md pr-5 pl-5 rounded-xl mb-4 max-md:w-64 lg:w-96 flex-col justify-center mt-4 ml-auto mr-auto sm:w-43">
              <div className="">
                <label
                  htmlFor="VIN"
                  className="mt-4 block text-xl font-medium leading-6 text-gray-900"
                >
                  VIN:
                </label>
                <div className="mt-2">
                  <input
                    id="vin"
                    name="vin"
                    type="text"
                    autoComplete="vin"
                    placeholder="  VIN"
                    value={vin}
                    onChange={handleVinChange}
                    required
                    className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="name"
                  className="  mt-4 block text-xl font-medium leading-6 text-gray-900"
                >
                  Type:
                </label>
                <div className="mt-2">
                  <select
                    value={type}
                    onChange={handleTypeChange}
                    className="text-black/70 bg-white px-3 py-2 w-full transition-all cursor-pointer hover:border-blue-600/30 border border-gray-200 rounded-lg outline-blue-600/50 appearance-none invalid:text-black/30"
                  >
                    <option value={"carfex"}>CarFex</option>
                    <option value={"autocheck"}>Autocheck</option>
                  </select>
                </div>
                <label
                  htmlFor="name"
                  className="  mt-4 block text-xl font-medium leading-6 text-gray-900"
                >
                  Language:
                </label>
                <div className="mt-2">
                  <select
                    value={lang}
                    onChange={handleLangChange}
                    className="text-black/70 bg-white px-3 py-2 w-full transition-all cursor-pointer hover:border-blue-600/30 border border-gray-200 rounded-lg outline-blue-600/50 appearance-none invalid:text-black/30"
                  >
                    <option value={"en"}>English</option>
                  </select>
                </div>
              </div>
              <div className=" flex justify-end justify-self-end mb-5">
                <button
                  type="submit"
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Buy Report"}{" "}
                  {/* Change button text based on loading state */}
                </button>
              </div>
            </div>
          </form>
          <div>
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
            {reportData && (
              <div>
                {/* Render report data here */}
                <pre>{JSON.stringify(reportData, null, 2)}</pre>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default GetReport;
