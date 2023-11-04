import React,{useState} from 'react'

const Accordion = () => {
    const [isActive,setIsActive] = useState(null);
    const accordionData = [
        {
            title:"Where can I watch",
            content:"Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla."
        },
        {
            title:"Where can I watch",
            content:"Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla."
        },
        {
            title:"Where can I watch",
            content:"Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla."
        },
        {
            title:"Where can I watch",
            content:"Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla."
        },
    ]
    const toggle =(i)=>{
        if(isActive === i){
             return setIsActive(null)
        }
        setIsActive(i)
    }

    return (
    <div className='py-10'>
        {
            accordionData.map((data,i)=>{
                return(        
                     
                    <div className='accordion py-3 cursor-pointer max-w-[1200px] m-auto my-8'>
                        <div className='flex'>
                            <div className='w-1/12'>
                                <span className='text-[40px] text-[#b5b5b8] font-bold'>0{i+1}</span>
                            </div>
                            <div className='w-full'>
                                <div className='w-full flex justify-between' onClick={()=>toggle(i)}>
                                    <div className='text-[40px] font-bold'>{data.title}</div>
                                    <div className='text-lg font-bold black bg-[#F3F5F6] text-center rounded-full w-16 h-16'> {isActive===i? "-":"+"}</div>
                                </div>

                                {
                            isActive===i &&
                                <div>
                                    <p className='my-2'>
                                        {data.content}
                                    </p>
                                </div>
                        }


                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Accordion