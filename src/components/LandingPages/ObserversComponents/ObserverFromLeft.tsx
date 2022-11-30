import React from 'react'

import { InView } from 'react-intersection-observer'

import { ObserverType } from '../../../interfaces/interface'

//*This is a observer components that use observer api
//*the propClass is the classNames that pass by the wrapper from children components
//*the Tag is the HTML Tag from children components that can use here to be thier parent Tags
//*the child Tags has a opacity class thats why i use propClass.slice(1) below to remove the opacity-0 class and the oberve-Tag-f-l has a opacity:0
const ObserverFromLeft: React.FC<ObserverType> = ({
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
            inView ? `${propClass.slice(1)} observed-element-f-l` : propClass
          }
        >
          {children}
        </Tag>
      )}
    </InView>
  )
}

export default ObserverFromLeft
