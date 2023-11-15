import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { ReactElement } from 'react'

interface Props {
  type: string
  content: {
    image: StaticImageData
    imageHeading: string
    infoHeading: string
    infoParagraph: string
    placesHeading: string
    places: { src: StaticImageData; alt: string }[]
    link: string
    color: string
  }
  icon: ReactElement
}

const HomeSection = ({ type, content, icon }: Props) => {
  return (
    <section>
      <div
        className="relative h-96 flex justify-center items-center border-t-[10px] md:h-[600px] lg:h-[700px]"
        style={{ borderColor: content.color }}
      >
        <div className="w-full h-full absolute top-0 left-0 z-10 bg-[#00000058]"></div>
        <Image
          src={content.image}
          fill
          alt={type}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          sizes="100%"
        />
        <span className="absolute z-20 text-4xl text-white sm:text-5xl md:text-7xl lg:text-8xl">
          {content.imageHeading}
        </span>
      </div>
      <div className="py-4 px-8 max-w-7xl m-auto md:py-12">
        <div className="text-center mb-8 flex flex-col items-center gap-4 md:flex-row md:text-left md:gap-12">
          <div
            className="text-7xl sm:text-8xl text-white  inline-block rounded-full p-4 md:text-[10rem] md:p-6"
            style={{ background: content.color }}
          >
            {icon}
          </div>
          <div>
            <span
              className="text-2xl md:text-3xl font-bold"
              style={{ color: content.color }}
            >
              {content.infoHeading}
            </span>
            <p className="sm:text-lg md:text-xl lg:text-2xl max-w-[720px] mt-4 text-[#616161]">
              {content.infoParagraph}
            </p>
          </div>
        </div>
        <div>
          <div
            className="border-b-4 pb-2 mb-6 flex justify-between text-[#666666]"
            style={{ borderColor: content.color }}
          >
            <span className="text-sm sm:text-base md:text-2xl flex items-center">
              {content.placesHeading}
            </span>
            <Link href={content.link || ''}>
              <span className="text-[0.9rem] sm:text-sm md:text-base hover:text-black">
                Ver todos &gt;
              </span>
            </Link>
          </div>
          <div className="flex flex-col gap-6 md:flex-row md:justify-between items-center">
            {content.places?.map((place, index) => (
              <div
                key={index}
                className="relative h-52 sm:h-56 w-[300px] md:h-56 md:w-1/3 lg:h-60 rounded-sm overflow-hidden"
              >
                <Image
                  key={index}
                  fill
                  src={place.src}
                  alt={place.alt}
                  style={{ objectFit: 'cover' }}
                  sizes="100%"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSection
