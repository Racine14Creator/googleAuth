import Image from "next/image";

export function UserInfo({ img, email, name }) {
    return (
        <>
            <div className="bg-white text-black p-[20px] flex justify-between items-center flex-row-reverse rounded-full">
                <h3 className="text-3xl font-bold justify-start sm:2xl lg:font-normal"><span>{email}</span></h3>
                <Image src={img} width={80} height={80} className="rounded-full shadow-md w-[50px] h-[50px]" />
            </div>
            <div className="bg-white mt-5 text-black p-[20px] flex justify-between items-center flex-row-reverse rounded-full">
                <h3 className="text-3xl font-bold justify-start sm:2xl lg:font-normal"><span>{name}</span></h3>
                <Image src={`/images/google-logo.png`} width={80} height={80} className="rounded-full shadow-md w-[50px] h-[50px]" />
            </div>
        </>
    )
}