import React from 'react'

const MainPage = () => {
  return (
    <div className='px-12 py-[1.2rem] flex justify-between items-center '>
      <nav>
        <div className='font-lexend font-semibold text-[40px] drop-shadow-lg'>
          Find the place to
        </div>
        <div className='font-lexend font-semibold text-[40px] drop-shadow-lg'>
          Bring your dreams
        </div>
        <div className='font-lexend font-semibold text-[40px] drop-shadow-lg'>
          To life.
        </div>
        <div className='text-customGray'>
          Everything you need about finding your place to live will be here, where it will be easier for you
        </div>
      </nav>
      <nav>
          <div className="flex items-center bg-white rounded-full shadow-md border border-gray-300 max-w-md">
             <div className="pl-4 text-orange-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search for the location"
            className="flex-grow px-4 py-2 text-gray-600 rounded-full focus:outline-none"
          />
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full flex items-center">
            Search
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 ml-2">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8m-4-4v8" />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default MainPage