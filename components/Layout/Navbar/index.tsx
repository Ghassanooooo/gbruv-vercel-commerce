import React from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
const Logo = dynamic(() => import('./Logo'))
const BurgerMenu = dynamic(() => import('./BurgerMenu'))
const Navbar = dynamic(() => import('./Navbar'))

export default function Header(props: any) {

  const router = useRouter()

  console.log('router ==> ',router.asPath)

  return (
    <header style={router.asPath === '/' ?{backgroundImage:`url('/header/headerBG.svg')`, backgroundSize:'cover', height:'100vh', width:'100vw'}:{}} className="lg:px-16 px-8 py-4 md:py-0 relative">
      <div className="container mx-auto flex flex-wrap items-center pt-4 ">
        <BurgerMenu />
        <div className="flex-1 flex md:flex-none items-center justify-end md:justify-between">
          <Logo />
        </div>

        <input className="hidden" type="checkbox" id="menu-toggle" />
        {router.asPath === '/' && 
              <div className="HeaderHomePageInfo z-0">
        <h1 className="text-4xl mb-2 font-bold">Gbruv community</h1>
        <p className="text-lg">Interactive source about all the latest blog posts and news stories related to technology and coding.</p>
      </div>}
        <div
          className="NavbarContainer hidden md:flex md:items-center md:flex-1 md:w-auto w-full mb-6"
          id="menu"
        >
           
          <Navbar navbar={props.navbar}/>
        </div>
  
      </div>
   
    </header>
  )
}
