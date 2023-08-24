"use client";
import PanalCard from '@/components/panalCard';
import { useInfo } from '@/context/useInfo';
import config from "@/config/config.mjs"
import React, { lazy, useState, useEffect } from 'react';
const Switch = lazy(() => import('@mui/joy/Switch'));
const Button = lazy(() => import('@mui/joy/Button'));
const Modal = lazy(() => import('@/components/ticket/panalModal'));


export default function Manage() {
  const info = useInfo()
  const [open, setOpen] = useState<Boolean>(false);
  const [Panals, setPanals] = useState<data[]>([]);
  const [refresh, setRefresh] = useState<boolean>(true);

  useEffect(() => {
    fetch(config.api('panals/metadata'), {
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
      .then(data => {
        setPanals(data);
      })
  }, [refresh]);

  return (<div className="bg-black w-full h-full text-white p-12 overflow-y-scroll">
    <div className="flex justify-between px-10 relative">
      <div className="absolute w-[calc(100%-3.7%)] h-1 bg-main -bottom-2" />
      <div>
        <h1 className="text-2xl font-bold">Panals</h1>
        <p className="opacity-70">To manage ticket panals</p>
      </div>
      <Switch defaultChecked={false} disabled={true} />
    </div>
    <div className="px-10 pt-10 flex flex-col gap-10 ">
      <div className='w-full h-20 bg-main flex items-center rounded-lg group justify-between'>
        <div className='flex justify-center items-center gap-6 ps-5 h-full'>
          <div className='h-16 w-16 text-center flex justify-center items-center text-6xl bg-[#686161] rounded-full '>+</div>
          <div className='opacity-60 hover:opacity-100'>You can add a new Panal by clicking the create button</div>
        </div>
        <div className='pe-8'>
          <Button disabled={false} variant="solid" color="success" className='bg-green-700' onClick={() => setOpen(true)} >
            Create
          </Button>
        </div>
      </div>
      {Panals.map(async (data) => {

        const getChannel = (id: string | any) => {
          return info.statics?.server.channels.find(channel => channel.id === id);
        };

        const getRoles = (data: string[]) => {
          return data?.map(id => info.statics?.server.roles.find(role => role.id === id));
        };

        const getCategory = (id: string) => {
          return info.statics?.server.categories.find(category => category.id === id);
        }

        const filter = (d: (Channel | Role[]), type: ("channel" | "role")) => {
          if (type === 'channel') {
            // @ts-ignore
            if (d?.id) return { label: `#${d?.name}`, id: d?.id };
            else return { label: "", id: "" }
          } else if (type === 'role') {
            // @ts-ignore
            return d?.map(role => { return { label: role.name, id: role.id } }) || []
          }
        };

        // @ts-ignore
        const category = getCategory(data.category) as Channel;
        const closeChannel = getChannel(data.closeChannelLogMenu) as Channel;
        const deleteChannel = getChannel(data.deleteLogChannelMenu) as Channel;
        const openLogChannel = getChannel(data.openLogChannelMenu) as Channel;
        const claimLogChannel = getChannel(data.claimLogChannelMenu) as Channel;
        const AllowdRoles = getRoles(data.allowedRoles as unknown as string[]) as Role[];
        const BlacklistRoles = getRoles(data.blackListRoles as unknown as string[]) as Role[];
        const SupportRoles = getRoles(data.supportRoles as unknown as string[]) as Role[];

        const newData = {
          // @ts-ignore
          id: data.id,
          name: data.name,
          description: data.description,
          limit: data.limit,
          category: filter(category, 'channel'),

          blackListRoles: filter(BlacklistRoles, 'role'),
          allowedRoles: filter(AllowdRoles, 'role'),
          supportRoles: filter(SupportRoles, 'role'),

          closeChannelLogMenu: filter(closeChannel, 'channel'),
          openLogChannelMenu: filter(openLogChannel, 'channel'),
          claimLogChannelMenu: filter(claimLogChannel, 'channel'),
          deleteLogChannelMenu: filter(deleteChannel, 'channel'),

          claimButton: data.claimButton,
          addAllBots: data.addAllBots,
          oneStepClose: data.oneStepClose
        } as unknown as data

        return <PanalCard name={data.name} id={data.id} key={data.id} data={newData} refresh={() => setRefresh(prev => !prev)} />
      })}

    </div>

    <Modal open={open as boolean} setOpen={setOpen} refresh={() => setRefresh(prev => !prev)} />
  </div>)
}
