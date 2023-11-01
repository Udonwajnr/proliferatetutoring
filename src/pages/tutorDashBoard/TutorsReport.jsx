import React from 'react'
import TutorAdminLayout from '../../components/TutorAdminLayout'
import e from '../../assets/e.png'


const TutorsReport = () => {
  return (
    <TutorAdminLayout>
        <section className='mt-16'>
            <h1 className='text-lg'>Reports</h1>
            <div className='flex justify-between '>
                <div className='flex gap-x-10 mt-10'>
                    <span className='text-md cursor-pointer'>All</span>
                    <span  className='text-md cursor-pointer text-[#D9D9D9]'>Incomplete</span>
                    <span className='text-md cursor-pointer text-[#D9D9D9]'>Complete</span>
                </div>

                <div className='flex items-center border-2 h-10  rounded-3xl py-2 px-4'>
                    <input type="text" placeholder='What do you want to Search' className='focus:outline-none px-3'/>
                    <div className=''>
                        <svg width="15" height="15" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.4559 11.7946L9.52213 8.86139C10.3725 7.84051 10.7965 6.53111 10.706 5.20557C10.6155 3.88003 10.0174 2.64041 9.03624 1.74458C8.05505 0.848745 6.76626 0.365678 5.43797 0.395865C4.10969 0.426053 2.84418 0.96717 1.9047 1.90665C0.965217 2.84613 0.4241 4.11164 0.393912 5.43993C0.363725 6.76821 0.846792 8.057 1.74262 9.03819C2.63845 10.0194 3.87807 10.6174 5.20362 10.7079C6.52916 10.7984 7.83856 10.3744 8.85944 9.52408L11.7926 12.4579C11.8362 12.5014 11.8879 12.536 11.9448 12.5595C12.0017 12.5831 12.0627 12.5952 12.1243 12.5952C12.1859 12.5952 12.2469 12.5831 12.3038 12.5595C12.3607 12.536 12.4124 12.5014 12.4559 12.4579C12.4995 12.4143 12.534 12.3626 12.5576 12.3057C12.5812 12.2488 12.5933 12.1878 12.5933 12.1262C12.5933 12.0646 12.5812 12.0037 12.5576 11.9467C12.534 11.8898 12.4995 11.8381 12.4559 11.7946ZM1.34303 5.56373C1.34303 4.72934 1.59045 3.91369 2.05402 3.21992C2.51758 2.52615 3.17646 1.98542 3.94733 1.66612C4.71821 1.34681 5.56646 1.26326 6.38482 1.42604C7.20317 1.58883 7.95488 1.99062 8.54489 2.58063C9.13489 3.17063 9.53669 3.92234 9.69947 4.74069C9.86225 5.55905 9.7787 6.4073 9.4594 7.17818C9.14009 7.94905 8.59936 8.60793 7.90559 9.0715C7.21182 9.53506 6.39617 9.78248 5.56178 9.78248C4.44328 9.78124 3.37094 9.33637 2.58004 8.54547C1.78914 7.75457 1.34427 6.68223 1.34303 5.56373Z" fill="#898A8B"/>
                        </svg>
                    </div>
                </div>
            </div>

        <div className=' table p-4 '>
            <div className='unique overflow-y-scroll h-[100vh] w-full'>
            <table className='auto w-full table-fixed mt-10'>
                <thead>
                    <tr>
                        <th className='text-md  p-2'></th>
                        <th className='text-md text-left p-2'>Name</th>
                        <th className='text-md text-left p-2'>subject</th>
                        <th className='text-md text-left p-2'>Status</th>
                        <th className='text-md text-left p-2'>Summary</th>
                        <th className='text-md text-left p-2'>Report</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='p-2 '>
                             <img src={e} alt="profile" className='w-14 h-14 rounded-full' />
                        </td>

                        <td className='p-2'>
                            <span>Bamidele Moses</span>
                        </td>

                        <td className='p-2'>
                                <span>Mathematics</span>
                        </td>

                        <td className='p-2'>
                             <div className='relative bg-[#D9D9D9] h-2 rounded-lg'>
                                <div className='absolute top-0 bg-blue-600 h-2 w-[100%] left-0 rounded-lg'></div>
                             </div>
                             <span className='text-[12px] mt-2'>100% Completed</span>
                        </td>

                        <td className='text-blue-bg  p-2'>
                             Input Summary
                        </td>
                        <td className='text-blue-bg  p-2'>
                             Generate
                        </td>
                    </tr>

                    <tr>
                        <td className='p-2 '>
                             <img src={e} alt="profile" className='w-14 h-14 rounded-full' />
                        </td>

                        <td className='p-2'>
                            <span>Bamidele Moses</span>
                        </td>

                        <td className='p-2'>
                                <span>Mathematics</span>
                        </td>

                        <td className='p-2'>
                             <div className='relative bg-[#D9D9D9] h-2 rounded-lg'>
                                <div className='absolute top-0 bg-blue-600 h-2 w-[30%] left-0 rounded-lg'></div>
                             </div>
                             <span className='text-[12px] mt-2'>30% Completed</span>
                        </td>

                        <td className='text-blue-bg  p-2'>
                             Input Summary
                        </td>
                        <td className='text-blue-bg  p-2'>
                             Generate
                        </td>
                    </tr>

                    <tr>
                        <td className='p-2 '>
                             <img src={e} alt="profile" className='w-14 h-14 rounded-full' />
                        </td>

                        <td className='p-2'>
                            <span>Bamidele Moses</span>
                        </td>

                        <td className='p-2'>
                                <span>Mathematics</span>
                        </td>

                        <td className='p-2'>
                             <div className='relative bg-[#D9D9D9] h-2 rounded-lg'>
                                <div className='absolute top-0 bg-blue-600 h-2 w-[30%] left-0 rounded-lg'></div>
                             </div>
                             <span className='text-[12px] mt-2'>100% Completed</span>
                        </td>

                        <td className='text-blue-bg  p-2'>
                             Input Summary
                        </td>
                        <td className='text-blue-bg  p-2'>
                             Generate
                        </td>
                    </tr>

                    <tr>
                        <td className='p-2 '>
                             <img src={e} alt="profile" className='w-14 h-14 rounded-full' />
                        </td>

                        <td className='p-2'>
                            <span>Bamidele Moses</span>
                        </td>

                        <td className='p-2'>
                                <span>Mathematics</span>
                        </td>

                        <td className='p-2'>
                             <div className='relative bg-[#D9D9D9] h-2 rounded-lg'>
                                <div className='absolute top-0 bg-blue-600 h-2 w-[30%] left-0 rounded-lg'></div>
                             </div>
                             <span className='text-[12px] mt-2'>100% Completed</span>
                        </td>

                        <td className='text-blue-bg  p-2'>
                             Input Summary
                        </td>
                        <td className='text-blue-bg  p-2'>
                             Generate
                        </td>
                    </tr>

                    <tr>
                        <td className='p-2 '>
                             <img src={e} alt="profile" className='w-14 h-14 rounded-full' />
                        </td>

                        <td className='p-2'>
                            <span>Bamidele Moses</span>
                        </td>

                        <td className='p-2'>
                                <span>Mathematics</span>
                        </td>

                        <td className='p-2'>
                             <div className='relative bg-[#D9D9D9] h-2 rounded-lg'>
                                <div className='absolute top-0 bg-blue-600 h-2 w-[30%] left-0 rounded-lg'></div>
                             </div>
                             <span className='text-[12px] mt-2'>100% Completed</span>
                        </td>

                        <td className='text-blue-bg  p-2'>
                             Input Summary
                        </td>
                        <td className='text-blue-bg  p-2'>
                             Generate
                        </td>
                    </tr>

                    <tr>
                        <td className='p-2 '>
                             <img src={e} alt="profile" className='w-14 h-14 rounded-full' />
                        </td>

                        <td className='p-2'>
                            <span>Bamidele Moses</span>
                        </td>

                        <td className='p-2'>
                                <span>Mathematics</span>
                        </td>

                        <td className='p-2'>
                             <div className='relative bg-[#D9D9D9] h-2 rounded-lg'>
                                <div className='absolute top-0 bg-blue-600 h-2 w-[30%] left-0 rounded-lg'></div>
                             </div>
                             <span className='text-[12px] mt-2'>100% Completed</span>
                        </td>

                        <td className='text-blue-bg  p-2'>
                             Input Summary
                        </td>
                        <td className='text-blue-bg  p-2'>
                             Generate
                        </td>
                    </tr>

                    <tr>
                        <td className='p-2 '>
                             <img src={e} alt="profile" className='w-14 h-14 rounded-full' />
                        </td>

                        <td className='p-2'>
                            <span>Bamidele Moses</span>
                        </td>

                        <td className='p-2'>
                                <span>Mathematics</span>
                        </td>

                        <td className='p-2'>
                             <div className='relative bg-[#D9D9D9] h-2 rounded-lg'>
                                <div className='absolute top-0 bg-blue-600 h-2 w-[30%] left-0 rounded-lg'></div>
                             </div>
                             <span className='text-[12px] mt-2'>100% Completed</span>
                        </td>

                        <td className='text-blue-bg  p-2'>
                             Input Summary
                        </td>
                        <td className='text-blue-bg  p-2'>
                             Generate
                        </td>
                    </tr>

                    <tr>
                        <td className='p-2 '>
                             <img src={e} alt="profile" className='w-14 h-14 rounded-full' />
                        </td>

                        <td className='p-2'>
                            <span>Bamidele Moses</span>
                        </td>

                        <td className='p-2'>
                                <span>Mathematics</span>
                        </td>

                        <td className='p-2'>
                             <div className='relative bg-[#D9D9D9] h-2 rounded-lg'>
                                <div className='absolute top-0 bg-blue-600 h-2 w-[30%] left-0 rounded-lg'></div>
                             </div>
                             <span className='text-[12px] mt-2'>100% Completed</span>
                        </td>

                        <td className='text-blue-bg  p-2'>
                             Input Summary
                        </td>
                        <td className='text-blue-bg  p-2'>
                             Generate
                        </td>
                    </tr>

                    <tr>
                        <td className='p-2 '>
                             <img src={e} alt="profile" className='w-14 h-14 rounded-full' />
                        </td>

                        <td className='p-2'>
                            <span>Bamidele Moses</span>
                        </td>

                        <td className='p-2'>
                                <span>Mathematics</span>
                        </td>

                        <td className='p-2'>
                             <div className='relative bg-[#D9D9D9] h-2 rounded-lg'>
                                <div className='absolute top-0 bg-blue-600 h-2 w-[30%] left-0 rounded-lg'></div>
                             </div>
                             <span className='text-[12px] mt-2'>100% Completed</span>
                        </td>

                        <td className='text-blue-bg  p-2'>
                             Input Summary
                        </td>
                        <td className='text-blue-bg  p-2'>
                             Generate
                        </td>
                    </tr>

                    <tr>
                        <td className='p-2 '>
                             <img src={e} alt="profile" className='w-14 h-14 rounded-full' />
                        </td>

                        <td className='p-2'>
                            <span>Bamidele Moses</span>
                        </td>

                        <td className='p-2'>
                                <span>Mathematics</span>
                        </td>

                        <td className='p-2'>
                             <div className='relative bg-[#D9D9D9] h-2 rounded-lg'>
                                <div className='absolute top-0 bg-blue-600 h-2 w-[30%] left-0 rounded-lg'></div>
                             </div>
                             <span className='text-[12px] mt-2'>100% Completed</span>
                        </td>

                        <td className='text-blue-bg  p-2'>
                             Input Summary
                        </td>
                        <td className='text-blue-bg  p-2'>
                             Generate
                        </td>
                    </tr>

                    <tr>
                        <td className='p-2 '>
                             <img src={e} alt="profile" className='w-14 h-14 rounded-full' />
                        </td>

                        <td className='p-2'>
                            <span>Bamidele Moses</span>
                        </td>

                        <td className='p-2'>
                                <span>Mathematics</span>
                        </td>

                        <td className='p-2'>
                             <div className='relative bg-[#D9D9D9] h-2 rounded-lg'>
                                <div className='absolute top-0 bg-blue-600 h-2 w-[30%] left-0 rounded-lg'></div>
                             </div>
                             <span className='text-[12px] mt-2'>100% Completed</span>
                        </td>

                        <td className='text-blue-bg  p-2'>
                             Input Summary
                        </td>
                        <td className='text-blue-bg  p-2'>
                             Generate
                        </td>
                    </tr>

                    <tr>
                        <td className='p-2 '>
                             <img src={e} alt="profile" className='w-14 h-14 rounded-full' />
                        </td>

                        <td className='p-2'>
                            <span>Bamidele Moses</span>
                        </td>

                        <td className='p-2'>
                                <span>Mathematics</span>
                        </td>

                        <td className='p-2'>
                             <div className='relative bg-[#D9D9D9] h-2 rounded-lg'>
                                <div className='absolute top-0 bg-blue-600 h-2 w-[30%] left-0 rounded-lg'></div>
                             </div>
                             <span className='text-[12px] mt-2'>100% Completed</span>
                        </td>

                        <td className='text-blue-bg  p-2'>
                             Input Summary
                        </td>
                        <td className='text-blue-bg  p-2'>
                             Generate
                        </td>
                    </tr>
                    <tr>
                        <td className='p-2 '>
                             <img src={e} alt="profile" className='w-14 h-14 rounded-full' />
                        </td>

                        <td className='p-2'>
                            <span>Bamidele Moses</span>
                        </td>

                        <td className='p-2'>
                                <span>Mathematics</span>
                        </td>

                        <td className='p-2'>
                             <div className='relative bg-[#D9D9D9] h-2 rounded-lg'>
                                <div className='absolute top-0 bg-blue-600 h-2 w-[30%] left-0 rounded-lg'></div>
                             </div>
                             <span className='text-[12px] mt-2'>100% Completed</span>
                        </td>

                        <td className='text-blue-bg  p-2'>
                             Input Summary
                        </td>
                        <td className='text-blue-bg  p-2'>
                             Generate
                        </td>
                    </tr>
                    <tr>
                        <td className='p-2 '>
                             <img src={e} alt="profile" className='w-14 h-14 rounded-full' />
                        </td>

                        <td className='p-2'>
                            <span>Bamidele Moses</span>
                        </td>

                        <td className='p-2'>
                                <span>Mathematics</span>
                        </td>

                        <td className='p-2'>
                             <div className='relative bg-[#D9D9D9] h-2 rounded-lg'>
                                <div className='absolute top-0 bg-blue-600 h-2 w-[30%] left-0 rounded-lg'></div>
                             </div>
                             <span className='text-[12px] mt-2'>100% Completed</span>
                        </td>

                        <td className='text-blue-bg  p-2'>
                             Input Summary
                        </td>
                        <td className='text-blue-bg  p-2'>
                             Generate
                        </td>
                    </tr>

                    <tr>
                        <td className='p-2 '>
                             <img src={e} alt="profile" className='w-14 h-14 rounded-full' />
                        </td>

                        <td className='p-2'>
                            <span>Bamidele Moses</span>
                        </td>

                        <td className='p-2'>
                                <span>Mathematics</span>
                        </td>

                        <td className='p-2'>
                             <div className='relative bg-[#D9D9D9] h-2 rounded-lg'>
                                <div className='absolute top-0 bg-blue-600 h-2 w-[30%] left-0 rounded-lg'></div>
                             </div>
                             <span className='text-[12px] mt-2'>100% Completed</span>
                        </td>

                        <td className='text-blue-bg  p-2'>
                             Input Summary
                        </td>
                        <td className='text-blue-bg  p-2'>
                             Generate
                        </td>
                    </tr>
                    <tr>
                        <td className='p-2 '>
                             <img src={e} alt="profile" className='w-14 h-14 rounded-full' />
                        </td>

                        <td className='p-2'>
                            <span>Bamidele Moses</span>
                        </td>

                        <td className='p-2'>
                                <span>Mathematics</span>
                        </td>

                        <td className='p-2'>
                             <div className='relative bg-[#D9D9D9] h-2 rounded-lg'>
                                <div className='absolute top-0 bg-blue-600 h-2 w-[30%] left-0 rounded-lg'></div>
                             </div>
                             <span className='text-[12px] mt-2'>100% Completed</span>
                        </td>

                        <td className='text-blue-bg  p-2'>
                             Input Summary
                        </td>
                        <td className='text-blue-bg  p-2'>
                             Generate
                        </td>
                    </tr>
                    <tr>
                        <td className='p-2 '>
                             <img src={e} alt="profile" className='w-14 h-14 rounded-full' />
                        </td>

                        <td className='p-2'>
                            <span>Bamidele Moses</span>
                        </td>

                        <td className='p-2'>
                                <span>Mathematics</span>
                        </td>

                        <td className='p-2'>
                             <div className='relative bg-[#D9D9D9] h-2 rounded-lg'>
                                <div className='absolute top-0 bg-blue-600 h-2 w-[30%] left-0 rounded-lg'></div>
                             </div>
                             <span className='text-[12px] mt-2'>100% Completed</span>
                        </td>

                        <td className='text-blue-bg  p-2'>
                             Input Summary
                        </td>
                        <td className='text-blue-bg  p-2'>
                             Generate
                        </td>
                    </tr>
                    <tr>
                        <td className='p-2 '>
                             <img src={e} alt="profile" className='w-14 h-14 rounded-full' />
                        </td>

                        <td className='p-2'>
                            <span>Bamidele Moses</span>
                        </td>

                        <td className='p-2'>
                                <span>Mathematics</span>
                        </td>

                        <td className='p-2'>
                             <div className='relative bg-[#D9D9D9] h-2 rounded-lg'>
                                <div className='absolute top-0 bg-blue-600 h-2 w-[30%] left-0 rounded-lg'></div>
                             </div>
                             <span className='text-[12px] mt-2'>100% Completed</span>
                        </td>

                        <td className='text-blue-bg  p-2'>
                             Input Summary
                        </td>
                        <td className='text-blue-bg  p-2'>
                             Generate
                        </td>
                    </tr>
                    <tr>
                        <td className='p-2 '>
                             <img src={e} alt="profile" className='w-14 h-14 rounded-full' />
                        </td>

                        <td className='p-2'>
                            <span>Bamidele Moses</span>
                        </td>

                        <td className='p-2'>
                                <span>Mathematics</span>
                        </td>

                        <td className='p-2'>
                             <div className='relative bg-[#D9D9D9] h-2 rounded-lg'>
                                <div className='absolute top-0 bg-blue-600 h-2 w-[30%] left-0 rounded-lg'></div>
                             </div>
                             <span className='text-[12px] mt-2'>100% Completed</span>
                        </td>

                        <td className='text-blue-bg  p-2'>
                             Input Summary
                        </td>
                        <td className='text-blue-bg  p-2'>
                             Generate
                        </td>
                    </tr>
                    <tr>
                        <td className='p-2 '>
                             <img src={e} alt="profile" className='w-14 h-14 rounded-full' />
                        </td>

                        <td className='p-2'>
                            <span>Bamidele Moses</span>
                        </td>

                        <td className='p-2'>
                                <span>Mathematics</span>
                        </td>

                        <td className='p-2'>
                             <div className='relative bg-[#D9D9D9] h-2 rounded-lg'>
                                <div className='absolute top-0 bg-blue-600 h-2 w-[30%] left-0 rounded-lg'></div>
                             </div>
                             <span className='text-[12px] mt-2'>100% Completed</span>
                        </td>

                        <td className='text-blue-bg  p-2'>
                             Input Summary
                        </td>
                        <td className='text-blue-bg  p-2'>
                             Generate
                        </td>
                    </tr>
                    <tr>
                        <td className='p-2 '>
                             <img src={e} alt="profile" className='w-14 h-14 rounded-full' />
                        </td>

                        <td className='p-2'>
                            <span>Bamidele Moses</span>
                        </td>

                        <td className='p-2'>
                                <span>Mathematics</span>
                        </td>

                        <td className='p-2'>
                             <div className='relative bg-[#D9D9D9] h-2 rounded-lg'>
                                <div className='absolute top-0 bg-blue-600 h-2 w-[30%] left-0 rounded-lg'></div>
                             </div>
                             <span className='text-[12px] mt-2'>100% Completed</span>
                        </td>

                        <td className='text-blue-bg  p-2'>
                             Input Summary
                        </td>
                        <td className='text-blue-bg  p-2'>
                             Generate
                        </td>
                    </tr>
                    <tr>
                        <td className='p-2 '>
                             <img src={e} alt="profile" className='w-14 h-14 rounded-full' />
                        </td>

                        <td className='p-2'>
                            <span>Bamidele Moses</span>
                        </td>

                        <td className='p-2'>
                                <span>Mathematics</span>
                        </td>

                        <td className='p-2'>
                             <div className='relative bg-[#D9D9D9] h-2 rounded-lg'>
                                <div className='absolute top-0 bg-blue-600 h-2 w-[30%] left-0 rounded-lg'></div>
                             </div>
                             <span className='text-[12px] mt-2'>100% Completed</span>
                        </td>

                        <td className='text-blue-bg  p-2'>
                             Input Summary
                        </td>
                        <td className='text-blue-bg  p-2'>
                             Generate
                        </td>
                    </tr>

                    
                    

                </tbody>
            </table>
                                             
            </div>
        </div>
        </section>
    </TutorAdminLayout>
    
  )
}

export default TutorsReport