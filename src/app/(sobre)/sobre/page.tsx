import featured from '../../../assets/historicalImages/campanha_da_pedra.jpeg'
import FeaturedImage from '@/components/FeaturedImage'
import Introduction from '@/components/about/Introduction'
import History from '@/components/about/History'
import Economy from '@/components/about/Economy'
import Turism from '@/components/about/Turism'
import Data from '@/components/about/Data'
import Symbols from '@/components/about/Symbols'
import Anthem from '@/components/about/Anthem'
import ImageGallery from '@/components/about/ImageGallery'
import Location from '@/components/about/Location'

export default async function Page() {
  return (
    <>
      <FeaturedImage
        heading="SOBRE A CIDADE"
        image={{ src: featured, alt: 'Campanha da pedra' }}
      />
      <Introduction />
      <History />
      <Economy />
      <Turism />
      <Data />
      <Symbols />
      <Anthem />
      <ImageGallery />
      <Location />
    </>
  )
}
