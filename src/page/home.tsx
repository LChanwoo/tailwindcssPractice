import React from 'react'
import { motion} from 'framer-motion'
const Home = () => {
  return (
    <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
    >
    <div className='h-full' style={{minHeight:"500px",}}>
        <div className='flex flex-col items-center h-full m-16 md:flex-row' >
            <img src="logo.webp"></img>
            <h1 className='text-5xl font-bold'>멈춤컴퍼니</h1>
        </div>
        <div>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-2xl p-3'>당신의 피부고민,멈춤</p>
                <p className='text-xl p-3 font-extrabold'>멈춤,어떤 피부 고민을 해결해 드릴까요?</p>

                <p className='text-xl p-3'>멈춤에선</p>
                <div>
                    <li className='p-3 '>고객님의 피부 고민을 체크하여, 전반적인 피부의 문제점과 원인을 찾아드립니다.</li>
                    <li className='p-3 '>고객님의 고민점에 맞춰 1:1 맞춤케어로 진행 됩니다.</li>
                    <li className='p-3 '>케어 후에도 꾸준히 고객님의 피부재생을 위해 담당자가 밀착 점검해 드립니다.</li>
                </div>
                <p className='text-xl p-3'> 멈춤에서 시작한다면</p>

                <p className='text-xl p-3'>피부고민,오늘부터 멈출 수 있습니다.</p>

                <p className='text-2xl p-3'>​당신의 피부고민, 멈춤에서 시작하세요</p>
            </div>
        </div>
    </div>
    </motion.div>
  )
}

export default Home