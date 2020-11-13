import React, { Component } from 'react'
import Link from 'next/link'

import OwlCarouselOptions from './options'
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(() => import('react-owl-carousel3'), { ssr: false })
const RenderImage = (img) => {
  if (typeof img === 'object') {
    return <img src={URL.createObjectURL(img)} alt="image" />
  }
  return <img src={img} alt="image" />
}

const TemplateR1C4CaHovSt = (props) => {
  const { title, options } = props

  console.log('TemplateR1C4CaHovSt ==> ', props)
  return (
    <section className="best-sellers-area pb-60">
      <div className="container">
        <div className="section-title without-bg">
          <h2>
            <span className="dot" /> {title}
          </h2>
        </div>

        <div className="row">
          <div>TemplateHeaderCarAPD</div>
        </div>
      </div>
    </section>
  )
}

export default TemplateR1C4CaHovSt
