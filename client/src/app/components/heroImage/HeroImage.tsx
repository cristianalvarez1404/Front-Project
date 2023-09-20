import { styles } from '@/utilities/styles/styles'
import Link from 'next/link'
import React from 'react'

 const HeroImage = () => {
  return (
    <div className={`relative min-h-[70vh] w-full bg-no-repeat ${styles.normalFlex} bg-gray-400`} style={{
      backgroundImage:"url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
      backgroundSize:"cover",
      backgroundPosition:"80% 20%"
    }}>
    <div className={`${styles.custom_section} w-[90%] mx-auto`}>
      <h1 className={`text-[35px] text-[#3d3a3a] font-[600] capitalize`}>Best services for your business</h1>
      <p className='pt-2 text-[16px] font-Poppins font-[400] text-[#000000ba]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ea reprehenderit, ex odio deleniti saepe veritatis. Illo explicabo ut ullam eligendi officiis ratione? Dolorem, et exercitationem repudiandae maxime nam blanditiis?
      </p>
      <Link href={'/services'} className='inline-block '>
        <div className={`${styles.button} text-[#fff] hover:bg-[#fff] hover:text-[#000]`}>
          <span>Shop Now</span>
        </div>
      </Link>
    </div>
    </div>
  )
}

export default HeroImage