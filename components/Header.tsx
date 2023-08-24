import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown, faLifeRing, faPlus, faServer } from "@fortawesome/free-solid-svg-icons"
import { useInfo } from "@/context/useInfo"
import { DashboardContext } from "@/types/types"
import Tooltip from "@mui/joy/Tooltip"

export default function Header() {
    const data = useInfo() as DashboardContext

    return (<div className="bg-main h-[5rem] flex flex-row-reverse">
        <div className="w-1/2 h-full flex flex-row-reverse">
            <div className="w-[40%] h-full relative">
                <div className=" absolute h-full w-[2.3px] left-3 bg-[#110f0f]" />
                <Tooltip title="Logout" variant="solid" size="lg" color="danger" sx={{ width: 150, textAlign: 'center', cursor: 'pointer' }}>
                    <div className="w-full h-full flex items-center ps-7">
                        <Image width={1} height={1} priority src={data.botImage} unoptimized={true} alt="User" className="rounded-full w-14 h-14" />
                        <span className="text-xl text-white ps-4">{data.username}</span>
                        <FontAwesomeIcon icon={faArrowDown} className="ps-3 text-white text-xl" />
                    </div>
                </Tooltip>
            </div>
            <div className="w-[60%] h-full flex items-center justify-end text-white">
                <ul>
                    <Link href="/support" className="pe-4">
                        <FontAwesomeIcon icon={faLifeRing} className="pe-2 text-center" />
                        Support Server
                    </Link>
                    <Link href="/bot" className="pe-4">
                        <FontAwesomeIcon icon={faPlus} className="pe-2 text-center" />
                        Bot invite
                    </Link>
                    <Link href="/bot" className="pe-3">
                        <FontAwesomeIcon icon={faServer} className="pe-2 text-center" />
                        servers
                    </Link>
                </ul>
            </div>
        </div>
        <div className="w-1/2 h-full text-white flex items-center ps-20">
            <Image src={data.serverImage} priority unoptimized={true} height={1} width={1} alt="server" className="rounded-full w-10 h-10" />
            <span className="text-md ps-2">{data.serverName} server</span>
        </div>
    </div>)
}