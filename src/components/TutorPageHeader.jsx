import React from 'react'
import previous from '../assets/previous.png'
import next from '../assets/next.png'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import Vector4 from '../assets/Vector_4.png'
import Vector5 from '../assets/Vector_5.png'
import img3 from '../assets/img2.png'
import img13 from '../assets/image13.png'


const TutorPageHeader = () => {
  return (
  <header className='flex'>
            <h2>Welcome</h2>
            <div>
               {/* <img src={previous} alt="" />  */}
               <span>nov 02</span>
               {/* <img src={next} alt="" /> */}
            </div>

        <div>
            <form action="" className='flex'>
                <div>
                    <select name="Sort by Classes" id="">
                        <option value=""></option>
                    </select>
                </div>
                <div>
                    <select name="Week View" id="">
                        <option value=""></option>
                    </select>
                </div>
                <div>
                    <input type="text" placeholder='Search' />
                    <img src="" alt="" />
                </div>
                
                <div>
                    <img src={Vector4} alt="" />
                </div>
                
                <div>
                    <img src={img13} alt="" />
                </div>
            </form>
        </div>
  </header>
  )
}

export default TutorPageHeader