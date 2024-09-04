import React from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'


const HowItWorks = () => {
  const videoRef =useRef();
 
 useGSAP(() =>{


 
  gsap.from('#chip',{
    scale:2,
    duration:2,
    opacity:0,
    markers:true,
    reverse:true,
    scrollTrigger: {
      trigger: '#chip',
      start: 'top 60%',
      ease: 'power2.inOut',
      toggleActions: 'restart reverse restart reverse',
    },
   })



 },[])
 
  return (
    <section className='gscroll sm:py-32 py-20 sm:px-10 px-5  '>
     <div className='screen-max-width'>
     <div id="chip" className='mb-10  flex-center '>
        <img src={chipImg} alt="" height={180} width={180}/>
      </div>
      <div className=' hiw-title'>
        <h1 className='my-2 '>A17 pro chip.</h1>
        <h1 className=''>A monster win for gaming.</h1>
      </div>
      <div className='hiw-subtitle'>
        <p>it's here.The biggest redesign in the history of apple GPUs.</p>
      </div>
     </div>


      <div className=' mb-14  md:mt-2'>

        <div id="fvideo"className='relative  sm:m-1 lg:mx-52 lg:mt-20 h-full flex-center'>
          <div className='overflow-hidden'>
            <img src={frameImg} className='bg-transparent relative z-10 ' alt="" />
          </div>

          <div className='absolute  w-[95%] h-[90%] overflow-hidden'>
            <video playsInline muted autoPlay ref={videoRef} preload='none' className='rounded-[30px]'>
              <source  src={frameVideo} type='video/mp4'/>
            </video>
          </div>
          

        </div>
        <p className="text-gray font-semibold text-center">Honkai: Star Rail</p>
      </div>

     <div className='w-full items-center flex-center md:flex-row flex-col md:gap-44 gap-2'>
     <div className='md:flex-row flex-col md:w-[28%] w-[68%]'>
        <div className='flex-col flex-center gap-5'>
          <p className='text-slate-400'>A17 pro is entirely new clas of iPhone chip that delivers our <span className='text-white font-semibold'>best graphics performence so far</span></p>
          <p className='text-slate-400'>Mobile <span className='text-white font-semibold'>games will look and feel so immersive</span>, with incredibly detailed environments and more realistic charecters.And with industry-leading speed and efficiency,A17 Pro takes fast and runs with it.</p>
        </div>
      </div>

      <div className='gap-5 flex-col'>
        <p className='text-slate-400'>New</p>
        <h1 className='text-5xl font-semibold'>Pro-class GPU</h1>
        <p className='text-slate-400'>with 6 cores</p>
      </div>
     </div>

    </section>
  )
}

export default HowItWorks