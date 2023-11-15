'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { GrClose } from 'react-icons/gr'
import navItems from '@/utils/navItems'
import logoBlack from '../../assets/logo_black.png'
import logoWhite from '../../assets/logo_white.png'

const HomeNavbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false)
  const [navbarBackground, setNavbarBackground] = useState(false)

  const changeBackground = () => {
    window.scrollY >= 66
      ? setNavbarBackground(true)
      : setNavbarBackground(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground)
    return () => {
      window.removeEventListener('scroll', changeBackground)
    }
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 z-30 w-full py-4 px-8 ${
        navbarBackground ? 'bg-white' : 'bg-transparent text-white'
      }`}
    >
      <div className="flex justify-between items-center max-w-[1600px] m-auto">
        <div>
          <Link href="/">
            <Image
              className={`w-28 md:w-32`}
              src={navbarBackground ? logoBlack : logoWhite}
              width={100}
              alt="Logo"
            />
          </Link>
        </div>
        <div
          className="text-3xl md:hidden cursor-pointer relative z-20"
          onClick={() => setOpenSidebar(!openSidebar)}
        >
          {openSidebar ? <GrClose /> : <FiMenu />}
        </div>
        {/* menu desktop */}
        <ul
          className={`hidden p-4 text-sm lg:text-base font-bold md:flex gap-4 lg:gap-7`}
        >
          {navItems.map((item, index) => (
            <li
              key={index}
              className="py-9 flex items-center md:py-0 cursor-pointer hover:text-opacity-50 duration-200"
              style={{
                opacity: item.href === '/' ? '0.5' : ''
              }}
            >
              <Link href={item.href}>{item.text}</Link>
            </li>
          ))}
        </ul>
        {/* menu mobile */}
        <ul
          className={`fixed top-0 ${
            openSidebar ? 'right-0' : 'right-[-100%]'
          } duration-200 text-black pt-14 px-8 w-full h-[100vh] text-center font-bold bg-white sm:w-1/2 md:right-[-100%]`}
        >
          {navItems.map((item, index) => (
            <li
              key={index}
              className="py-9 cursor-pointer text-xl hover:opacity-50 duration-200"
              style={{
                opacity: item.href === '/' ? '0.5' : ''
              }}
            >
              <Link href={item.href} onClick={() => setOpenSidebar(false)}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default HomeNavbar
