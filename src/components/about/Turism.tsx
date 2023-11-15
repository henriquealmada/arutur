const Turism = () => {
  const paragraphStyle = 'text-[1.2rem] leading-7 text-[#616161]'

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl m-auto text-justify">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4 border-b-2 border-b-black pb-2">
          TURISMO
        </h2>
        <p className={paragraphStyle}>
          O Balneário Morro dos Conventos é o principal ponto turístico da
          cidade. Nele se encontram as belas praias da cidade e as dunas, as
          quais são muito utilizadas para a pratica de atividades como o
          sandboard. Na região também há um farol da Marinha, localizado em um
          famoso penhasco e que atrai diversos turistas.
        </p>
        <br />
        <p className={paragraphStyle}>
          Outro destino muito visitado na cidade é a Barra do Rio Araranguá, que
          se estende do centro da cidade até a comunidade de ilhas e o Oceano
          Atlântico. O Balneário Ilhas é famoso por suas belezas naturais e pelo
          artesanato produzido pelos moradores da região.
        </p>
        <br />
      </div>
    </section>
  )
}

export default Turism
