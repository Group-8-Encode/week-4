import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => (
    <nav className="flex h-[4rem] p-4 items-center justify-between border-b-white/20 border-b-[1px]">
        <span className="font-bold text-3xl">Lasagna NFT</span>
        <div className='text-white text-2xl md:hidden'>
            <GiHamburgerMenu />
        </div>

        <button className='bg-secondary p-2 rounded-lg hidden md:block'>
            Connect
        </button>
    </nav>
)

export default Navbar