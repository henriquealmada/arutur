import Link from 'next/link'
import { AiFillHome } from 'react-icons/ai'

interface Props {
  currentPage: String
}

const Navigation = ({ currentPage }: Props) => {
  return (
    <div className="px-8 pt-4">
      <div className="text-lg flex items-center gap-2 max-w-7xl m-auto">
        <Link href="/" className="flex items-center gap-1 hover:opacity-70">
          <AiFillHome />
          Início
        </Link>
        &gt;
        <span className="opacity-70">{currentPage}</span>
      </div>
    </div>
  )
}

export default Navigation
