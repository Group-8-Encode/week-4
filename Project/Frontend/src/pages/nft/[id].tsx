import { useRouter } from 'next/router'

const NFTDetails = () => {
    const router = useRouter()

    const { id } = router.query



    return (
        <div className=' w-screen md:w-[90vw] md:h-[90vh] flex flex-col md:flex-row  gap-4 items-center md:items-center md:justify-between p-4'>
            <div className=' w-full h-[20rem] md:w-[45%] md:h-5/6 relative'>
                <img src="https://dgbijzg00pxv8.cloudfront.net/711e2daf-b021-4ee9-af5b-e5355ba65d99/000000-0000000000/56940715247090499612649168549091501609542033438853705764929500067725492779112/ITEM_PREVIEW1.png" className="rounded-lg object-cover w-full h-full" alt="NFT image" />
            </div>

            <div className='flex flex-col border-[1px] p-4 border-white/20 rounded-bl-lg rounded-br-lg md:rounded-lg md:w-[45%] md:h-5/6 bg-accent'>
                <div>

                    <span className='font-bold text-2xl'>Lasagna One</span>
                    <div className='flex items-center justify-between my-2'>
                        <span>5 Eth</span>
                        <span className='w-[60%] text-ellipsis text-end' >0x11111</span>
                    </div>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolorem necessitatibus eius cum magnam illum quod harum vitae consequatur earum perspiciatis suscipit odio minima, dolor quis distinctio consequuntur eum in. Commodi blanditiis deserunt perferendis ipsum saepe eos harum, reprehenderit totam.</p>
                </div>
                <button className='mt-10 md:mt-auto self-center p-2 bg-secondary rounded-lg font-bold w-[10rem]'>Buy</button>
            </div>

        </div>
    )
}

export default NFTDetails