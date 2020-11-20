import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const Dropdown = dynamic(() => import('./Dropdown'))
export default function Navbar(props: any) {
  const { navbar } = props
  const slug = (path: string) => {
    if (path) {
      return path
        .split('/')
        .filter((i: any) => i != '')
        .join('_')
    }
  }
  return (
    <nav className="w-full z-10">
      <ul className="md:flex w-full justify-center  text-base pt-4 md:pt-0">
        {navbar &&
          navbar.map((data: any, idx: any) => (
            <li
              key={idx}
              className="dropdown inline-block  w-full md:w-auto md:mb-0 mb-2"
            >
              <Link
                aria-label={data.title}
                href="/page/[page]"
                as={'/page/' + slug(data.path)}
              >
                <a className="md:px-4 py-2 md:py-4 px-0  text-green-100  inline-flex items-center">
                  <span className="mr-1"> {data.title}</span>
                  <svg
                    className="fill-current h-4 w-4 mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{' '}
                  </svg>
                </a>
              </Link>
              <Dropdown options={data.options} />
            </li>
          ))}
      </ul>
    </nav>
  )
}
