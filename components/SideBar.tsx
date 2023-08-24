import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faHome, faPlus, faCircleQuestion, faPager } from "@fortawesome/free-solid-svg-icons";
import { useInfo } from "@/context/useInfo";
import { DashboardContext } from "@/types/types";

export default function SideBar() {
    const data = useInfo() as DashboardContext;
    data.page = usePathname()

    return (<div className="bg-main h-screen w-20 relative  flex-col items-center">
        <div className="absolute w-[1.5px] h-full bg-w right-0 opacity-75 z-50" />
        <div className="h-[20%] w-full flex justify-center pt-4 group">
            <Image width={1} height={1} priority src={data.botImage} unoptimized={true} alt="User" className="rounded-full w-12 h-12" />
        </div>
        <div className="h-[80%] w-full flex flex-col gap-14">
            <div className="w-full flex justify-center items-center relative">
                <Link href="/dashboard"><FontAwesomeIcon className="text-white w-7 h-7" icon={faHome} /></Link>
                {data.page === '/dashboard' && <div className=" absolute h-[4rem] w-[2.4px] bg-purble right-0" />}

            </div>
            <div className="w-full flex justify-center items-center">
                <Link href="/dashboard/settings"><FontAwesomeIcon className="text-white w-7 h-7" icon={faGear} /></Link>
                {data.page === '/dashboard/settings' && <div className=" absolute h-[4rem] w-[2.4px] bg-purble right-0" />}

            </div>
            <div className="w-full flex justify-center items-center">
                <Link href="/dashboard/manage"><FontAwesomeIcon className="text-white w-7 h-7" icon={faPlus} /></Link>
                {data.page === '/dashboard/manage' && <div className=" absolute h-[4rem] w-[2.4px] bg-purble right-0" />}

            </div>
            <div className="w-full flex justify-center items-center">
                <Link href="/dashboard/embeds"><FontAwesomeIcon className="text-white w-7 h-7" icon={faPager} /></Link>
                {data.page === '/dashboard/embeds' && <div className=" absolute h-[4rem] w-[2.4px] bg-purble right-0" />}

            </div>
            <div className="w-full flex justify-center items-center">
                <Link href="/dashboard/support"><FontAwesomeIcon className="text-white w-7 h-7" icon={faCircleQuestion} /></Link>
                {data.page === '/dashboard/support' && <div className=" absolute h-[4rem] w-[2.4px] bg-purble right-0" />}

            </div>
        </div>
    </div>)
}