import React, { ReactComponentElement, ReactElement, ReactNode } from 'react'
import Link from 'next/link'
import { ListToRenderType } from '@/utilities/TypesList'


const ListToRender = (props:ListToRenderType) => {
  return(
    <div>
      <Link href={props.route}>{props.title}</Link>
    </div>
  )
}

export default ListToRender
