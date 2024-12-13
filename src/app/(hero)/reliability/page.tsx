import React from 'react'
import Hero from '../../components/hero'
import reliableSrc from '/public/image/reliable.png'
import { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'reliability',
    description: '这是reliability页面'
}
export default function Reliability() {
    return (
        <Hero imgSrc={reliableSrc} altText='Reliable page' content='人间四月芳菲尽 山寺桃花始盛开' />
    )
}