import React from 'react'
import boy from '../assets/boy.png'
import live from '../assets/Live.png'

const Hero = () => {
  return (
    <div>
        <div className='bg-blue-bg flex justify-between items-center'>
            <div className='w-full p-4'>
                <h2 className='text-[48px] text-white tracking-wider font-bold'>
                    Maximizing Potentials 
                    Raising High Flyers
                    One Session at A Time
                </h2>
                <div className='flex bg-white rounded-lg'>
                    <input type="text" placeholder='SEARCH FOR SUBJECT OR TUTORS' className='h-16 w-full px-3 focus:outline-none'/>
                    <div className='bg-white p-2 rounded-lg'>
                        <button className=' rounded-lg'>
                         <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 256 256"><path fill="currentColor" d="m226.83 221.17l-52.7-52.7a84.1 84.1 0 1 0-5.66 5.66l52.7 52.7a4 4 0 0 0 5.66-5.66ZM36 112a76 76 0 1 1 76 76a76.08 76.08 0 0 1-76-76Z"></path></svg>
                        </button>
                    </div>

                </div>

            </div>

            <div className='w-full flex justify-end'>
                <img src={boy} alt="" />
            </div>
        </div>

            {/* video player */}
      
        <div className='max-w-[500px] h-[250px] m-auto bg-black'>
            <div className='relative flex flex-col h-full justify-between'>
                <div className='flex items-center justify-between'>
                    <span className=''>English Language Class</span>    
                        <div>
                            <svg width="40" height="65" viewBox="0 0 40 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20 27.1583C19.1159 27.1583 18.2681 27.7218 17.643 28.7247C17.0179 29.7277 16.6667 31.088 16.6667 32.5064C16.6667 33.9248 17.0179 35.2851 17.643 36.2881C18.2681 37.2911 19.1159 37.8545 20 37.8545C20.8841 37.8545 21.7319 37.2911 22.357 36.2881C22.9821 35.2851 23.3333 33.9248 23.3333 32.5064C23.3333 31.088 22.9821 29.7277 22.357 28.7247C21.7319 27.7218 20.8841 27.1583 20 27.1583ZM15 32.5064C15 30.3788 15.5268 28.3383 16.4645 26.8339C17.4021 25.3294 18.6739 24.4843 20 24.4843C21.3261 24.4843 22.5979 25.3294 23.5355 26.8339C24.4732 28.3383 25 30.3788 25 32.5064C25 34.634 24.4732 36.6745 23.5355 38.1789C22.5979 39.6834 21.3261 40.5286 20 40.5286C18.6739 40.5286 17.4021 39.6834 16.4645 38.1789C15.5268 36.6745 15 34.634 15 32.5064ZM14.1167 22.7434C10.85 28.1317 10.85 36.8812 14.1167 42.2694L12.92 44.1359C9.02667 37.7075 9.02667 27.3054 12.92 20.877L14.115 22.7434H14.1167ZM25.8833 42.2694C29.15 36.8812 29.15 28.1317 25.8833 22.7434L27.08 20.877C30.9733 27.3054 30.9733 37.7075 27.08 44.1359L25.885 42.2694H25.8833Z" fill="#FF0000"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5714 17.4089C9.33377 19.3898 8.35183 21.743 7.68185 24.3337C7.01187 26.9244 6.667 29.7017 6.667 32.5066C6.667 35.3114 7.01187 38.0887 7.68185 40.6794C8.35183 43.2701 9.33377 45.6233 10.5714 47.6043L9.3931 49.4975C8.00023 47.2682 6.89515 44.6199 6.14114 41.7043C5.38714 38.7887 4.99902 35.6632 4.99902 32.5066C4.99902 29.35 5.38714 26.2244 6.14114 23.3088C6.89515 20.3932 8.00023 17.745 9.3931 15.5156L10.5714 17.4089ZM29.4281 47.6043C30.6657 45.6233 31.6477 43.2701 32.3177 40.6794C32.9877 38.0887 33.3325 35.3114 33.3325 32.5066C33.3325 29.7017 32.9877 26.9244 32.3177 24.3337C31.6477 21.743 30.6657 19.3898 29.4281 17.4089L30.6064 15.5156C31.9993 17.745 33.1044 20.3932 33.8584 23.3088C34.6124 26.2244 35.0005 29.35 35.0005 32.5066C35.0005 35.6632 34.6124 38.7887 33.8584 41.7043C33.1044 44.6199 31.9993 47.2682 30.6064 49.4975L29.4281 47.6043Z" fill="#FF0000"/>
                            </svg>
                            <span>Live</span>
                        </div>
                </div>

                <div>
                    <button className='bg-blue-bg rounded-xl text-white py-2 px-4 font-bold'>Join Class</button>
                    <div>
                        <span>15 student Joined</span>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>            
        </div>
    </div>
  )
}

export default Hero