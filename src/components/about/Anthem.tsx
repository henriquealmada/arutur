const Anthem = () => {
  return (
    <section className="py-16 px-4 bg-[#F2F2F2]">
      <div className="max-w-4xl m-auto">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4 border-b-2 border-b-black pb-2">
          HINO
        </h2>
        <div>
          <div className="text-[1.2rem] text-[#616161] flex flex-col sm:flex-row sm:gap-16 mb-6">
            <div>
              <p>
                Ó rainha do Sul Catarinense,
                <br />
                Rosa de um vale sempre em flor,
                <br />
                Tu ostentas, com largas avenidas,
                <br />A beleza e o esplendor.
              </p>
              <br />
              <p>
                Grande marco na história,
                <br />
                Meu orgulho, minha glória,
                <br />
                Terra de descanso, mar e sol
                <br />
                És tu, Araranguá.
              </p>
              <br />
              <p>
                Beija o sol o vigor de tuas veigas
                <br />
                Dourando imensos arrozais;
                <br />
                O trabalho, a cultura e o progresso
                <br />
                Te exaltam sempre mais.
              </p>
              <br />
            </div>
            <div>
              <p>
                Amo o rio que espelha teu encanto
                <br />
                Nas lindas noites de luar,
                <br />
                E o verde sereno da paisagem
                <br />E as dunas do teu mar
              </p>
              <br />
              <p>
                Amo o mar que afaga mansamente
                <br />
                Teu areal deitado ao sol,
                <br />
                E o morro que orienta os pescadores
                <br />
                Com a luz do seu farol
              </p>
              <br />
              <br />
              <p className="text-[#292929]">
                Letra: Padre Giuseppe Perona
                <br />
                Melodia: Padre Hugo Zullian
              </p>
            </div>
          </div>
          <div className="lg:w-1/3">
            <audio
              src="/hino.mp3"
              controls
              className="shadow-[#00000052] shadow-md rounded-3xl lg:m-auto"
            >
              Seu navegador não suporta o elemento de áudio.
            </audio>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Anthem
