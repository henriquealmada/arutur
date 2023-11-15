interface Props {
  heading: string
  paragraph: string
  color: string
}

const PageIntro = ({ heading, paragraph, color }: Props) => {
  return (
    <div className="text-center pt-12 px-4">
      <h2
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3"
        style={{ color }}
      >
        {heading}
      </h2>
      <p className="sm:text-xl text-[#616161]">{paragraph}</p>
    </div>
  )
}

export default PageIntro
