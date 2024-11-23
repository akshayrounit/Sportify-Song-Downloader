import React from "react"
import { SlSocialSpotify } from "react-icons/sl";
import axios from "axios"
import{ useState} from "react";

function App() {
const [URL,setURL]=useState("")

const handlURL =(e)=>{
  e.preventDefault()
  setURL(e.target.value)
}

console.log(URL);



const downIoadSong=async ()=>{
  const options = {
    method: 'GET',
    url: 'https://spotify-downloader9.p.rapidapi.com/downloadSong',
    params: {
      songId: `${URL}`
    },
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_API_KEY,
      'x-rapidapi-host': 'spotify-downloader9.p.rapidapi.com'
    }
  };

  try{
     const rspn=await axios.request(options)
     console.log(rspn.data.data.downLoadLink)
  }catch(error){
    console.log(error)
  }
}
downIoadSong()


  return(
   <div 
          className="h-screen w-screen bg-gradient-to-r from-green-300 via-green-500 to-lime-700 flex items-center justify-center flex-col gap-y-4"
   >
    <div 
       className="flex  items-center justify-center gap-x-2 text-x1 font-bold"
       >
    <SlSocialSpotify size={43}/>
    <p>Song Downloader</p>
    </div>

    <div 
       className="flex gap-x-2">
      
      < input type="url" className="h-6 w-[300px] border-none outline-none px-4 rounded-lg "
      onChange={handlURL}  />
      <button className="flex-col gap-y-3 h-6 px-2 rounded-lg font-bold hover:big-black hover:text-white " >Search</button>
    </div>
   </div>
  )
}

export default App