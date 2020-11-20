import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function CardBlog({payload}) {
    console.log('CardBlog ==> ', payload)
    return (
        <div className="w-screen pb-10 md:mx-0 md:p-4 md:w-1/3 ">
        <div className="h-full border-2  rounded-lg overflow-hidden">
        <Link
                    href="/viewDoc/[viewDoc]"
                    as={'/viewDoc/' + payload.contentType + '_' + payload._id}
                  >
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={payload.image}
            alt={payload.title}
            width='350'
            height='350'
          />
          </Link>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
            {payload.categorie} 
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {payload.title} 
            </h1>
            <p className="leading-relaxed mb-3">
            {payload.description}
            </p>
            <div className="flex items-center flex-wrap ">
            <Link
                    href="/viewDoc/[viewDoc]"
                    as={'/viewDoc/' + payload.contentType + '_' + payload._id}
                  >
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              </Link>
              <span className="text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
               {payload.views}
              </span>
             
            </div>
          </div>
        </div>
      </div>
     
    )
}
