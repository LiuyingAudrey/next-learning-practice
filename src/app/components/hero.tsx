import React from 'react'
import Image, { StaticImageData } from 'next/image'
interface IProps {
    imgSrc: StaticImageData
    altText: string
    content: string
}
export default function Hero(props: IProps) {
    return (    
        <div className=' h-screen relative'>
            {/* 图片 */}
            <div className='absolute inset-0 -z-10'>
                <Image src={props.imgSrc} fill style={{ objectFit: 'cover' }} alt={props.altText} />
                {/* 覆盖在图片上方的渐变背景 */}
                <div className='absolute inset-0 bg-gradient-to-r from-gray-800'></div>
            </div>
            {/* 文案 */}
            <div className='flex justify-center pt-48'>
                <h1 className='text-white text-6xl'>{ props.content}</h1>
            </div>
        </div>
    )
}
