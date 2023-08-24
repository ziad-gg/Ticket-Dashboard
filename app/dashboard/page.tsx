"use client";

import { Suspense, lazy } from "react"
import Image from "next/image"
import Tickets from "@/public/tickets.png"
import newTickets from "@/public/newTickets.png"
import Closed from "@/public/deleteTickets.png"
import Card from "@/components/Card"
import { useInfo } from "@/context/useInfo"
const Chart = lazy(() => import("@/components/chart"))

export default function Home() {
    const data = useInfo()
    return (<>
        <div className="bg-content h-full w-full p-12 overflow-y-scroll">
            <div className="w-full h-max text-white">
                <h1 className="font-bold text-3xl">Project Summary</h1>
                <p className="opacity-75">More Info of ticket bot</p>
            </div>
            <div className="w-full h-44 mt-10 flex gap-14 ">
                <Card image={Tickets} title={data.statics?.tickets.total} description="Total No.of Tickets" />
                <Card image={newTickets} title={data.statics?.tickets.new} description="New Tickets" />
                <Card image={Closed} title={data.statics?.tickets.closed} description="Closed Tickets" />
            </div>
            <div className="flex w-full h-full gap-14 ">
                <div className="w-[62.6rem] inline h-[30rem] rounded-md mt-10 bg-main ">
                    <div className="w-full h-max p-2 pb-5 text-white">
                        <h1 className="text-3xl font-bold">Estimate of Solved Tickets</h1>
                    </div>
                    <div className="w-full h-[25rem] p-1">
                        <Suspense fallback={<h1 className="text-white text-3xl font-bold text-center">Loaaading.....</h1>}>
                            <Chart />
                        </Suspense>
                    </div>
                </div>
                <div className="w-[30rem] h-[30rem] rounded-md mt-10 bg-main flex pt-10 text-white flex-col items-center">
                    <Image src={data.serverImage} unoptimized={true} alt="server" className="w-[25rem] h-[15rem] rounded-2xl pb-5" width={1} height={1} quality={100} />
                    <h1 className="text-3xl">{data.serverName} server</h1>
                    <h2 className="text-2xl opacity-60">server owner: {data.statics?.server.owner.username}</h2>
                    <h3 className="text-2xl opacity-50">999 members</h3>

                </div>
            </div>

            <div className="h-[100vh]"></div>
        </div>
    </>)
}
