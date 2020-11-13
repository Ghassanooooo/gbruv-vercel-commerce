import React from 'react'

export default function temp2() {
  return (
    <div className="bg-gray-100 antialiased font-sans">
      <header className="lg:px-16 px-8 bg-green-700 shadow-md py-4 md:py-0">
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="flex-1 flex justify-between items-center">
            <a
              href=""
              className="text-xl font-semibold text-green-100 hover:text-white tracking-normal"
            >
              Tailwind CSS
            </a>
          </div>

          <label
            htmlFor="menu-toggle"
            className="pointer-cursor md:hidden block"
          >
            <svg
              className="fill-current text-gray-300 hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" />

          <div
            className="hidden md:flex md:items-center md:w-auto w-full"
            id="menu"
          >
            <nav>
              <ul className="md:flex items-center justify-between text-base pt-4 md:pt-0">
                <li>
                  <a
                    className="md:px-4 py-2 md:py-4 px-0 block text-green-100 hover:text-white md:hover:bg-green-800"
                    href=""
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    className="md:px-4 py-2 md:py-4 px-0 block text-green-100 hover:text-white md:hover:bg-green-800"
                    href=""
                  >
                    Treatments
                  </a>
                </li>
                <li>
                  <a
                    className="md:px-4 py-2 md:py-4 px-0 block text-green-100 hover:text-white md:hover:bg-green-800"
                    href=""
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    className="md:px-4 py-2 md:py-4 px-0 block text-green-100 hover:text-white md:hover:bg-green-800"
                    href=""
                  >
                    Contact Us
                  </a>
                </li>
                <li className="dropdown inline-block relative w-full md:w-auto md:mb-0 mb-2">
                  <a className="md:px-4 py-2 md:py-4 px-0 block text-green-100 hover:text-white md:hover:bg-green-800 inline-flex items-center">
                    <span className="mr-1">Dropdown</span>
                    <svg
                      className="fill-current h-4 w-4 mt-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{' '}
                    </svg>
                  </a>
                  <ul className="dropdown-menu absolute z-50 md:right-0 hidden text-gray-700 md:-mt-4 md:pt-3 pt-1 shadow-lg">
                    <li className="">
                      <a
                        className="rounded-t bg-white hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap"
                        href=""
                      >
                        Testing Link One
                      </a>
                    </li>
                    <li className="">
                      <a
                        className="bg-white hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap"
                        href=""
                      >
                        Testing Link Two
                      </a>
                    </li>
                    <li className="">
                      <a
                        className="rounded-b bg-white hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap"
                        href=""
                      >
                        Testing Link Three, Nice!
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href=""
                    className="md:ml-4 flex items-center justify-start pointer-cursor"
                  >
                    <img
                      className="rounded-full w-6 h-6 bg-green-800"
                      src="https://unavatar.now.sh/dalton@sutton.io"
                    />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto h-screen bg-white text-gray-800 shadow-lg">
        <div className="bg-grey-100 min-h-screen">
          <div className=" mx-auto">
            <div className="relative">
              <div className="relative lg:flex overflow-hidden">
                <div className="h-56 lg:h-auto lg:w-5/12 relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-green-700 opacity-75"></div>
                  <h1 className="relative text-white text-5xl">Testing</h1>
                </div>
                <div className="relative lg:w-7/12 bg-gray-200">
                  <svg
                    className="absolute h-full text-gray-200 w-24 -ml-12"
                    fill="currentColor"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <polygon points="50,0 100,0 50,100 0,100" />
                  </svg>
                  <div className="relative py-12 lg:py-24 px-8 lg:px-16 text-gray-700 leading-relaxed">
                    <p>
                      This is just a test to provide some text on this element.
                      Minim excepteur exercitation eiusmod proident id
                      voluptate. Nisi enim dolore irure nisi ex enim labore
                      mollit dolore incididunt nostrud elit ut. Irure culpa qui
                      aliqua velit pariatur labore. Nulla voluptate sunt do
                      pariatur sunt nisi laborum in esse ad.
                    </p>
                    <p className="mt-6">
                      <a
                        href="#"
                        className="font-medium text-green-600 hover:text-green-900"
                      >
                        Learn more about our users &rarr;
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="lg:px-16 px-8 bg-green-800 py-10 pb-15 shadow-md">
        <div className="container mx-auto flex flex-wrap">
          <div className="w-full md:w-3/6">
            <div className="text-green-100 mb-3 md:mb-0 pr-0 md:pr-10">
              <span className="text-xl text-green-100">Tailwind CSS</span>
              <p className="text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                mattis ipsum nec finibus luctus. Sed tempus ultricies leo eget
                dignissim. Aliquam ac sapien ornare, vestibulum dui eget, varius
                libero. Sed ut risus posuere, vestibulum quam vitae, dictum sem.
              </p>

              <form className="my-4">
                <span className="text-lg text-green-100">Newsletter</span>
                <div className="flex mt-2">
                  <input
                    className="flex-1 shadow appearance-none border rounded w-full py-2 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                  <button
                    className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full md:w-1/6">
            <div className="text-green-100 mb-3 md:mb-0">
              <span className="text-lg">Links 1</span>
              <ul className="">
                <li className="mt-2">
                  <a href="" className=" text-green-100 hover:text-white">
                    FAQ
                  </a>
                </li>
                <li className="mt-2">
                  <a href="" className=" text-green-100 hover:text-white">
                    Help
                  </a>
                </li>
                <li className="mt-2">
                  <a href="" className=" text-green-100 hover:text-white">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/6">
            <div className="text-green-100 mb-3 md:mb-0">
              <span className="text-lg">Links 2</span>
              <ul className="">
                <li className="mt-2">
                  <a href="" className=" text-green-100 hover:text-white">
                    FAQ
                  </a>
                </li>
                <li className="mt-2">
                  <a href="" className=" text-green-100 hover:text-white">
                    Help
                  </a>
                </li>
                <li className="mt-2">
                  <a href="" className=" text-green-100 hover:text-white">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/6">
            <div className="text-green-100 mb-3 md:mb-0">
              <span className="text-lg">Links 3</span>
              <ul className="">
                <li className="mt-2">
                  <a href="" className=" text-green-100 hover:text-white">
                    FAQ
                  </a>
                </li>
                <li className="mt-2">
                  <a href="" className=" text-green-100 hover:text-white">
                    Help
                  </a>
                </li>
                <li className="mt-2">
                  <a href="" className=" text-green-100 hover:text-white">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
