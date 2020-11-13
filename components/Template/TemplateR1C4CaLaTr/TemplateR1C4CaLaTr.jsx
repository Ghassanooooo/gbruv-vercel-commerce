import React, { Component } from 'react'
import Link from 'next/link'

import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(() => import('react-owl-carousel3'), { ssr: false })
import OwlCarouselOptions from './options'

const RenderImage = (img) => {
  if (typeof img === 'object') {
    return <img src={URL.createObjectURL(img)} alt="image" />
  }
  return <img src={img} alt="image" />
}
const TemplateR1C4CaLaTr = (props) => {
  const { title, options } = props
  return (
    <section className="offer-area ptb-60">
      <div className="container">
        <div className="section-title">
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

export default TemplateR1C4CaLaTr
