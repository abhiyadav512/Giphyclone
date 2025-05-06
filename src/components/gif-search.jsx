import React, { useEffect, useState } from 'react'
import { HiMiniXMark, HiOutlineMagnifyingGlass } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom';

const GifSearch = () => {
    const [query, setQuery] = useState("");

    const navigate = useNavigate();

    const serchgGIFs = async () => {
        if (query.trim() === "") {
            return;
        }
        navigate(`/search/${query}`);

        
    }

    return (
        <div className='flex relative'>
            <input type='text'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder='Search all the GIFs and Stickers'
                className='w-full pl-4 pr-14 py-4 text-xl text-black rounded-tl rounded-bl border border-gray-300 outline-none'
            />
            {
                query && (
                    <button
                        onClick={() => { setQuery("") }}
                        className='bg-gray-300 rounded-full me-2 opacity-90 absolute top-6 right-20'>
                        <HiMiniXMark size={22} />
                    </button>
                )
            }
            <button onClick={serchgGIFs} className='bg-gradient-to-tr from-pink-800 to-pink-400 text-white px-4 rounded-tr rounded-br'>
                <HiOutlineMagnifyingGlass size={35} className='-scale-x-100' />
            </button>
        </div>
    )
}

export default GifSearch