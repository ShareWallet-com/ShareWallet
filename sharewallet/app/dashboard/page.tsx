"use client"

import Logout from "../components/logout";
// import Navbar from "../components/navbar";
import { CirclePlus } from 'lucide-react';
import UserDetails from "../components/userdetails";
import { useState } from "react";
import Creategroup from "../components/creategroup";

export default function Dashboard() {

    const [open, setOpen] = useState(false);
    const [groupopen, setgroupOpen] = useState(false);
    const [page, setPage] = useState("home");

    return (
        <div className="bg-[#fafafa] w-full h-screen relative">
            <div className="flex items-center justify-between p-4">
                <div>
                    <img className="w-40 relative z-10" src="https://ik.imagekit.io/sharewallet/Group%2068.png?updatedAt=1749847778836" alt="ShareWallet Logo" />
                </div>
                <Logout />
            </div>
            <div className="flex items-center justify-end w-screen gap-8  p-4">
                <button
                    onClick={() => setOpen(true)}
                    className="bg-[#1d1c1c] text-white px-4 py-2 text-xs rounded-md font-semibold flex items-center justify-center gap-2">
                    <CirclePlus size={20} strokeWidth={1.5} /> Add your details
                </button>
                <button
                    onClick={() => setgroupOpen(true)}
                    // onClick={() => setOpen(false)}
                    className="border border-[#1d1c1c] text-[#1d1c1c] px-4 py-2 text-xs rounded-md font-semibold">Create group
                </button>

            </div>
            <div className="border-r w-60 h-full flex items-center justify-center absolute top-0 z-10">
                <div className="flex items-start justify-center flex-col text-md font-medium gap-2">
                    <button
                        onClick={() => setPage("home")}
                        className={`px-4 py-2 w-60 ${page === "home" ? "font-bold bg-[#1d1c1c] text-[#fafafa]" : ""
                            }`}
                    >Home</button>
                    <button
                        className={`px-4 py-2 w-60 ${page === "group" ? "font-bold bg-[#1d1c1c] text-[#fafafa]" : ""
                            }`}
                        onClick={() => setPage("group")}
                    >Group</button>
                    <button
                        className={`px-4 py-2 w-60 ${page === "contribution" ? "font-bold bg-[#1d1c1c] text-[#fafafa]" : ""
                            }`}
                        onClick={() => setPage("contribution")}
                    >Contribution</button>
                    <button
                        className={`px-4 py-2 w-60 ${page === "activity" ? "font-bold bg-[#1d1c1c] text-[#fafafa]" : ""
                            }`}
                        onClick={() => setPage("activity")}
                    >Activity</button>
                    <button
                        className={`px-4 py-2 w-60 ${page === "friendlist" ? "font-bold bg-[#1d1c1c] text-[#fafafa]" : ""
                            }`}
                        onClick={() => setPage("friendlist")}
                    >Friendlist</button>
                    <button
                        className={`px-4 py-2 w-60 ${page === "setting" ? "font-bold bg-[#1d1c1c] text-[#fafafa]" : ""
                            }`}
                        onClick={() => setPage("setting")}
                    >Setting</button>
                </div>

            </div>
            <div className="relative flex items-center justify-center w-full h-fit">
                {page === "home" && <h1>Home page</h1>}
                {page === "group" && <h1>group page</h1>}
                {page === "contribution" && <h1>contribution page</h1>}
                {page === "activity" && <h1>activity page</h1>}
                {page === "friendlist" && <h1>frinedlist page</h1>}
                {page === "setting" && <h1>setting page</h1>}
            </div>
            {open && (
                <UserDetails setOpen={setOpen} />
            )}
            {groupopen && (
                <Creategroup setgroupOpen={setgroupOpen} />
            )}
        </div>
    )
}