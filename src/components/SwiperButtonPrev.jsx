import React from 'react'
import { useSwiper } from 'swiper/react'


const SwiperButtonPrev = ({children}) => {
    const swiper = useSwiper();

    return (
        <button className='bg-white top-[50%] right-0 shadow-xl flex justify-center items-center rounded-full w-10 h-10 absolute z-[10000000]' onClick={() => swiper.slideNext()}>{children}</button>

    )
}

export default SwiperButtonPrev