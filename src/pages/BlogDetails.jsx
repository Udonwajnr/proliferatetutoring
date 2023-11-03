import React from 'react'
import MainLayout from '../components/MainLayout'
import rec from '../assets/Rect6.png'

const BlogDetails = () => {
  return (
    <MainLayout>
        {/* Hero */}
        <div className='blog h-[700px]'>
        </div>

        <section className='px-10 p-10'>
            <div>
                <h1 className='text-lg font-bold text-[#1669AB]'>Why Swift UI Should Be on the Radar of Every Mobile Developer</h1>
                <p className='text-[#696984] text-[20px] my-2'>Lorem ipsum dolor sit amet consectetur. Volutpat egestas viverra quisque sit id leo turpis aliquet. Congue iaculis tortor nisi dui. In felis amet turpis id vitae fames in cras. Habitasse enim arcu pharetra quis. Vulputate quam sit porttitor dignissim aliquet metus neque ac. Porttitor dui mattis ut urna elementum purus vel faucibus ipsum. Tellus mollis risus vulputate nibh lectus id facilisis tincidunt sem. Elit rhoncus bibendum quisque elit. Felis duis velit pulvinar dictumst malesuada. Lacus in quam purus ultrices. Aliquam dignissim sed libero posuere nec arcu elementum nec in. Massa quam natoque convallis vitae tellus faucibus. Amet integer dolor viverra diam. Congue tincidunt est nisl id. Id quisque adipiscing ac laoreet mi molestie. Pretium tellus quam faucibus nunc quisque. Id turpis tincidunt consequat duis tristique. Purus at volutpat nullam elementum viverra suspendisse gravida suspendisse. Neque et quisque amet fermentum nulla mauris neque.</p>
                <div className='flex gap-x-3 mt-3'>
                    <div className='bg-[#49BBBD] text-white p-2 rounded-lg'>Affordable</div>
                    <div className='bg-[#49BBBD] text-white p-2 rounded-lg'>Stunning</div>
                    <div className='bg-[#49BBBD] text-white p-2 rounded-lg'>Making</div>
                </div>
            </div>
            <div className='mt-5'>
                <h1 className='text-[25px] font-bold text-[#1669AB]'>Leave a reply</h1>
                <p className='my-2'>Your email address will not be published.</p>
                <form action="" className='flex flex-col gap-y-3'>
                    <div>
                        <input type="text" placeholder='Name' className='w-full h-12 px-3 border focus:outline-none text-[20px] bg-[#EDEDED]' />
                    </div>
                    <div>
                        <input type="text" placeholder='Email' className='w-full h-12 px-3 border focus:outline-none text-[20px] bg-[#EDEDED]'/>
                    </div>
                    <div>
                        <textarea className='w-full h-[300px] border focus:outline-none text-[20px] px-3 bg-[#EDEDED]' placeholder='Comments...'></textarea>
                    </div>
                    <div className='flex justify-end'>
                        <button className='px-3 text-white bg-blue-bg py-2 font-bold'>Post Comment</button>
                    </div>
                </form>
            </div>
        </section>
    </MainLayout>
  )
}

export default BlogDetails