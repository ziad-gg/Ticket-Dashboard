"use client";
import { useState, useEffect, Suspense } from "react"
import config from "@/config/config.mjs";
import type { Metadata } from 'next'
import { usePathname } from 'next/navigation'
import type { DashboardContext, OptionalDashboardContext } from '@/types/types'
import SideBar from '@/components/SideBar'
import InfoContext from '@/context/useInfo'
import Header from '@/components/Header';
import Loading from "@/components/base/loading";

export const metadata: Metadata = {
  title: 'Dashboard',
}

const getData = async (): Promise<DashboardContext> => {
  const request = await fetch(config.api("metadata"), {
    cache: 'reload',
    next: {
      revalidate: 5
    }
  });
  const data = await request.json();

  return data;
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [metadata, setMetadata] = useState<OptionalDashboardContext | DashboardContext>({})
  const [isLoading, setLoading] = useState<boolean>(true)
  const Route = usePathname();

  useEffect(() => {
      getData().then((data) => {
        data.page = Route;
        setMetadata(data);
        setLoading(false);
        console.log(data)
      });
  }, [])

  if (isLoading) return <Loading />

  return (
    <InfoContext.Provider value={metadata}>
      <div className='flex h-screen w-screen'>
        <SideBar />
        <div className='flex flex-col w-[calc(100%-5rem)] '>
          <Header />
          <div className='h-[calc(100%-5rem)] '>
            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
          </div>
        </div>
      </div>
    </InfoContext.Provider>
  )
}