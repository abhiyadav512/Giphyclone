import React, { useEffect, useState } from 'react'
import { Gifstate } from '../context/gif-context';
import { useParams } from 'react-router-dom';
import Gif from '../components/gif';
import FollowOn from '../components/follow-on';

const Category = () => {
  const [result, setResult] = useState([]);

  const { gf } = Gifstate();

  const { category } = useParams();

  const fetchResult = async () => {
    const { data } = await gf.gifs(category, category);

    setResult(data);
    console.log(data);
  }

  useEffect(() => {
    fetchResult();
  }, [category]);

  return (
    <div className='flex flex-col sm:flex-row gap-5 my-4'>
      <div className='w-full sm:w-72'>
        {
          result.length > 0 && <Gif gif={result[0]} hover={false} />
        }
        <span className='text-sm pt-2 text-gray-400'>Don&apos;t tell it to me, GIF it to me!</span>
        <FollowOn />
        <div className='divider' />
      </div>

      <div>
        <h2 className='text-4xl font-extrabold capitalize pb-1'>
          {category.split("-").join(" & ")}
        </h2>
        <h2 className='text-lg text-gray-400 pb-3 font-bold hover:text-gray-50 cursor-pointer'>
          @{category}
        </h2>

        {
          result.length > 0 && (
            <div className='columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2'>
              {result.slice(1).map((gif) => {
                return <Gif gif={gif} key={gif.id} />
              })}
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Category