import Particles from "@/components/base/particles";
import config from "@/config/config.mjs";
import { OmitDashboardContext } from "@/types/global";
import Image from "next/image";
import Link from "next/link";

async function getData(): Promise<OmitDashboardContext> {
    const res = await fetch(config.api('metadata'), {
        next: {
            revalidate: 5
        }
    });

    const data = await res.json()
    return data
};

export default async function Home() {
    const data = await getData();

    return (
        <div className="flex flex-col items-center h-screen justify-center w-screen before overflow-hidden bg-black relative">
            <Particles
                className="absolute inset-0 animate-fade-in bg-gray-900"
                quantity={120}
            />
            <div className="h-[35rem] w-[30rem] bg-gray-800 shadow-2xl bg-opacity-50 z-50 rounded-lg">
                <div className="w-full h-[10rem] flex justify-center items-center pt-10 flex-col gap-y-4">
                    <Image alt="Bot" height={1} width={1} quality={100} unoptimized={true} priority src={data.serverImage as string} className="rounded-full w-[7rem] h-[7rem]" />
                    <h2 className="text-white font-bold text-xl ">{data.username}</h2>
                </div>
                <div className="w-full h-[25rem] flex flex-col justify-center items-center">
                    <Link href="/dashboard" className="bg-gray-700 w-[70%] h-[15%] flex justify-center items-center font-bold text-white text-2xl">Dashboard</Link>
                </div>
            </div>
        </div>
    )
}