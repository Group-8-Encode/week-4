import { GiHamburgerMenu } from 'react-icons/gi'
import Link from 'next/link'

const Navbar = () => (
    <nav className="flex h-[4rem] p-4 items-center justify-between border-b-white/20 border-b-[1px]">
        <Link href="/">
            <span className="font-bold text-3xl cursor-pointer select-none">Lasagna NFT</span>
        </Link>
        <div className='text-white text-2xl md:hidden'>
            <GiHamburgerMenu />
        </div>

        <button className='bg-secondary p-2 rounded-lg hidden md:block'>
            Connect
        </button>
    </nav>
)

export default Navbar