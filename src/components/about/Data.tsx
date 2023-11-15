const Data = () => {
  return (
    <section className="py-16 px-4 bg-[#F2F2F2]">
      <div className="max-w-4xl m-auto">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4 border-b-2 border-b-black pb-2">
          DADOS DO MUNICÍPIO
        </h2>
        <div>
          <ul className="flex flex-col gap-4 text-[1.2rem] text-[#616161]">
            <li>
              <span className="font-semibold">Fundação:</span> 4 de maio de 1728
            </li>
            <li>
              <span className="font-semibold">Emancipação:</span> 3 de abril de
              1880
            </li>
            <li>
              <span className="font-semibold">População:</span> 71.922
              habitantes (IBGE/2022)
            </li>
            <li>
              <span className="font-semibold">Densidade demográfica:</span>
              238.30 hab/km² (IBGE/2022)
            </li>
            <li>
              <span className="font-semibold">PIB per capita:</span> R$30.024,90
              (IBGE/2020)
            </li>
            <li>
              <span className="font-semibold">Área:</span> 301.819 km
              (IBGE/2022)
            </li>
            <li>
              <span className="font-semibold">Latitude:</span> 28°56&apos;05
            </li>
            <li>
              <span className="font-semibold">Longitude:</span> 49°29&apos;09
            </li>
            <li>
              <span className="font-semibold">Altitude:</span> 13 m
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Data
