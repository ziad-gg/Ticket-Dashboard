import Image from "next/image";

export default function Card(Props: CardProps) {
    return (
        <div className="bg-main w-[30rem] flex items-center p-7 text-white gap-16 rounded-md">
            <Image src={Props.image} alt="img" unoptimized={true} className="h-36 w-36" quality={100} />
            <div>
                <h1 className="text-3xl font-bold">{Props.title}</h1>
                <span className=" opacity-70">{Props.description}</span>
            </div>
        </div>
    )
}