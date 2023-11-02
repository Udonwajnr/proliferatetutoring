import React from 'react'
import SwiperButtonNext from './SwiperButtonNext';
import SwiperButtonPrev from './SwiperButtonPrev';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
 
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Tutors = () => {
  return (
    <section>
        <div>
            <div>
                <h2 className='text-lg'>Meet Some of Our <span className='text-blue-bg'>Prolific</span> Tutors</h2>
                <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum.
                </p>
                <button className='px-3 py-2 rounded-xl bg-blue-bg text-white'>Find Your Tutor</button>
            </div>
            <div>

            </div>
        </div>
    </section>
  )
}

export default Tutors