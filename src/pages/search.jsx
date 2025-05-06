import React, { useEffect, useState } from 'react'
import { Gifstate } from '../context/gif-context';
import { useParams } from 'react-router-dom';
import FilterGif from '../components/filter-gif';
import Gif from '../components/gif';
import LoadingSpinner from '../components/LoadingSpinner';

const Search = () => {

  const [searchResults, setSearchResults] = useState([])
  const { gf, filter, isLoading, setIsLoading } = Gifstate();

  const { query } = useParams();

  const fecthSearchGig = async () => {
    const { data } = await gf.search(query,
      {
        sort: 'relevant', lang: 'en', limit: 20, type: filter
      }
    )
    setSearchResults(data);
    // console.log(data);
    setIsLoading(false);
  }

  useEffect(() => {
    fecthSearchGig();
    setIsLoading(true);
  }, [query,filter])  // page load when query change

  // add loading bar 

  return (
    <div className='my-4'>
      <h1 className='font-extrabold pb-3 text-5xl'>{query}</h1>
      <FilterGif alignLeft={true} />
      {searchResults.length > 0 ? (
        <div className='columns-2 md:columns-3 lg:columns-4 gap-2'>
          {searchResults.map((gif) => (
            <Gif gif={gif} key={gif.id} />
          ))}
        </div>
      ) : (
        <span>
          {isLoading ? (<LoadingSpinner />) : `No GIFs found for ${query}. Try searching for Stickers instead?`}

        </span>
      )
      }
    </div>
  )
}

export default Search;