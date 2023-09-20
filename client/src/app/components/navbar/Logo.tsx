import Link from 'next/link'
import React from 'react'

 const Logo = () => {
  return (
   <div className="text-2xl">
        <Link href={"/"}>
          <h1 className="font-medium">
            Project<span className="text-2xl font-light">NN</span>
          </h1>
        </Link>
      </div>
  )
}

export default Logo;