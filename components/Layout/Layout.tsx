import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import useSWR from 'swr'
import { getNavbarConfig, slug } from '../fetchers'
const ErrorBound = dynamic(() => import('./ErrorBound'))
const Navbar = dynamic(() => import('./Navbar/NewNavbar'))
const Footer = dynamic(() => import('./Footer'))
const Subscribe = dynamic(() => import('./Subscribe'))

export default function Layout(props: any) {
  const { backendApiURL, children } = props
  const { data: navbar } = useSWR(backendApiURL + 'navbar/', getNavbarConfig)
  const [footerData, setFooterData] = useState()

  function footerConfig() {
    if (!!navbar) {
      const footer: any = []
      navbar.map((cat: any, idx: any) => {
        cat && footer.push({ title: cat.title, options: [] })
        cat &&
          cat.options.map((col: any) => {
            col &&
              footer[idx].options.push({
                path: '/page/' + slug(col.path),
                title: col.title,
              })
          })
      })

      setFooterData(footer)
    }
  }
  useEffect(() => {
    footerConfig()
  }, [navbar])
  return (
    <>
      {navbar && (
        <ErrorBound>
          <Navbar backendApiURL={backendApiURL} navbar={navbar} />
          {children}
          <Subscribe />
          <Footer footerData={footerData} />
        </ErrorBound>
      )}
    </>
  )
}
