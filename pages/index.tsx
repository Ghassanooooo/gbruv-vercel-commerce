import React from 'react'
import dynamic from 'next/dynamic'
const Template = dynamic(() => import('@components/Template/Template'))
import { getPageConfig } from '@components/fetchers'
import useSWR from 'swr'
const LayoutSEOana = dynamic(() => import('@components/Layout/LayoutSEOana'))
const Layout = dynamic(() => import('@components/Layout/Layout'))
const IndexPage = (props: any) => {
  const { frontendURL, backendApiURL, pageInitData } = props
  const { data: page } = useSWR(`${backendApiURL}pages/home`, getPageConfig, {
    initialData: pageInitData,
  })

  return (
    <Layout backendApiURL={backendApiURL}>
      {!!page && (
        <LayoutSEOana page={page} frontendURL={frontendURL}>
          {page.options.map((template: any, index: any) => (
            <Template key={index} {...template} />
          ))}
        </LayoutSEOana>
      )}
    </Layout>
  )
}

export const getStaticProps = async () => {
  const { backendApiURL } = process.env
  const { frontendURL } = process.env
  const pageInitData = await getPageConfig(`${backendApiURL}pages/home`)
  return {
    props: { pageInitData, frontendURL, backendApiURL },
    revalidate: 1,
  }
}

export default IndexPage
