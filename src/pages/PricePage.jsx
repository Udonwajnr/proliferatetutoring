import React from 'react'
import MainLayout from '../components/MainLayout'
import pic from '../assets/Rect7.png'
import pic1 from '../assets/cop1.png'
import { Link } from 'react-router-dom'
import Accordion from '../components/Accordion'

const PricePage = () => {
  return (
    <MainLayout>
        <section>
                <div className='relative'>
                    <img src={pic} alt="" className='w-full h-full'/>
                    <div className='absolute text-center top-[50%] w-full'>
                        <h3 className='text-white font-bold text-[40px]'>Pricing Plan</h3>
                    </div>
                </div>
        </section>

        <section className='py-10 flex flex-wrap gap-10 items-center justify-center'>
            <div className=' w-[400px] shadow-md bg-white p-3 flex flex-col gap-y-4 py-10' >
                <img src={pic1} alt="pic" className='w-24' />
                <div>
                    <h2 className='text-[50px] font-bold my-5'>$12 <span className='text-[16px]'>/EDITOR</span></h2>
                    <div className='flex flex-col gap-y-4'>
                        <div className='flex items-center gap-x-4'>
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_b_2065_8255)">
                                <rect opacity="0.48" width="32" height="32" rx="16" fill="#186BAD"/>
                                </g>
                                <path d="M20.4815 12.6406L14.3215 18.8006L11.5215 16.0006" stroke="#F4E5E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <defs>
                                <filter id="filter0_b_2065_8255" x="-48" y="-48" width="128" height="128" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="24"/>
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2065_8255"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2065_8255" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                            
                            <span className='text-md font-'>Components-driven system</span>
                        </div>

                        <div className='flex items-center gap-x-4'>
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_b_2065_8255)">
                                <rect opacity="0.48" width="32" height="32" rx="16" fill="#186BAD"/>
                                </g>
                                <path d="M20.4815 12.6406L14.3215 18.8006L11.5215 16.0006" stroke="#F4E5E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <defs>
                                <filter id="filter0_b_2065_8255" x="-48" y="-48" width="128" height="128" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="24"/>
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2065_8255"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2065_8255" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                            
                            <span className='text-md font-'>Sales-boosting landing pages</span>
                        </div>

                        <div className='flex items-center gap-x-4'>
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_b_2065_8255)">
                                <rect opacity="0.48" width="32" height="32" rx="16" fill="#186BAD"/>
                                </g>
                                <path d="M20.4815 12.6406L14.3215 18.8006L11.5215 16.0006" stroke="#F4E5E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <defs>
                                <filter id="filter0_b_2065_8255" x="-48" y="-48" width="128" height="128" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="24"/>
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2065_8255"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2065_8255" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                            
                            <span className='text-md font-'>Awesome Feather icons pack</span>
                        </div>

                        <div className='flex items-center gap-x-4'>
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_b_2065_8255)">
                                <rect opacity="0.48" width="32" height="32" rx="16" fill="#186BAD"/>
                                </g>
                                <path d="M20.4815 12.6406L14.3215 18.8006L11.5215 16.0006" stroke="#F4E5E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <defs>
                                <filter id="filter0_b_2065_8255" x="-48" y="-48" width="128" height="128" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="24"/>
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2065_8255"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2065_8255" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                            
                            <span className='text-md font-'>Themed into 3 different styles</span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center mt-14'>
                    <button className='text-blue-bg text-[20px] border border-[#ADADAD] py-3 w-full rounded-md hover:bg-blue-bg hover:text-white transition duration-100 hover:duration-100'>Extended License</button>
                </div>
            </div>

            <div className=' w-[400px] shadow-md bg-white p-3 flex flex-col gap-y-4 py-10' >
                <img src={pic1} alt="pic" className='w-24' />
                <div>
                    <h2 className='text-[50px] font-bold my-5'>$12 <span className='text-[16px]'>/EDITOR</span></h2>
                    <div className='flex flex-col gap-y-4'>
                        <div className='flex items-center gap-x-4'>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_b_2065_8255)">
                                    <rect opacity="0.48" width="32" height="32" rx="16" fill="#186BAD"/>
                                    </g>
                                    <path d="M20.4815 12.6406L14.3215 18.8006L11.5215 16.0006" stroke="#F4E5E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <defs>
                                    <filter id="filter0_b_2065_8255" x="-48" y="-48" width="128" height="128" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="24"/>
                                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2065_8255"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2065_8255" result="shape"/>
                                    </filter>
                                    </defs>
                                </svg>

                            
                            <span className='text-md font-'>Components-driven system</span>
                        </div>

                        <div className='flex items-center gap-x-4'>
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_b_2065_8255)">
                                <rect opacity="0.48" width="32" height="32" rx="16" fill="#186BAD"/>
                                </g>
                                <path d="M20.4815 12.6406L14.3215 18.8006L11.5215 16.0006" stroke="#F4E5E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <defs>
                                <filter id="filter0_b_2065_8255" x="-48" y="-48" width="128" height="128" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="24"/>
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2065_8255"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2065_8255" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                            
                            <span className='text-md font-'>Sales-boosting landing pages</span>
                        </div>

                        <div className='flex items-center gap-x-4'>
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_b_2065_8255)">
                                <rect opacity="0.48" width="32" height="32" rx="16" fill="#186BAD"/>
                                </g>
                                <path d="M20.4815 12.6406L14.3215 18.8006L11.5215 16.0006" stroke="#F4E5E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <defs>
                                <filter id="filter0_b_2065_8255" x="-48" y="-48" width="128" height="128" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="24"/>
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2065_8255"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2065_8255" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                            
                            <span className='text-md font-'>Awesome Feather icons pack</span>
                        </div>

                        <div className='flex items-center gap-x-4'>
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_b_2065_8255)">
                                <rect opacity="0.48" width="32" height="32" rx="16" fill="#186BAD"/>
                                </g>
                                <path d="M20.4815 12.6406L14.3215 18.8006L11.5215 16.0006" stroke="#F4E5E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <defs>
                                <filter id="filter0_b_2065_8255" x="-48" y="-48" width="128" height="128" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="24"/>
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2065_8255"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2065_8255" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                            
                            <span className='text-md font-'>Themed into 3 different styles</span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center mt-14'>
                    <button className='text-blue-bg text-[20px] border border-[#ADADAD] py-3 w-full rounded-md hover:bg-blue-bg hover:text-white transition duration-100 hover:duration-100'>Extended License</button>

                </div>
            </div>

            <div className=' w-[400px] shadow-md bg-white p-3 flex flex-col gap-y-4 py-10' >
                <img src={pic1} alt="pic" className='w-24' />
                <div>
                    <h2 className='text-[50px] font-bold my-5'>$12 <span className='text-[16px]'>/EDITOR</span></h2>
                    <div className='flex flex-col gap-y-4'>
                        <div className='flex items-center gap-x-4'>
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_b_2065_8255)">
                                <rect opacity="0.48" width="32" height="32" rx="16" fill="#186BAD"/>
                                </g>
                                <path d="M20.4815 12.6406L14.3215 18.8006L11.5215 16.0006" stroke="#F4E5E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <defs>
                                <filter id="filter0_b_2065_8255" x="-48" y="-48" width="128" height="128" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="24"/>
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2065_8255"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2065_8255" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                            
                            <span className='text-md font-'>Components-driven system</span>
                        </div>

                        <div className='flex items-center gap-x-4'>
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_b_2065_8255)">
                                <rect opacity="0.48" width="32" height="32" rx="16" fill="#186BAD"/>
                                </g>
                                <path d="M20.4815 12.6406L14.3215 18.8006L11.5215 16.0006" stroke="#F4E5E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <defs>
                                <filter id="filter0_b_2065_8255" x="-48" y="-48" width="128" height="128" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="24"/>
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2065_8255"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2065_8255" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                            
                            <span className='text-md font-'>Sales-boosting landing pages</span>
                        </div>

                        <div className='flex items-center gap-x-4'>
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_b_2065_8255)">
                                <rect opacity="0.48" width="32" height="32" rx="16" fill="#186BAD"/>
                                </g>
                                <path d="M20.4815 12.6406L14.3215 18.8006L11.5215 16.0006" stroke="#F4E5E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <defs>
                                <filter id="filter0_b_2065_8255" x="-48" y="-48" width="128" height="128" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="24"/>
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2065_8255"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2065_8255" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                            
                            <span className='text-md font-'>Awesome Feather icons pack</span>
                        </div>

                        <div className='flex items-center gap-x-4'>
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_b_2065_8255)">
                                <rect opacity="0.48" width="32" height="32" rx="16" fill="#186BAD"/>
                                </g>
                                <path d="M20.4815 12.6406L14.3215 18.8006L11.5215 16.0006" stroke="#F4E5E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <defs>
                                <filter id="filter0_b_2065_8255" x="-48" y="-48" width="128" height="128" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="24"/>
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2065_8255"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2065_8255" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                            
                            <span className='text-md font-'>Themed into 3 different styles</span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center mt-14'>
                    <button className='text-blue-bg text-[20px] border border-[#ADADAD] py-3 w-full rounded-md hover:bg-blue-bg hover:text-white transition duration-100 hover:duration-100'>Extended License</button>

                </div>
            </div>
        </section>

        <section className='bg-blue-bg flex flex-col items-center
         justify-center space-y-9 px-10 py-10 mx-10 m-auto rounded-2xl'>
            <h2 className='text-lg text-white font-bold text-center'>Proliferate is affordable for all child!</h2>
            <p className='text-white text-center max-w-[1200px] text-[30px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>
            <Link className='bg-white py-3 px-3 rounded-md text-md font-bold'>Start Learning Now</Link>
        </section>
        
        {/* accordion */}
        <section className='py-10'>
            <h1 className='text-center text-lg font-bold'>FREQUENTLY ANSWERED <span className='text-blue-bg '>QUESTIONS</span></h1>
            <Accordion/>
        </section>


    </MainLayout>
  )
}

export default PricePage