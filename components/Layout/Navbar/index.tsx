import React from 'react'
import dynamic from 'next/dynamic'
const Logo = dynamic(() => import('./Logo'))
const BurgerMenu = dynamic(() => import('./BurgerMenu'))
const Navbar = dynamic(() => import('./Navbar'))

export default function Header(props: any) {
  return (
    <header className="lg:px-16 px-8 bg-green-700 shadow-md py-4 md:py-0">
      <div className="container mx-auto flex flex-wrap items-center ">
        <BurgerMenu />
        <div className="flex-1 flex md:flex-none items-center justify-end md:justify-between">
          <Logo />
        </div>

        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div
          className="hidden md:flex md:items-center md:flex-1 md:w-auto w-full"
          id="menu"
        >
          <Navbar navbar={props.navbar} />
        </div>
      </div>
    </header>
  )
}
