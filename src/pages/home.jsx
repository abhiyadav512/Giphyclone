import React, { useEffect } from 'react'
import { Gifstate } from '../context/gif-context'
import Gif from '../components/gif';
import FilterGif from '../components/filter-gif';


const Home = () => {
  const { gf, gifs, setGifs, filter, isLoading, setIsLoading } = Gifstate();

  const feactTrendingGIFs = async () => {
    const { data } = await gf.trending({
      limit: 20,
      type: filter,
      rating: "g",
    });
    setGifs(data);
    setIsLoading(false);
  };

  useEffect(() => {
    feactTrendingGIFs();
    setIsLoading(true);
  }, [filter]);


  console.log(feactTrendingGIFs());
  return (
    <div>
      <img src="/banner.gif" alt="earth banner" 
      className='rounded mt-2 w-full'/>
       <FilterGif showRanding/>
      <div className='columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2'>
        {
          gifs.map((g)=>{
            return <Gif gif={g} key={g.title} isLoading={isLoading} />
          })
        }
      </div>
    </div>

    
  )
}

export default Home