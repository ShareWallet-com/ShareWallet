"use client"
import { useEffect, useState } from "react";

  interface Userdetails{
    fullName: string;
    username: string;
    phoneNo: string;
  };

export default function Userprofile() {
  const [profile, setProfile] = useState<Userdetails | null>(null);
  useEffect(() =>{
    const fetchprofile = async () =>{
      const res = await fetch("/api/details");
      const data = await res.json();
      console.log("API DATA:", data);
      setProfile({
        fullName: data.fullName || data.name || "",
        username: data.username || "",
        phoneNo: data.phoneNo || "",
      });
    };
    fetchprofile();
  },[])

  if(!profile) return null;


  return (
    <div className="flex items-center justify-center">
      <div className="bg-white w-80 rounded-3xl shadow-lg border border-gray-100 p-6">

        {/* Top */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center text-lg font-semibold">
            {profile.fullName?.charAt(0) || "U"}
          </div>

          <div>
            <h1 className="text-base font-semibold text-gray-800">{profile.fullName || "Unknown User"} </h1>
            <p className="text-sm text-gray-400">@{profile.username || "username"}</p>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-3 text-sm">

          <div className="bg-gray-50 rounded-xl p-3">
            <p className="text-gray-400 text-xs">Phone</p>
            <p className="font-medium text-gray-800">{profile.phoneNo}</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-3">
            <p className="text-gray-400 text-xs">Email</p>
            <p className="font-medium text-gray-800">bikesh@email.com</p>
          </div>

        </div>

      </div>
    </div>
  );
}