import React, { useEffect, useState } from 'react'
import "./App.css"

export default function App() {
  const option={
    method:"Get",
    headers:{
        "X-Api-Key":"XryyfdLa/BatNY73/yAXqQ==9nh81N5mQRwNRKyk"
    },
  };
  const [quotes,setquotes]=useState(["loading"])
  const call = async(titel)=>{
    const response= await fetch(`https://api.api-ninjas.com/v1/quotes?category=happiness`,option);
    const data = await response.json();
    setquotes(data[0].quote);
  }
  // useEffect(()=>{
  //   call('');
  // },[])
  return (
    <div className='card' >
      {/* <input
        placeholder='search for movies'
        value={turm}
        onChange={(e)=>setturm(e.target.value)}
        /> */}
      <button onClick={()=>call("")}>
        give me quote
      </button>
      <div className='quote'>
        {quotes}
      </div>
    </div>
  )
}
