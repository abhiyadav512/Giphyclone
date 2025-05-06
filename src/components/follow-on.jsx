import React from 'react'
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';


const FollowOn = () => {
    return (
        <div className='faded-text pt-2 '>
            <span>Follow on:</span>
            <div className='flex gap-4 pt-3'>
                <a href='https://youtu.be/wtC1_Ea9_wk?si=S1btbHuEEnJ8sRs1'>
                    <FaYoutube size={20}/>
                </a>
                <a href='https://www.instagram.com/abhi_yadav512/'>
                    <FaInstagram size={20}/>
                </a>
                <a href='https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJteCI6IjIifQ%3D%3D%22%7D'>
                    <FaXTwitter size={20}/>
                </a>
            </div>
        </div>
    )
}

export default FollowOn;