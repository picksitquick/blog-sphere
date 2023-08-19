import React from 'react';

export default function Newsletter() {
  return (
    <div className="bg-purple-200 mt-20 ">
        <div className="container mx-auto md:px-20 py-16 text-center">
            <h1 className="font-bold text-3xl text-gray-700">Subscribe Newsletter</h1>
            <div className="py-4">
                <input type="text" className="shadow-inner border rounded w-9/12 py-3 px-3 text-gray-700 focus:outline-none focus:shadow-outline" placeholder="Enter your email..."/>
            </div>
            <button className="bg-gray-400 px-20 py-3 rounded-full text-gray-50 text-xl ">
                Subscribe
            </button>
        </div>
    </div>
  )
}
