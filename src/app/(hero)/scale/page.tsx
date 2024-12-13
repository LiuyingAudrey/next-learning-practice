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
            <Hero imgSrc={scaleSRc} altText='Scale page' content='人生若只如初见' />
        </div>
    )
}