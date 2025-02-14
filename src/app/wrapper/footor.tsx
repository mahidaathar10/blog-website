import { Facebook, Github, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className=' bg-blue-950 py-3 text-white font-semibold'>
            <ul className=' flex justify-around py-3'>
                <li className='space-x-6 flex font-semibold text-xl  flex-col items-start justify-start px-5'>
                    <h2 className='font-bold text-2xl py-4'>Quick Links</h2>
                    <Link href="/">Home</Link>
                    <Link href="/allpage">Blog</Link>
                    <Link href="/contact">Contact</Link>

                </li>
                <li className='space-y-3'>
                    <h2 className='font-bold text-2xl py-4'>Social Media</h2>
                    <Link href="https://www.linkedin.com/in/fizza-jawed-32a7102ba" target='_blank' className='flex gap-x-3'> <Linkedin /></Link>
                    <Link href="https://github.com/fizzajawed85" target='_blank' className='flex gap-x-3'> <Github /></Link>
                    <Link href="#" target='_blank' className='flex gap-x-3'>  <Facebook/></Link>
                   
                </li>
            </ul>
            <h2 className='text-center bg-slate-950 py-3'> © 2025 Fizza Jawed. All Rights Reserved.</h2>




        </div>
    )
}
export default Footer