import React from 'react'
import { motion } from 'framer-motion'
const Contact = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
>
    <div className='flex flex-col items-center justify-center'> 
      <h1 className='p-3 text-4xl font-extrabold'> 운영시간</h1>
      <p className='p-1 text-xl font-bold'> 월 - 금 : pm 1시 - pm 8시</p>
      <p className='p-2 text-lg'> (Break Time : pm 3시~ pm 4시)</p>
      <p className='p-1 text-xl font-bold'> 토요일 : am 10시 - pm 4시</p>
      <p className='p-2 text-lg'> (Break Time : pm 1시~ pm 2시)</p>
      <div className='flex flex-col items-center justify-center'>
        <p className='p-1 text-xl font-bold'> 일요일 및 공휴일 : 휴무</p>
        <p className='p-2 text-xl font-bold'>​ ​카카오 채널 : 멈춤 에스테틱</p>
      </div>
      
      <h1 className='p-3 text-3xl font-bold mt-14'> 오시는 길</h1>
      <p className='p-1 text-xl '> 서울 강남구 논현로 175길 17 소석빌딩 2층</p>
      <p className='p-2 text-lg'> Tel. 010-3671-1287</p>
    </div>
    </motion.div>
  )
}

export default Contact