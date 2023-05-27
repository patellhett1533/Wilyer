import { Inter } from 'next/font/google'
import Navbar from '../component/Navbar'
import HomePage from '../component/Home'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <Navbar />
      <HomePage />
    </div>
  )
}
