import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card';

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`);
    setUserData(response.data);
  }

  useEffect(function () {
    getData();
  }, [index]);

  let printUserData = (
    <h3 className='text-gray-100 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>
      Loading...
    </h3>
  );

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={elem.id || idx}>
          <Card elem={elem} />
        </div>
      );
    });
  }

  return (
    // 1. Set the main container to a flex column that fills the screen
    <div className='bg-black h-screen flex flex-col text-white'>
      
      {/* 2. Content area: flex-1 makes it take all available space, overflow-auto lets it scroll */}
      <div className='flex-1 overflow-auto p-4'>
        <div className='flex flex-wrap justify-center p-2 gap-4'>
          {printUserData}
        </div>
      </div>

      {/* 3. Footer area: This will now stay pinned at the very bottom */}
      <div className='flex justify-center items-center gap-6 p-6 bg-black border-t border-zinc-800'>
        <button
        style={{opacity:index==1?0.5:1}}
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
          className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-6 py-2 font-bold'
        >
          Prev
        </button>
        
        <h4 className='font-semibold text-lg'>Page {index}</h4>
        
        <button
          onClick={() => {
            setIndex(index + 1);
            setUserData([]);
          }}
          className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-6 py-2 font-bold'
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App;