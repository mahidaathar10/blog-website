import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Wrapper from './wrapper/wrapper'

const heroSection = () => {
  return (
    <>
    <Wrapper>
      <h1 className='text-center text-4xl font-semibold my-2'>Generative AI</h1>
      <Image src="/image.jpeg" alt="genai" width={500} height={400}></Image>
      <p>Generative AI refers to artificial intelligence systems capable of creating new content, such as text, images, music, videos, and more, by learning patterns from existing data. These models leverage advanced techniques like deep learning and neural networks to produce creative outputs.

        Over time, Generative AI has advanced significantly, leading to the development of innovative tools and applications across various domains.

        So far, tools like ChatGPT, DALL-E, MidJourney, GitHub Copilot, and NVIDIA’s AI technologies have revolutionized industries such as content creation, design, coding, and gaming.</p>
      <div className='flex flex-col space-y-5 py-10 text-black'>

        <Link href="/allpage">
          <button className='border border-black py-3 px-9 text-white bg-black'>Explore me</button>
        </Link>
        <h2 className='font-bold text-2xl'>
          Idea Origin Date:
        </h2>
        <p>The concept of generative AI dates back to the 1950s, with foundational ideas of machine learning. Modern generative models, such as GANs (Generative Adversarial Networks), were introduced in 2014 by Ian Goodfellow.</p>
      </div>

    </Wrapper>
    </>

  )
}
export default heroSection