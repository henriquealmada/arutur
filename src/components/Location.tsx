interface Props {
  code: string | undefined
  color: string
}

const Location = ({ code, color }: Props) => {
  return (
    <section className="py-8">
      <div className="max-w-7xl m-auto">
        <h2
          className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 pl-8 xl:pl-0"
          style={{ color }}
        >
          Localização
        </h2>
        <iframe
          src={`https://www.google.com/maps/embed?pb=${code}`}
          height="450"
          style={{
            width: '100%'
          }}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  )
}

export default Location
