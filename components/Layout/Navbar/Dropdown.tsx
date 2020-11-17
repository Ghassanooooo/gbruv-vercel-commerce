import React from 'react'
import Link from 'next/link'
export default function Dropdown(props: any) {
  const { options } = props
  const slug = (path: string) => {
    if (path) {
      return path
        .split('/')
        .filter((i: any) => i != '')
        .join('_')
    }
  }

  return (
    <ul className="Dropdown dropdown-menu absolute z-50 md:right-0 hidden  md:-mt-4 md:pt-3 pt-1 shadow-lg">
      <div className="flex place-items-stretch bg-white h-64  min-h-full justify-center">
        {options.map((dropdown: any, idxx: any) => (
          <li key={idxx}>
            <Link
              aria-label={dropdown.title}
              href={'/page/' + slug(dropdown.path)}
            >
              <a className="rounded-t hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap ">
                <h3 className="text-xl font-bold">{dropdown.title}</h3>
              </a>
            </Link>
            <ul>
              {dropdown.options.map((dropdownOptions: any, idxxx: any) => (
                <li key={idxxx}>
                  <Link
                    aria-label={dropdownOptions.title}
                    href={'/page/' + slug(dropdownOptions.path)}
                  >
                    <a className="rounded-t hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap ">
                      {dropdownOptions.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </div>
    </ul>
  )
}
