import React from 'react'
import { InView } from 'react-intersection-observer'

import { ObserverType } from '../../../interfaces/interface'
//*This is a observer components that use observer api
//*the c is the classNames that pass by the wrapper from Children components
//*the Tag is the HTML Tag from Children components that can use here to be thier parent Tags
//*the child Tags has a opacity class thats why i use c.slice(1) below to remove the opacity-0 class and the oberve-Tag-f-r has a opacity:0
const ObserverFromRight: React.FC<ObserverType> = ({
  children,
  propClass,
  Tag
}) => {
  return (
    <InView>
      {({ inView, ref, entry }) => (
        <Tag
          ref={ref}
          className={
            inView ? `${propClass.slice(1)} observed-element-f-r` : propClass
          }
        >
          {children}
        </Tag>
      )}
    </InView>
  )
}

export default ObserverFromRight
