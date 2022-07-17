const NFT = () =>
(
    <div className='w-full md:w-[14rem] h-[20rem] bg-accent rounded-lg p-2'>
        <div className='w-full h-[80%] rounded-lg relative mb-2'>
            <img src="https://dgbijzg00pxv8.cloudfront.net/711e2daf-b021-4ee9-af5b-e5355ba65d99/000000-0000000000/56940715247090499612649168549091501609542033438853705764929500067725492779112/ITEM_PREVIEW1.png" className="rounded-lg object-cover w-full h-full" alt="NFT image" />
        </div>

        <span>Lasagna 1</span>

        <div className='flex items-center justify-between'>
            <span>5 ETH</span>
            <span className='w-[60%] text-ellipsis text-end' >0x11111</span>
        </div>

    </div>
)


export default NFT