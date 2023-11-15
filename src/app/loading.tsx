import Image from 'next/image'
import spinner from '../assets/spinner.gif'

export default function Loading() {
  return (
    <div className="h-[100vh] grid place-content-center">
      <Image src={spinner} width={500} alt="spinner" />
    </div>
  )
}
