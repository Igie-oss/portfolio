import { useState, useEffect } from 'react'

type CaroselType = {
  addedClassRight: string
  addedClassCenter: string
  addedClassLeft: string
}

const useCarosel = (counter: number): CaroselType => {
  const [addedClassLeft, setAddedClassLeft] = useState('left')
  const [addedClassCenter, setAddedClassCenter] = useState('center')
  const [addedClassRight, setAddedClassRight] = useState('right')

  useEffect(
    () => {
      if (counter === 0) {
        setAddedClassLeft('left')
        setAddedClassCenter('center')
        setAddedClassRight('right')
      } else if (counter === 1) {
        setAddedClassLeft('right')
        setAddedClassCenter('left')
        setAddedClassRight('center')
      } else if (counter === 2) {
        setAddedClassLeft('center')
        setAddedClassCenter('right')
        setAddedClassRight('left')
      }
    },
    [counter]
  )

  return {
    addedClassLeft,
    addedClassCenter,
    addedClassRight
  }
}

export default useCarosel
