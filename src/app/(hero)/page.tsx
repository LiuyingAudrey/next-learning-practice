import HomeSrc from '/public/image/home.png'
import Hero from '../components/hero'
import { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'home',
    description: '这是home页面'
}
export default function Page() {
    return (
        <Hero imgSrc={HomeSrc} altText='Home page' content='Home页面 从前慢' />
    )
}