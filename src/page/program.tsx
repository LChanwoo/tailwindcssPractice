import React from 'react'
import { motion } from 'framer-motion'
const Program = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
>
    <div className='flex flex-col items-center justify-center'> 
      <h1 className='p-3 text-4xl font-extrabold'> CARE PROGRAM</h1>
      <p className='p-3 text-xl'> 고객 니즈 맞춤형 서비스 </p>
      <div>
        <div className='flex flex-col items-center justify-center'>
          <p className='p-3 text-base'>고객님의 피부 고민을 체크하여, 전반적인 피부의 문제점과 원인을 찾아드립니다.</p>
          <p className='p-3 text-base'>고객님의 고민점에 맞춰 1:1 맞춤케어로 진행 됩니다.</p>
          <p className='p-3 text-base'>케어 후에도 꾸준히 고객님의 피부재생을 위해 담당자가 밀착 점검해 드립니다.</p>
        </div>
        <div className='flex flex-col items-center justify-center p-12'>
          <img src="program1.webp" className='rounded-xl'></img>
          <div className='flex flex-col items-center'>
            <p className='p-3 text-xl font-extrabold'>멈춤, Basic Care.</p>
            <p className='p-3 text-xl'>1회 80,000</p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center p-12'>
          <img src="program2.webp" className='rounded-xl'></img>
          <div className='flex flex-col items-center'>
            <p className='p-3 text-lg font-extrabold'>멈춤, REPAIR 관리(피부 장벽 강화)</p>
            <p className='p-3 text-lg'>AIR IN 재생관리 ​→ 1회 150,000</p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center p-12'>
          <img src="program3.webp" className='rounded-xl'></img>
          <div className='flex flex-col items-center'>
            <p className='p-3 text-lg font-extrabold'>멈춤, 문제성 피부(트러블)</p>
            <p className='p-2 text-lg'>AIR-IN A/C 관리 → 1회 150.000</p>
            <p className='p-2 text-lg'>T-톡스(AMTS) → 1회 100.000</p>
            <p className='p-2 text-lg'>트러블 압출 → 1회 50.000</p>
            <p className='p-2 text-lg'>미네랄필링 → 1회 80.000</p>
            <p className='p-2 text-lg'>※ 멈춤은 피부 고민점과 피부 타입에 맞춰 선 상담 후 관리가 진행됩니다※</p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center p-12'>
          <img src="program4.webp" className='rounded-xl'></img>
          <div className='flex flex-col items-center'>
            <p className='p-2 text-lg font-extrabold'>​멈춤, 필링 프로그램</p>
            <p className='p-2 text-lg'>레드필 → 1회 135.000 </p>
            <p className='p-2 text-lg'>멈춤필(원데이필) → 1회 170.000 </p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center p-12'>
          <img src="program5.webp" className='rounded-xl'></img>
          <div className='flex flex-col items-center'>
            <p className='p-3 text-lg font-extrabold'>멈춤, 안티에이징</p>
            <p className='p-2 text-lg'>링클 프리미엄(리프팅) → 1회 140.000</p>
            <p className='p-2 text-lg'>LA - 포닝 → 1회 150.000​</p>
            <p className='p-2 text-lg'>슈어셀(맥슈어) → 1회 175.000​</p>
            <p className='p-3 text-lg'>※ 멈춤은 피부 고민점과 피부 타입에 맞춰 선 상담 후 관리가 진행됩니다※</p>
          </div>
        </div>
      </div>
      
    </div>
    </motion.div>
  )
}

export default Program