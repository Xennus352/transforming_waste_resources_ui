import React, { useState } from 'react'
import Divider from '../../components/Divider';
import { Languages } from 'lucide-react';

const MarketPage = () => {
   const [lang, setLang] = useState(false);
  
    const wastType = [
      { title: "most like" },
      { title: "useful" },
      { title: "water" },
      { title: "air" },
      { title: "ground" },
      { title: "plastic" },
    ];
  
  return (
    <div> <div className="flex items-center justify-between">
    <div className="text-xl w-full">
      <input
        type="text"
        placeholder="Search here"
        className="input input-bordered input-primary w-full  max-w-xl"
      />
    </div>
    <button
      className="btn btn-primary "
      onClick={() => {
        setLang(!lang);
      }}
    >
      {" "}
      <Languages /> Search
    </button>
  </div>

  <div className="flex items-center justify-evenly flex-wrap mt-3 gap-3">
    {" "}
    {wastType.map((t, i) => {
      return (
        <div className="btn btn-outline" key={i}>
          {t.title}
        </div>
      );
    })}
  </div>

  <Divider />
  
  <div>
    <p className='text-4xl text-center text-error'>This is market page still creating...</p>
  </div>
  
  </div>
  )
}

export default MarketPage