import React from 'react'
import rec from "../assets/Rec1.png"
import rec2 from "../assets/Rect2.png"
import rec3 from "../assets/Rec3.png"
import { Swiper, SwiperSlide ,useSwiper,} from 'swiper/react';
import SwiperButtonNext from './SwiperButtonNext';
import SwiperButtonPrev from './SwiperButtonPrev';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';


const Discover = () => {
    const swiper = useSwiper();

  return (
    <section>
        <div>
            <div className='flex flex-col justify-center items-center gap-y-3'>
                    <h2 className='text-[#186BAD] font-bold text-[40px]'>Discover our top subjects</h2>
                        <div className='border w-32 border-[#D23221]'></div>
                </div>

                <p className='text-[#898A8B] text-md text-center'>
                Unlock a world of knowledge with our most sought-after 
                    subjects. Explore, learn, and excel in the areas that pique your 
                    curiosity and passion.
                </p>

        <div className='relative'>
            <Swiper
                spaceBetween={30}
                freeMode={true}
                slidesPerView={4}
                // autoplay={{
                //   delay: 2500,
                //   disableOnInteraction: false,
                // }}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >


                <SwiperButtonNext>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.1774 19.7602C16.25 19.8328 16.3075 19.919 16.3468 20.0138C16.3861 20.1086 16.4063 20.2103 16.4063 20.3129C16.4063 20.4156 16.3861 20.5172 16.3468 20.6121C16.3075 20.7069 16.25 20.7931 16.1774 20.8657C16.1048 20.9383 16.0186 20.9958 15.9238 21.0351C15.8289 21.0744 15.7273 21.0946 15.6246 21.0946C15.522 21.0946 15.4203 21.0744 15.3255 21.0351C15.2307 20.9958 15.1445 20.9383 15.0719 20.8657L7.2594 13.0532C7.18677 12.9806 7.12914 12.8944 7.08983 12.7996C7.05051 12.7048 7.03027 12.6031 7.03027 12.5004C7.03027 12.3978 7.05051 12.2961 7.08983 12.2013C7.12914 12.1064 7.18677 12.0203 7.2594 11.9477L15.0719 4.1352C15.2185 3.98861 15.4173 3.90625 15.6246 3.90625C15.832 3.90625 16.0308 3.98861 16.1774 4.1352C16.324 4.28179 16.4063 4.48062 16.4063 4.68793C16.4063 4.89525 16.324 5.09407 16.1774 5.24067L8.91663 12.5004L16.1774 19.7602Z" fill="#898A8B"/>
                </svg>

                </SwiperButtonNext>
                
            
                <SwiperSlide>
                        <div className='relative w-[400px]'>
                            <div className='relative top-16 overflow-hidden'>
                                <div className='absolute  h-full z-10  text-white text-[23px] w-full  top-0'>
                                    <div className='flex justify-between items-center px-3  h-full'>
                                        <div className='w-11/12 break-normal'>
                                            <h3 className='text-[40px]' >Data analysis (Advanced)</h3>
                                        </div>
                                        <div className='w-1/12 mt-7'>
                                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.9062 0.1875C12.3367 0.1875 10.9438 0.807031 10 1.87187C9.05625 0.807031 7.66328 0.1875 6.09375 0.1875C4.72674 0.189154 3.41618 0.732931 2.44956 1.69956C1.48293 2.66618 0.939154 3.97673 0.9375 5.34375C0.9375 10.9953 9.20391 15.5109 9.55547 15.7008C9.69209 15.7744 9.84483 15.8129 10 15.8129C10.1552 15.8129 10.3079 15.7744 10.4445 15.7008C10.7961 15.5109 19.0625 10.9953 19.0625 5.34375C19.0608 3.97673 18.5171 2.66618 17.5504 1.69956C16.5838 0.732931 15.2733 0.189154 13.9062 0.1875ZM13.4773 11.3094C12.3893 12.2327 11.2261 13.0637 10 13.7937C8.77387 13.0637 7.61073 12.2327 6.52266 11.3094C4.82969 9.85703 2.8125 7.64219 2.8125 5.34375C2.8125 4.47351 3.1582 3.63891 3.77356 3.02356C4.38891 2.4082 5.22351 2.0625 6.09375 2.0625C7.48438 2.0625 8.64844 2.79687 9.13203 3.97969C9.20242 4.15211 9.32257 4.29967 9.47715 4.40354C9.63174 4.50741 9.81376 4.56288 10 4.56288C10.1862 4.56288 10.3683 4.50741 10.5228 4.40354C10.6774 4.29967 10.7976 4.15211 10.868 3.97969C11.3516 2.79687 12.5156 2.0625 13.9062 2.0625C14.7765 2.0625 15.6111 2.4082 16.2264 3.02356C16.8418 3.63891 17.1875 4.47351 17.1875 5.34375C17.1875 7.64219 15.1703 9.85703 13.4773 11.3094Z" fill="white"/>
                                            </svg>
                                        </div>

                                    </div>
                                </div>
                                <img src={rec} alt="img" className='w-[500px] '  />
                            </div>
                            <div className='bg-[#F2F1F1] px-2 py-5 rounded-3xl flex flex-col'>
                                <p className='text-[15px] mt-20'>Unlock the hidden insights within your data. Dive into the world of Advanced Data Analysis, where raw information becomes actionable intelligence, and decisions are driven by precision and foresight.</p>
                                <div className='border w-32 border-[#D23221] my-3'></div>
                                <span className='text-[#A7A7A7]'>English</span>
                                <button className='bg-[#D23221] text-white rounded-3xl w-[100px] my-3 py-1'>Enroll</button>
                        </div>

                        </div>
                </SwiperSlide>

                <SwiperSlide>
                        <div className='relative w-[400px]'>
                            <div className='relative top-16 overflow-hidden'>
                                <div className='absolute  h-full z-10 text-white text-[23px] w-full  top-0'>
                                    <div className='flex h-full justify-between items-center px-3 '>
                                        <div className='w-11/12 break-normal'>
                                            <h3 className='text-[40px]'>Advanced Python for Web3</h3>
                                        </div>
                                        <div className='w-1/12 mt-7'>
                                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.9062 0.1875C12.3367 0.1875 10.9438 0.807031 10 1.87187C9.05625 0.807031 7.66328 0.1875 6.09375 0.1875C4.72674 0.189154 3.41618 0.732931 2.44956 1.69956C1.48293 2.66618 0.939154 3.97673 0.9375 5.34375C0.9375 10.9953 9.20391 15.5109 9.55547 15.7008C9.69209 15.7744 9.84483 15.8129 10 15.8129C10.1552 15.8129 10.3079 15.7744 10.4445 15.7008C10.7961 15.5109 19.0625 10.9953 19.0625 5.34375C19.0608 3.97673 18.5171 2.66618 17.5504 1.69956C16.5838 0.732931 15.2733 0.189154 13.9062 0.1875ZM13.4773 11.3094C12.3893 12.2327 11.2261 13.0637 10 13.7937C8.77387 13.0637 7.61073 12.2327 6.52266 11.3094C4.82969 9.85703 2.8125 7.64219 2.8125 5.34375C2.8125 4.47351 3.1582 3.63891 3.77356 3.02356C4.38891 2.4082 5.22351 2.0625 6.09375 2.0625C7.48438 2.0625 8.64844 2.79687 9.13203 3.97969C9.20242 4.15211 9.32257 4.29967 9.47715 4.40354C9.63174 4.50741 9.81376 4.56288 10 4.56288C10.1862 4.56288 10.3683 4.50741 10.5228 4.40354C10.6774 4.29967 10.7976 4.15211 10.868 3.97969C11.3516 2.79687 12.5156 2.0625 13.9062 2.0625C14.7765 2.0625 15.6111 2.4082 16.2264 3.02356C16.8418 3.63891 17.1875 4.47351 17.1875 5.34375C17.1875 7.64219 15.1703 9.85703 13.4773 11.3094Z" fill="white"/>
                                            </svg>
                                        </div>

                                    </div>
                                </div>
                                <img src={rec2} alt="img" className='w-[500px] '  />
                            </div>
                            <div className='bg-[#F2F1F1] px-2 py-5 rounded-3xl flex flex-col'>
                                <p className='text-[15px] mt-20'>Embark on a journey into the future of web development with Advanced Python for Web3. Harness the power of blockchain and decentralized applications to reshape the digital landscape.</p>
                                <div className='border w-32 border-[#D23221] my-3'></div>
                                <span className='text-[#A7A7A7]'>English</span>
                                <button className='bg-[#D23221] text-white rounded-3xl w-[100px] my-3 py-1'>Enroll</button>
                        </div>

                        </div>                        
                </SwiperSlide>

                <SwiperSlide>        
                        <div className='relative w-[400px]'>
                            <div className='relative top-16 overflow-hidden'>
                                <div className='absolute  h-full z-10 text-white text-[23px] w-full  top-0'>
                                    <div className='flex h-full justify-between items-center px-3 '>
                                        <div className='w-11/12 break-normal'>
                                            <h3 className='text-[40px]' >Market Analysis for Beginners</h3>
                                        </div>
                                        <div className='w-1/12 mt-7'>
                                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.9062 0.1875C12.3367 0.1875 10.9438 0.807031 10 1.87187C9.05625 0.807031 7.66328 0.1875 6.09375 0.1875C4.72674 0.189154 3.41618 0.732931 2.44956 1.69956C1.48293 2.66618 0.939154 3.97673 0.9375 5.34375C0.9375 10.9953 9.20391 15.5109 9.55547 15.7008C9.69209 15.7744 9.84483 15.8129 10 15.8129C10.1552 15.8129 10.3079 15.7744 10.4445 15.7008C10.7961 15.5109 19.0625 10.9953 19.0625 5.34375C19.0608 3.97673 18.5171 2.66618 17.5504 1.69956C16.5838 0.732931 15.2733 0.189154 13.9062 0.1875ZM13.4773 11.3094C12.3893 12.2327 11.2261 13.0637 10 13.7937C8.77387 13.0637 7.61073 12.2327 6.52266 11.3094C4.82969 9.85703 2.8125 7.64219 2.8125 5.34375C2.8125 4.47351 3.1582 3.63891 3.77356 3.02356C4.38891 2.4082 5.22351 2.0625 6.09375 2.0625C7.48438 2.0625 8.64844 2.79687 9.13203 3.97969C9.20242 4.15211 9.32257 4.29967 9.47715 4.40354C9.63174 4.50741 9.81376 4.56288 10 4.56288C10.1862 4.56288 10.3683 4.50741 10.5228 4.40354C10.6774 4.29967 10.7976 4.15211 10.868 3.97969C11.3516 2.79687 12.5156 2.0625 13.9062 2.0625C14.7765 2.0625 15.6111 2.4082 16.2264 3.02356C16.8418 3.63891 17.1875 4.47351 17.1875 5.34375C17.1875 7.64219 15.1703 9.85703 13.4773 11.3094Z" fill="white"/>
                                            </svg>
                                        </div>

                                    </div>
                                </div>
                                <img src={rec3} alt="img" className='w-[500px] '  />
                            </div>
                            <div className='bg-[#F2F1F1] px-2 py-5 rounded-3xl flex flex-col'>
                                <p className='text-[15px] mt-20'>Step into the fascinating realm of Market Analysis for Beginners. Explore the fundamentals of understanding markets, spotting trends, and making informed decisions in the ever-changing world of commerce.</p>
                                <div className='border w-32 border-[#D23221] my-3'></div>
                                <span className='text-[#A7A7A7]'>English</span>
                                <button className='bg-[#D23221] text-white rounded-3xl w-[100px] my-3 py-1'>Enroll</button>
                        </div>

                        </div>
                </SwiperSlide>      

                <SwiperSlide>        
                        <div className='relative w-[400px]'>
                            <div className='relative top-16 overflow-hidden'>
                                <div className='absolute  h-full z-10 text-white text-[23px] w-full  top-0'>
                                    <div className='flex h-full justify-between items-center px-3 '>
                                        <div className='w-11/12 break-normal'>
                                            <h3 className='text-[40px]' >Data analysis (Advanced)</h3>
                                        </div>
                                        <div className='w-1/12 mt-7'>
                                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.9062 0.1875C12.3367 0.1875 10.9438 0.807031 10 1.87187C9.05625 0.807031 7.66328 0.1875 6.09375 0.1875C4.72674 0.189154 3.41618 0.732931 2.44956 1.69956C1.48293 2.66618 0.939154 3.97673 0.9375 5.34375C0.9375 10.9953 9.20391 15.5109 9.55547 15.7008C9.69209 15.7744 9.84483 15.8129 10 15.8129C10.1552 15.8129 10.3079 15.7744 10.4445 15.7008C10.7961 15.5109 19.0625 10.9953 19.0625 5.34375C19.0608 3.97673 18.5171 2.66618 17.5504 1.69956C16.5838 0.732931 15.2733 0.189154 13.9062 0.1875ZM13.4773 11.3094C12.3893 12.2327 11.2261 13.0637 10 13.7937C8.77387 13.0637 7.61073 12.2327 6.52266 11.3094C4.82969 9.85703 2.8125 7.64219 2.8125 5.34375C2.8125 4.47351 3.1582 3.63891 3.77356 3.02356C4.38891 2.4082 5.22351 2.0625 6.09375 2.0625C7.48438 2.0625 8.64844 2.79687 9.13203 3.97969C9.20242 4.15211 9.32257 4.29967 9.47715 4.40354C9.63174 4.50741 9.81376 4.56288 10 4.56288C10.1862 4.56288 10.3683 4.50741 10.5228 4.40354C10.6774 4.29967 10.7976 4.15211 10.868 3.97969C11.3516 2.79687 12.5156 2.0625 13.9062 2.0625C14.7765 2.0625 15.6111 2.4082 16.2264 3.02356C16.8418 3.63891 17.1875 4.47351 17.1875 5.34375C17.1875 7.64219 15.1703 9.85703 13.4773 11.3094Z" fill="white"/>
                                            </svg>
                                        </div>

                                    </div>
                                </div>
                                <img src={rec} alt="img" className='w-[500px] '  />
                            </div>
                            <div className='bg-[#F2F1F1] px-2 py-5 rounded-3xl flex flex-col'>
                                <p className='text-[15px] mt-20'>Unlock the hidden insights within your data. Dive into the world of Advanced Data Analysis, where raw information becomes actionable intelligence, and decisions are driven by precision and foresight.</p>
                                <div className='border w-32 border-[#D23221] my-3'></div>
                                <span className='text-[#A7A7A7]'>English</span>
                                <button className='bg-[#D23221] text-white rounded-3xl w-[100px] my-3 py-1'>Enroll</button>
                        </div>

                        </div>
                </SwiperSlide> 

                <SwiperSlide>        
                        <div className='relative w-[400px]'>
                            <div className='relative top-16 overflow-hidden'>
                                <div className='absolute  h-full z-10 text-white text-[23px] w-full  top-0'>
                                    <div className='flex h-full justify-between items-center px-3 '>
                                        <div className='w-11/12 break-normal'>
                                            <h3 className='text-[40px]' >Data analysis (Advanced)</h3>
                                        </div>
                                        <div className='w-1/12 mt-7'>
                                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.9062 0.1875C12.3367 0.1875 10.9438 0.807031 10 1.87187C9.05625 0.807031 7.66328 0.1875 6.09375 0.1875C4.72674 0.189154 3.41618 0.732931 2.44956 1.69956C1.48293 2.66618 0.939154 3.97673 0.9375 5.34375C0.9375 10.9953 9.20391 15.5109 9.55547 15.7008C9.69209 15.7744 9.84483 15.8129 10 15.8129C10.1552 15.8129 10.3079 15.7744 10.4445 15.7008C10.7961 15.5109 19.0625 10.9953 19.0625 5.34375C19.0608 3.97673 18.5171 2.66618 17.5504 1.69956C16.5838 0.732931 15.2733 0.189154 13.9062 0.1875ZM13.4773 11.3094C12.3893 12.2327 11.2261 13.0637 10 13.7937C8.77387 13.0637 7.61073 12.2327 6.52266 11.3094C4.82969 9.85703 2.8125 7.64219 2.8125 5.34375C2.8125 4.47351 3.1582 3.63891 3.77356 3.02356C4.38891 2.4082 5.22351 2.0625 6.09375 2.0625C7.48438 2.0625 8.64844 2.79687 9.13203 3.97969C9.20242 4.15211 9.32257 4.29967 9.47715 4.40354C9.63174 4.50741 9.81376 4.56288 10 4.56288C10.1862 4.56288 10.3683 4.50741 10.5228 4.40354C10.6774 4.29967 10.7976 4.15211 10.868 3.97969C11.3516 2.79687 12.5156 2.0625 13.9062 2.0625C14.7765 2.0625 15.6111 2.4082 16.2264 3.02356C16.8418 3.63891 17.1875 4.47351 17.1875 5.34375C17.1875 7.64219 15.1703 9.85703 13.4773 11.3094Z" fill="white"/>
                                            </svg>
                                        </div>

                                    </div>
                                </div>
                                <img src={rec} alt="img" className='w-[500px] '  />
                            </div>
                            <div className='bg-[#F2F1F1] px-2 py-5 rounded-3xl flex flex-col'>
                                <p className='text-[15px] mt-20'>Unlock the hidden insights within your data. Dive into the world of Advanced Data Analysis, where raw information becomes actionable intelligence, and decisions are driven by precision and foresight.</p>
                                <div className='border w-32 border-[#D23221] my-3'></div>
                                <span className='text-[#A7A7A7]'>English</span>
                                <button className='bg-[#D23221] text-white rounded-3xl w-[100px] my-3 py-1'>Enroll</button>
                        </div>

                        </div>
                </SwiperSlide> 

                <SwiperSlide>        
                        <div className='relative w-[400px]'>
                            <div className='relative top-16 overflow-hidden'>
                                <div className='absolute  h-full z-10 text-white text-[23px] w-full  top-0'>
                                    <div className='flex h-full justify-between items-center px-3 '>
                                        <div className='w-11/12 break-normal'>
                                            <h3 className='text-[40px]' >Data analysis (Advanced)</h3>
                                        </div>
                                        <div className='w-1/12 mt-7'>
                                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.9062 0.1875C12.3367 0.1875 10.9438 0.807031 10 1.87187C9.05625 0.807031 7.66328 0.1875 6.09375 0.1875C4.72674 0.189154 3.41618 0.732931 2.44956 1.69956C1.48293 2.66618 0.939154 3.97673 0.9375 5.34375C0.9375 10.9953 9.20391 15.5109 9.55547 15.7008C9.69209 15.7744 9.84483 15.8129 10 15.8129C10.1552 15.8129 10.3079 15.7744 10.4445 15.7008C10.7961 15.5109 19.0625 10.9953 19.0625 5.34375C19.0608 3.97673 18.5171 2.66618 17.5504 1.69956C16.5838 0.732931 15.2733 0.189154 13.9062 0.1875ZM13.4773 11.3094C12.3893 12.2327 11.2261 13.0637 10 13.7937C8.77387 13.0637 7.61073 12.2327 6.52266 11.3094C4.82969 9.85703 2.8125 7.64219 2.8125 5.34375C2.8125 4.47351 3.1582 3.63891 3.77356 3.02356C4.38891 2.4082 5.22351 2.0625 6.09375 2.0625C7.48438 2.0625 8.64844 2.79687 9.13203 3.97969C9.20242 4.15211 9.32257 4.29967 9.47715 4.40354C9.63174 4.50741 9.81376 4.56288 10 4.56288C10.1862 4.56288 10.3683 4.50741 10.5228 4.40354C10.6774 4.29967 10.7976 4.15211 10.868 3.97969C11.3516 2.79687 12.5156 2.0625 13.9062 2.0625C14.7765 2.0625 15.6111 2.4082 16.2264 3.02356C16.8418 3.63891 17.1875 4.47351 17.1875 5.34375C17.1875 7.64219 15.1703 9.85703 13.4773 11.3094Z" fill="white"/>
                                            </svg>
                                        </div>

                                    </div>
                                </div>
                                <img src={rec} alt="img" className='w-[500px] '  />
                            </div>
                            <div className='bg-[#F2F1F1] px-2 py-5 rounded-3xl flex flex-col'>
                                <p className='text-[15px] mt-20'>Unlock the hidden insights within your data. Dive into the world of Advanced Data Analysis, where raw information becomes actionable intelligence, and decisions are driven by precision and foresight.</p>
                                <div className='border w-32 border-[#D23221] my-3'></div>
                                <span className='text-[#A7A7A7]'>English</span>
                                <button className='bg-[#D23221] text-white rounded-3xl w-[100px] my-3 py-1'>Enroll</button>
                        </div>

                        </div>
                </SwiperSlide> 

               
              <SwiperButtonPrev>
                <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M9.74067 10.0532L1.92817 17.8657C1.85558 17.9383 1.76941 17.9958 1.67457 18.0351C1.57973 18.0744 1.47809 18.0946 1.37543 18.0946C1.27278 18.0946 1.17113 18.0744 1.0763 18.0351C0.981458 17.9958 0.895286 17.9383 0.8227 17.8657C0.750114 17.7931 0.692535 17.7069 0.653252 17.6121C0.613969 17.5172 0.59375 17.4156 0.59375 17.3129C0.59375 17.2103 0.613969 17.1086 0.653252 17.0138C0.692535 16.919 0.750114 16.8328 0.8227 16.7602L8.08344 9.50043L0.8227 2.24067C0.676105 2.09407 0.59375 1.89525 0.59375 1.68793C0.59375 1.48062 0.676105 1.28179 0.8227 1.1352C0.969294 0.988606 1.16812 0.90625 1.37543 0.90625C1.58275 0.90625 1.78157 0.988606 1.92817 1.1352L9.74067 8.9477C9.81331 9.02026 9.87093 9.10642 9.91025 9.20126C9.94956 9.2961 9.9698 9.39777 9.9698 9.50043C9.9698 9.6031 9.94956 9.70476 9.91025 9.79961C9.87093 9.89445 9.81331 9.98061 9.74067 10.0532Z" fill="black"/>
               </svg>
                </SwiperButtonPrev>
            </Swiper>
          <div className='flex items-center justify-center mt-6'>
            <button className='py-3 px-3 bg-blue-bg rounded-2xl text-white'>Explore Our Subjects</button>

          </div>
        </div>


                



        </div>



    </section>
  )
}

export default Discover