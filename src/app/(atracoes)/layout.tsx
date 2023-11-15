import Navbar from '@/components/Navbar'
import '../globals.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Atrações',
  description: 'Conheça as atrações que Araranguá tem a oferecer'
}

export default function AttractionLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar bgColor={'#009241'} />
      <main>{children}</main>
      <Footer />
    </>
  )
}
