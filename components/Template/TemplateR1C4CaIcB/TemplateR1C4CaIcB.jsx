import React from 'react'
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
const TemplateR1C4CaIcB = (props) => {
  const {
    title,
    options,

    description,
  } = props
  return (
    <section className="popular-products-area pb-60">
      <div className="container">
        <div className="tab products-category-tab-style-2">
          <div className="title">
            <h2>
              <span className="dot" /> {title}
            </h2>
          </div>

          {/* Tabs Nav */}
          <ul className="tabs">
            <li className="current">
              <span>{description}</span>
            </li>
          </ul>
          {/* Tab Content */}
          <div className="tab_content">
            <div id="tab1" className="tabs_item_popular">
              <div>TemplateHeaderCarAPD</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TemplateR1C4CaIcB
