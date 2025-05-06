import React, { useEffect, useState } from 'react'
import { Gifstate } from '../context/gif-context'
import Gif from '../components/gif';


const Favorite = () => {
  const [favGif, setfavGif] = useState([])
  const { gf, favorite ,addToFavorites} = Gifstate();
  const fectFav=async()=>{
    const {data:gifs}=await gf.gifs(favorite)
    setfavGif(gifs);
  }

  useEffect(()=>{
    fectFav();
  },[])
  return (
    <div className='mt-2'>
      <span className='faded-text'>My Favorites</span>
      <div className='columns-2 sm:columns-3 lg:columns-4 xl:columns-6'>
      {favGif.map((gif)=>{
        return <Gif gif={gif}key={gif.id} hover={false}/>
      })}
      </div>
    </div>
  )
}

export default Favorite