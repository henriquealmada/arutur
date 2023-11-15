const History = () => {
  const paragraphStyle = 'text-[1.2rem] leading-7 text-[#616161]'

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl m-auto text-justify">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4 border-b-2 border-b-black pb-2">
          HISTÓRIA
        </h2>
        <p className={paragraphStyle}>
          A ocupação humana em Araranguá data de aproximadamente seis mil anos
          atrás, com os povos indígenas sambaquieiros e posteriormente os
          ceramistas Jês e Guarani.
        </p>
        <br />
        <p className={paragraphStyle}>
          Entre os anos de 1728 e 1730, Araranguá aparece na história oficial,
          na rota dos tropeiros, através da abertura do Caminho dos Conventos,
          que ligava Araranguá até Curitiba. Os tropeiros ocuparam o local
          chamado Capão da Espera - atual distrito de Hercílio Luz, formando as
          primeiras casas e comércios e resultando no extermínio de povos
          indígenas da área.
        </p>
        <br />
        <p className={paragraphStyle}>
          A partir de 1748, os açorianos chegaram no município, formando, junto
          aos tropeiros e aos escravos africanos, a base cultural de Araranguá.
          No século 19, ainda vieram para a região imigrantes alemães e
          italianos.
        </p>
        <br />
        <p className={paragraphStyle}>
          No ano de 1848, ainda subordinado à Laguna, foi criado o distrito
          Nossa Senhora Mãe dos Homens, que em 1864 passou a se chamar Campinas.
          Em 3 de abril 1880, o distrito emancipou-se de Laguna e, por meio da
          Lei Provincial 901, tornou-se um município denominado Araranguá.
        </p>
      </div>
    </section>
  )
}

export default History
