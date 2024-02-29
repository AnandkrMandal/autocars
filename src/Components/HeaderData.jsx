import React, { useState ,useEffect} from 'react';
import axios from 'axios';

const access_token = '68523d5476af56837fd1b57c867f2fe9';



function HeaderData() {

    const [loading, setLoading] = useState(false);
    const [balanceData, setBalanceData] = useState(null);
  
    const getBalance = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://api.allreports.tools/wp-json/v1/get_client_payment_balance/${access_token}`);
        response.data.total_in_dollars = (response.data.total_in_cents / 100).toFixed(2);
        setBalanceData(response.data) // Assuming response.data is the data you want to store
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
  
    useEffect(() => {
      getBalance();
    }, []);
  
  return (
    <>
  <div className='flex flex-col lg:flex-row justify-evenly sm:flex-col md:flex-row mt-1'>
    <div className="flex sm:w-full md:w-1/3 mb-4 md:mb-0 p-5 shadow-md rounded-xl mr-3 ml-3  bg-gray-100 hover:bg-gray-200">
    <div className="w-full text-left ">
      <p className="text-xl underline">Account</p>
        <p className="text-md text-gray-800 text-leftl eading-normal mb-0 font-lf-normal">
           UserName:
        </p>
        <div className="flex flex-col">
           <p>Anand Kumar</p>
           <div className="m-0">
           <button className=" mr-2 mt-1 bg-white hover:bg-gray-100 text-blue-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow">
            Edit
           </button>
           </div>
       </div>
    </div>
  </div>
  <div className="flex sm:w-full md:w-1/3 mb-4 md:mb-0 p-5 shadow-md rounded-xl mr-3 ml-3 bg-gray-100 hover:bg-gray-200">
    <div className="w-full text-left">
      <p className="text-xl underline">Balance</p>
        <div className="flex flex-col my-1">
          <div>
              {loading ? (
                <p>Loading...</p>
              ) : (
                balanceData && (
                  <div>
                    <p className=' text-2xl mb-2 text-blue-950'>balance $: {balanceData.total_in_cents}</p>
                    <p className='text-orange-600'>Created at: {balanceData.created_at}</p>
                    <p className='text-orange-600'>Updated at: {balanceData.updated_at}</p>
                  </div>
                )
              )}
            </div>
           <div className="m-0">
           <button className=" mr-2 mt-2 mb-2 bg-white hover:bg-gray-100 text-blue-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow">
           Payment
           </button>
           </div>
           <div>
             <p>CarFex Price:</p>
             <div>1$</div>
           </div>
           <div>
           <p>AutoCheck Price:</p>
             <div>1$</div>
           </div>
       </div>
    </div>
  </div>
  <div className="flex sm:w-full md:w-1/3 mb-4 md:mb-0 p-5 shadow-md rounded-xl mr-3 ml-3 bg-gray-100 hover:bg-gray-200">
    <div className="w-full text-left">
      <p className="text-xl underline">Example</p>
        <div className="flex flex-col my-3">
           <span className="text-secondary-inverse text-xl tracking-[-0.115rem] ">CarFex Report</span>
           <div className="m-0">
           <button className=" mr-2 mt-1 bg-white hover:bg-gray-100 text-blue-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow">
            view
           </button>
           </div>
       </div>
    </div>
  </div>
  </div>
  
  
    {/* <div className="flex flex-row items-start justify-evenly flex-auto py-8 px-9 bg-teal-100">
    <div className="flex-col">
       <div className="m-0">
       <h2 className="text-xl underline">Account</h2>
       </div>
       <div className="flex flex-col my-1">
           <span className="text-secondary-inverse text-xl tracking-[-0.115rem] sm:text-l">Username:</span>
           <p>Anand Kumar</p>
           <div className="m-0">
           <button className=" mr-2 mt-1 bg-white hover:bg-gray-100 text-blue-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow">
            Edit
           </button>
           </div>
       </div>
     </div>
     <div className="flex-col">
       <div className="m-0">
       <h2 className="text-xl underline">Balance</h2>
       </div>
       <div className="flex flex-col my-1">
          <div>
              {loading ? (
                <p>Loading...</p>
              ) : (
                balanceData && (
                  <div>
                    <p>balance $: {balanceData.total_in_cents}</p>
                    <p>Created at: {balanceData.created_at}</p>
                    <p>Updated at: {balanceData.updated_at}</p>
                  </div>
                )
              )}
            </div>
           <div className="m-0">
           <button className=" mr-2 mt-1 bg-white hover:bg-gray-100 text-blue-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow">
           Payment
           </button>
           </div>
           <div>
             <p>CarFex Price:</p>
             <div>1$</div>
           </div>
           <div>
           <p>AutoCheck Price:</p>
             <div>1$</div>
           </div>
       </div>
     </div>
     <div className="flex-col">
       <div className="m-0">
       <h2 className="text-xl underline">Example</h2>
       </div>
       <div className="flex flex-col my-3">
           <span className="text-secondary-inverse text-xl tracking-[-0.115rem] ">CarFex Report</span>
           <div className="m-0">
           <button className=" mr-2 mt-1 bg-white hover:bg-gray-100 text-blue-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow">
            view
           </button>
           </div>
       </div>
     </div>
 </div> */}
 </>
  )
}

export default HeaderData
