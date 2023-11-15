import Navbar from '@/components/Navbar'
import '../globals.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Eventos',
  description: 'Descubra os eventos que ocorrerão em Araranguá'
}

export default function EventLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar bgColor={'#C04ABC'} />
      <main>{children}</main>
      <Footer />
    </>
  )
}
