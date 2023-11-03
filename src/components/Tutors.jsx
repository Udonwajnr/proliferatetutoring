import React from 'react'
import SwiperButtonNext from './SwiperButtonNext';
import SwiperButtonPrev from './SwiperButtonPrev';
import { Swiper, SwiperSlide ,useSwiper} from 'swiper/react';

import { Autoplay, Pagination, Navigation,EffectCoverflow } from 'swiper/modules';

 import rect5 from "../assets/ali.jpg"
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Tutors = () => {
  return (
    <section className='py-28 px-10'>
        <div className='flex justify-center items-center'>
            <div className='w-6/12 flex flex-col gap-y-5 px-5' >
                <h2 className='text-lg font-bold'>Meet Some of Our <span className='text-blue-bg'>Prolific</span> Tutors</h2>
                <p className='text-[#898A8B] font-bold text-md '>
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum.
                </p>
                <button className='px-3 py-2 rounded-xl w-52 bg-blue-bg text-white text-md font-bold'>Find Your Tutor</button>
            </div>
            <div className='w-6/12'>
            <Swiper
               effect={'coverflow'}
               grabCursor={true}
               centeredSlides={true}
               slidesPerView={'auto'}
               spaceBetween={-100}
               loop={true}
               coverflowEffect={{
                 rotate: 50,
                 stretch: 0,
                 depth: 100,
                 modifier: 1,
                 slideShadows: true,
               }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
               modules={[EffectCoverflow, Pagination,Autoplay]}
               className="mySwiper"
            >
                <SwiperSlide className='w-[500px] rounded-3xl'>
                    <img src={rect5} alt="img" className='rounded-3xl'/>
                </SwiperSlide>
                <SwiperSlide className='w-[500px]'>
                    <img src={rect5} alt="img" className='rounded-3xl'/>
                </SwiperSlide>
                <SwiperSlide className='w-[500px]'>
                    <img src={rect5} alt="img" className='rounded-3xl'/>
                </SwiperSlide>
                <SwiperSlide className='w-[500px]'>
                    <img src={rect5} alt="img" className='rounded-3xl'/>
                </SwiperSlide>
                <SwiperSlide className='w-[500px]'>
                    <img src={rect5} alt="img" className='rounded-3xl'/>
                </SwiperSlide>
                <SwiperSlide className='w-[500px]'>
                    <img src={rect5} alt="img" className='rounded-3xl'/>
                </SwiperSlide>
                <SwiperSlide className='w-[500px]'>
                    <img src={rect5} alt="img" className='rounded-3xl'/>
                </SwiperSlide>
                <SwiperSlide className='w-[500px]'>
                    <img src={rect5} alt="img" className='rounded-3xl'/>
                </SwiperSlide>
                </Swiper>

            </div>
        </div>
    </section>
  )
}

export default Tutors