import React from 'react'
import Hero from '../../components/hero'
import scaleSRc from '/public/image/www.png'
import { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'scale',
    description: '这是scale页面'
}
export default function Scale() {
    return (
        <div>
            <Hero imgSrc={scaleSRc} altText='Scale page' content='从前初始这世间 万般流连 看着天边似在眼前' />
        </div>
    )
}