import Image from 'next/image'
import { oldImages } from '@/utils/oldImages'

const ImageGallery = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl m-auto">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4 border-b-2 border-b-black pb-2">
          FOTOS HISTÓRICAS
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {oldImages.map((image, index) => (
            <div key={index} className="relative h-64">
              <Image
                src={image.src}
                fill
                alt={image.alt}
                style={{ objectFit: 'cover' }}
                sizes="100%"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImageGallery
