import Navbar from '@/components/Navbar'
import '../globals.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Gastronomia',
  description: 'Conheça as opções gastronômicas que Araranguá tem a oferecer'
}

export default function EateryLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar bgColor={'#FF9100'} />
      <main>{children}</main>
      <Footer />
    </>
  )
}
