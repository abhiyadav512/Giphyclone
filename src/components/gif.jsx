import React from 'react'
import { Link } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

const Gif = ({ gif, hover = true, isLoading }) => {
    return (
        <Link to={`/${gif.type}s/${gif.slug}`} key={gif.id}>

            <div className='w-full mb-2 relative cursor-pointer group aspect-video'>
                <img src={gif?.images?.fixed_width.webp}
                    alt={gif?.title}
                    className='w-full object-cover rounded transition-all duration-300 ' />
                {hover && (
                    <div className='absolute inset-0 rounded opacity-0 group-hover:opacity-100 bg-gradient-to-b from-transparent via-transparent to-black font-bold flex gap-2 items-end p-2'>
                        {
                            isLoading ? (<LoadingSpinner />) : (
                                <div>
                                    <img

                                        src={gif?.user?.avatar_url}
                                        alt={gif?.user?.display_name}
                                        className='h-8'
                                    />
                                    <span>{gif?.user?.display_name}</span>
                                </div>
                            )
                        }

                    </div>
                )
                }
            </div>
        </Link>
    )
}

export default Gif;