import React, { useState, useEffect } from 'react'

import dynamic from 'next/dynamic'
const VisibilitySensor = dynamic(() => import('react-visibility-sensor'))
const OwlCarousel = dynamic(() => import('react-owl-carousel3'))

import OwlCarouselOptions from './options'

export default function TemplateHeaderCarAPD(props) {
  const { options } = props
  const [display, setDisplay] = useState(false)
  useEffect(() => {
    setDisplay(true)
  }, [])
  return <div>TemplateHeaderCarAPD</div>
}
