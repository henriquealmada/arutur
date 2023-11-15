import Navbar from '@/components/Navbar'
import '../globals.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Sobre a cidade',
  description: 'Conheça a história de Araranguá e seus dados'
}

export default function AboutLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar bgColor={'#232323'} />
      <main>{children}</main>
      <Footer />
    </>
  )
}
