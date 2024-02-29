import React from 'react'
import '../App.css';

function Loading() {
  return (
    <>
    <div className="flex flex-col justify-center">
    <div className="flex flex-row space-x-4 justify-center">
    <div className="w-12 h-12 rounded-full animate-spin
                    border-x border-solid border-yellow-500 border-t-transparent"></div>

    <div className="w-12 h-12 rounded-full animate-spin
    border-x-2 border-solid border-blue-500 border-t-transparent"></div>
                    
    <div className="w-12 h-12 rounded-full animate-spin
    border-x-4 border-solid border-green-500 border-t-transparent"></div>
    <div className="w-12 h-12 rounded-full animate-spin
    border-x-8 border-solid border-purple-500 border-t-transparent"></div>
    </div>
    </div>
    </>
  )
}

export default Loading
