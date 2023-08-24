"use client";
import React, { lazy, useState, useEffect } from 'react';
import config from "@/config/config.mjs"
const Switch = lazy(() => import('@mui/joy/Switch'));
const Button = lazy(() => import('@mui/joy/Button'));
const Modal = lazy(() => import('@/components/ticket/EmbedModal'));
const EmbedCard = lazy(() => import('@/components/EmbedCard'));

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function Manage() {
    const [open, setOpen] = useState<Boolean>(false);
    const [Embeds, setEmbed] = useState<{ id: string; name: string }[]>([]);

    useEffect(() => {
        fetch(config.api(`embeds/metadata`), {
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-store', // Disable caching
            },
            cache: 'no-store',
            next: {
                revalidate: 0,
            },
        })
            .then(res => res.json())
            .then(data => setEmbed(data))
    }, []);

    return (<div className="bg-black w-full h-full text-white p-12 overflow-y-scroll">
        <div className="flex justify-between px-10 relative">
            <div className="absolute w-[calc(100%-3.7%)] h-1 bg-main -bottom-2" />
            <div>
                <h1 className="text-2xl font-bold">Embeds</h1>
                <p className="opacity-70">To manage ticket embeds</p>
            </div>
            <Switch defaultChecked={false} disabled={true} />
        </div>

        <div className="px-10 pt-10 flex flex-col gap-10 ">
            <div className='w-full h-20 bg-main flex items-center rounded-lg group justify-between'>
                <div className='flex justify-center items-center gap-6 ps-5 h-full'>
                    <div className='h-16 w-16 text-center flex justify-center items-center text-6xl bg-[#686161] rounded-full '>+</div>
                    <div className='opacity-60 hover:opacity-100'>You can add a new Embed by clicking the create button</div>
                </div>
                <div className='pe-8'>
                    <Button disabled={false} variant="solid" color="success" className='bg-green-700' onClick={() => setOpen(p => !p)} >
                        Create
                    </Button>
                </div>
            </div>

            {Embeds.map((e) => {
                return <EmbedCard id={e.id} name={e.name} key={e.id} />;
            })}

        </div>

        <Modal open={open} setOpen={setOpen} setEmbed={setEmbed} />
    </div>)
}
