import React from 'react'
import Hero from '../../components/hero'
import performanceSrc from '/public/image/performance.png'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'performance',
  description: '这是performance页面'
}
export default function Performance() {
  return (
    <Hero imgSrc={performanceSrc} altText='Performance page' content='放学路过稻田的小姑娘' />
  )
}
