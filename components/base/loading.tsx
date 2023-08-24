import Image from "next/image";
import loading from "@/public/Loading.gif"

export default function Loading() {
    return (
        <div className="h-screen w-screen bg-[#282828] flex justify-center items-center">
            <Image src={loading} height={1} width={1} className="w-[70%] h-[70%] bg-black" quality={100} alt="Loading ..." />
        </div>
    );
}
