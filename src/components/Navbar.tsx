'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { GrClose } from 'react-icons/gr'
import { usePathname } from 'next/navigation'
import logoWhite from '../assets/logo_white.png'
import navItems from '@/utils/navItems'

interface Props {
  bgColor: string
}

const Navbar = ({ bgColor }: Props) => {
  const [openSidebar, setOpenSidebar] = useState(false)
  const currentRoute = usePathname()

  return (
    <nav
      className="fixed top-0 left-0 z-30 w-full py-4 px-8 shadow-md shadow-[#0000004f]"
      style={{ background: bgColor }}
    >
      <div className="flex justify-between items-center max-w-[1600px] m-auto">
        <div>
          <Link href="/">
            <Image
              className={`w-28 md:w-32`}
              src={logoWhite}
              width={100}
              alt="Logo"
            />
          </Link>
        </div>
        <div
          className="text-3xl md:hidden cursor-pointer relative z-20"
          onClick={() => setOpenSidebar(!openSidebar)}
        >
          {openSidebar ? <GrClose /> : <FiMenu className="text-white" />}
        </div>
        {/* menu desktop */}
        <ul
          className={`hidden p-4 text-sm lg:text-base font-bold md:flex gap-7`}
        >
          {navItems.map((item, index) => (
            <li
              key={index}
              className="py-9 md:py-0 text-white cursor-pointer hover:text-opacity-50 duration-200"
              style={{
                opacity: currentRoute && currentRoute === item.href ? '0.5' : ''
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
          } duration-200 pt-14 px-8 w-full h-[100vh] text-center font-bold bg-white sm:w-1/2 md:right-[-100%]`}
        >
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`py-9 cursor-pointer text-xl hover:opacity-50 duration-200`}
              style={{
                opacity: currentRoute && currentRoute === item.href ? '0.5' : ''
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

export default Navbar
