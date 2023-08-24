import React, { lazy } from "react";
import Check from '@/components/Check';
import Switch from '@mui/joy/Switch';

export default function Settings() {
  return (
    <div className="bg-black w-full h-full text-white p-12">
      <div className="flex justify-between px-10 relative">
        <div className="absolute w-[calc(100%-3.7%)] h-1 bg-main -bottom-2" />
        <div>
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="opacity-70">To manage bot settings</p>
        </div>
        <Switch defaultChecked={false} disabled={true} />
      </div>
      <div className="px-10 pt-10 grid grid-cols-3 gap-6">
        <div className="flex justify-center items-center">
          {/* <Check title="admin role" description="bla"  placeholder="bla bla" options={[{ label: "@admins", id: "2983190" }]} /> */}
        </div>

      </div>
    </div>
  );
}
