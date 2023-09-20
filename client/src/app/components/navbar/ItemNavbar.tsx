import { styles } from '@/utilities/styles/styles';
import Link from 'next/link'
import React from 'react'

 const ItemNavbar = ({itemInfo}:any) => {
  return (
    <div className="text-lg text-xl">
          <Link href={`/${itemInfo.title ? itemInfo.title : ""}`} className={`${styles.normalFlex} gap-1 pl-1 pr-1`}> 
            {itemInfo.title}
          </Link>
    </div>
  )
}

export default ItemNavbar