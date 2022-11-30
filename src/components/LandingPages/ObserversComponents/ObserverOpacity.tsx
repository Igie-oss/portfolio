import React from 'react'

import { InView } from 'react-intersection-observer'
import { ObserverType } from '../../../interfaces/interface'

//*This is a observer components that use observer api
//*the c is the classNames that pass by the wrapper from children components
//*theTag is the HTMLTag from children components that can use here to be thier parentTags
//*the childTags has a opacity class thats why i use c.slice(1) below to remove the opacity-0 class and the oberve-Tag-f-0 has a opacity:0

const ObserverOpacity: React.FC<ObserverType> = ({
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
            inView ? `${propClass.slice(1)} observed-element-f-o` : propClass
          }
        >
          {children}
        </Tag>
      )}
    </InView>
  )
}

export default ObserverOpacity
