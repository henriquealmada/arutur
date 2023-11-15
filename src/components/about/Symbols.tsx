import Image from 'next/image'
import flag from '../../assets/about/bandeira_ararangua.jpg'
import coatOfArms from '../../assets/about/brasao_ararangua.jpg'

const Symbols = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl m-auto">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4 border-b-2 border-b-black pb-2">
          SÍMBOLOS
        </h2>
        <div className="flex flex-col gap-8 sm:flex-row">
          <div className="relative sm:w-1/2">
            <h3 className="mb-4 text-xl sm:text-2xl font-semibold text-[#636363]">
              BANDEIRA
            </h3>
            <p className="text-[1.2rem] leading-7 text-[#616161]">
              A faixa azul representa o oceano que banha o litoral. As faixas
              branca e vermelha simbolizam a integração de Araranguá no
              progresso desenvolvimentista de Santa Catarina. A faixa amarela
              representa a praia.
            </p>
          </div>
          <div className="relative h-80 sm:w-1/2 shadow-2xl border-[1px] border-black">
            <Image
              src={flag}
              priority
              fill
              alt="Bandeira de Araranguá"
              style={{ objectFit: 'cover' }}
              sizes="100%"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse gap-8 sm:flex-row pt-12">
          <div className="relative h-80 sm:w-1/2">
            <Image
              src={coatOfArms}
              priority
              fill
              alt="Brasão de Araranguá"
              style={{ objectFit: 'contain' }}
              sizes="100%"
            />
          </div>
          <div className="relative sm:w-1/2">
            <h3 className="mb-4 text-xl sm:text-2xl font-semibold text-[#636363]">
              BRASÃO
            </h3>
            <p className="text-[1.2rem] leading-7 text-[#616161]">
              A coroa mural em cima do escudo, com quatro torres, representa
              cidade e comarca. O listel embaixo do escudo apresenta a data
              03-04-1880, na qual o antigo distrito de Campinas se tornou
              município. Entre o listel e o escudo é representado o Rio
              Araranguá. Os ramos de arroz e de mandioca retratam produtos
              básicos da agricultura do Município. O comércio e a indústria são
              representados pela roda dentada com duas chaminés. As duas
              avenidas simbolizam a denominação da cidade. Na parte inferior há
              uma reprodução do mar e do Morro dos Conventos, representando o
              turismo e a origem do município.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Symbols
