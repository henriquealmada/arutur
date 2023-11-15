import Image, { StaticImageData } from 'next/image'

interface Props {
  heading: string
  image: { src: StaticImageData; alt: string }
}

const FeaturedImage = ({ heading, image }: Props) => {
  return (
    <section className="h-[80vh] relative overflow-hidden flex justify-center items-center">
      <div className="w-full h-full absolute top-0 left-0 z-10 bg-[#00000069]"></div>
      <h1 className="absolute z-20 text-4xl text-white sm:text-5xl md:text-7xl lg:text-8xl">
        {heading}
      </h1>
      <Image
        src={image.src}
        fill
        priority
        alt={image.alt}
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
    </section>
  )
}

export default FeaturedImage
