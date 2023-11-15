const Location = () => {
  return (
    <section className="py-16 px-4 bg-[#F2F2F2]">
      <div className="max-w-4xl m-auto">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4 border-b-2 border-b-black pb-2">
          LOCALIZAÇÃO
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55856.99779645788!2d-49.57469656635674!3d-28.955874737626573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95222f063034e383%3A0x29c0b18c70b3efce!2sArarangu%C3%A1%2C%20State%20of%20Santa%20Catarina%2C%2088900-000!5e0!3m2!1sen!2sbr!4v1688662150080!5m2!1sen!2sbr"
          height="450"
          style={{ border: 0, width: '100%' }}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  )
}

export default Location
