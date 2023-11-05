import React from 'react'

const AdminHeader = () => {
  return (
    <header className='flex justify-between items-center my-10'>
      <div>
        <h1 className='text-[45px] font-bold'>Hello, Jake!</h1>
        <span className='text-[#898A8B] text-[20px]'>Admin</span>
      </div>

      <div className='flex justify-between items-center space-x-4'>
        <div className='flex bg-[#F2F1F1] items-center rounded-3xl'>
          <div className='px-4'>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.4278 21.3204L17.5382 16.4317C18.9554 14.7303 19.6621 12.5479 19.5113 10.3387C19.3604 8.12947 18.3637 6.06344 16.7284 4.57039C15.093 3.07733 12.9451 2.27222 10.7313 2.32254C8.51745 2.37285 6.40827 3.27471 4.84247 4.84051C3.27666 6.40631 2.3748 8.5155 2.32449 10.7293C2.27418 12.9431 3.07929 15.0911 4.57234 16.7264C6.06539 18.3617 8.13143 19.3585 10.3407 19.5093C12.5499 19.6601 14.7322 18.9535 16.4337 17.5362L21.3224 22.4259C21.395 22.4985 21.4811 22.556 21.576 22.5953C21.6708 22.6346 21.7724 22.6548 21.8751 22.6548C21.9778 22.6548 22.0794 22.6346 22.1742 22.5953C22.2691 22.556 22.3552 22.4985 22.4278 22.4259C22.5004 22.3533 22.558 22.2671 22.5973 22.1723C22.6366 22.0774 22.6568 21.9758 22.6568 21.8731C22.6568 21.7705 22.6366 21.6688 22.5973 21.574C22.558 21.4792 22.5004 21.393 22.4278 21.3204ZM3.90635 10.9356C3.90635 9.545 4.31873 8.18558 5.09133 7.02929C5.86393 5.87301 6.96206 4.9718 8.24686 4.43962C9.53165 3.90744 10.9454 3.7682 12.3093 4.0395C13.6733 4.3108 14.9261 4.98046 15.9094 5.9638C16.8928 6.94714 17.5624 8.19999 17.8337 9.56392C18.1051 10.9278 17.9658 12.3416 17.4336 13.6264C16.9015 14.9112 16.0002 16.0093 14.844 16.7819C13.6877 17.5545 12.3283 17.9669 10.9376 17.9669C9.07343 17.9648 7.28621 17.2234 5.96804 15.9052C4.64987 14.587 3.90842 12.7998 3.90635 10.9356Z" fill="#898A8B"/>
            </svg>
          </div>
          <input type="text" placeholder='Quick Search' className='h-11 focus:outline-none bg-[#F2F1F1] rounded-3xl'/>
        </div>

        <div>
            <svg width="20" height="20" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.99998 20.4984C9.15498 20.4984 10.1 19.5534 10.1 18.3984H5.89998C5.89998 19.5534 6.83448 20.4984 7.99998 20.4984ZM14.3 14.1984V8.94844C14.3 5.72494 12.578 3.02644 9.57498 2.31244V1.59844C9.57498 0.726938 8.87148 0.0234375 7.99998 0.0234375C7.12848 0.0234375 6.42498 0.726938 6.42498 1.59844V2.31244C3.41148 3.02644 1.69998 5.71444 1.69998 8.94844V14.1984L0.345481 15.5529C-0.316019 16.2144 0.145981 17.3484 1.08048 17.3484H14.909C15.8435 17.3484 16.316 16.2144 15.6545 15.5529L14.3 14.1984Z" fill="#186BAD"/>
            </svg>
        </div>
      </div>
    </header>
  )
}

export default AdminHeader