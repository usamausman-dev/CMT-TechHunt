import React from 'react'
import Facebook from "../assests/Social/facebook.png"
import Instagram from "../assests/Social/instagram.png"
import LinkedIn from "../assests/Social/linkedin.png"
import Behance from "../assests/Social/behance.png"
import Twitter from "../assests/Social/twitter.png"



import Yes from '../assests/Growth/Yes.png'
import No from '../assests/Growth/No.png'

const SocialMedia = () => {

    const SocialMedia = [
        {
            platform: 'Facebook',
            count: 10.5,
            messages: 10,
            followersIncrement: true,
            icon: Facebook
        },
        {
            platform: 'Instagram',
            count: 10.5,
            messages: 10,
            followersIncrement: true,
            icon: Instagram
        }, {
            platform: 'LinkedIn',
            count: 10.5,
            messages: 10,
            followersIncrement: true,
            icon: LinkedIn
        },
        {
            platform: 'Behance',
            count: 10.5,
            messages: 10,
            followersIncrement: true,
            icon: Behance
        }, {
            platform: 'Twitter',
            count: 10.5,
            messages: 10,
            followersIncrement: false,
            icon: Twitter
        },
    ]



    return (
        <div className='py-7'>
            <h1 className='text-2xl font-bold'>Social Media Platforms</h1>
            <div className='flex justify-between  py-6'>
                {
                    SocialMedia.map((data, key) => {
                        return (
                            <div key={key} className='w-[15vw] shadow-lg rounded-lg  p-4 border-green-700/20 border-2'>
                                <div className='flex items-center mb-2'>
                                    <img src={data.icon} alt={data.platform} />
                                    <h1 className='ml-2'>{data.platform}</h1>
                                </div>


                                <div className='flex items-center justify-between'>

                                    <div>
                                        <p>Followers</p>
                                        <p className={data.followersIncrement ? ('text-green-500') : ('text-red-500')}>
                                            <span className='text-black'>Count</span>
                                            {data.followersIncrement ?
                                                (<i className='fa-solid fa-arrow-trend-up mx-2'></i>)
                                                :
                                                (<i className='fa-solid fa-arrow-trend-down mx-2'></i>)
                                            }
                                            {data.count}%</p>

                                            <p>Pending</p>
                                            <p>Messages <span className='text-red-500'>{data.messages}</span></p>
                                    </div>

                                    <div>
                                        {
                                            data.followersIncrement ? (<img src={Yes} alt="positive" />) : (<img src={No} alt="negative" />)
                                        }
                                    </div>


                                </div>

                            </div>
                        )

                    })
                }

            </div>
        </div>
    )
}

export default SocialMedia
