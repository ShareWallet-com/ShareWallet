"use client";

import { useState } from "react";
import { CirclePlus, House, Users, Wallet, Activity, UserRound, Settings } from "lucide-react";

import Logout from "../components/logout";
import UserDetails from "../components/userdetails";
import Creategroup from "../components/creategroup";
import Home from "../components/ui/DashboardComponent/dashome";
import Addfriend from "../components/addfriend";

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const [groupopen, setgroupOpen] = useState(false);
  const [friendopen, setfriendOpen] = useState(false);
  const [page, setPage] = useState("home");

  const menuItems = [
    { id: "home", label: "Home", icon: House },
    { id: "group", label: "Group", icon: Users },
    { id: "contribution", label: "Contribution", icon: Wallet },
    { id: "activity", label: "Activity", icon: Activity },
    { id: "friendlist", label: "Friend List", icon: UserRound },
    { id: "setting", label: "Setting", icon: Settings },
  ];

  return (
    <div className="bg-[#fafafa] w-full h-screen flex flex-col overflow-hidden">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-6 py-4 border-b bg-white">
        <img
          className="w-40"
          src="https://ik.imagekit.io/sharewallet/Group%2068.png?updatedAt=1749847778836"
          alt="ShareWallet Logo"
        />

        <Logout />
      </div>

      {/* Top Action Buttons */}
      <div className="flex items-center justify-end gap-4 px-6 py-4 border-b bg-white">
      <button
          onClick={() => setfriendOpen(true)}

          className="bg-[#1d1c1c] text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:opacity-90 transition"
        >
          <CirclePlus size={18} />
          Add Friend
        </button>
        <button
          onClick={() => setOpen(true)}

          className="bg-[#1d1c1c] text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:opacity-90 transition"
        >
          <CirclePlus size={18} />
          Add your details
        </button>

        <button
          onClick={() => setgroupOpen(true)}
          className="border border-[#1d1c1c] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#1d1c1c] hover:text-white transition"
        >
          Create Group
        </button>
      </div>

      {/* Sidebar + Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 border-r bg-white px-4 py-6">
          <div className="flex flex-col gap-2">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={() => setPage(item.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all text-left
                  
                  ${
                    page === item.id
                      ? "bg-[#1d1c1c] text-white shadow-md"
                      : "text-[#1d1c1c] hover:bg-gray-100"
                  }
                  `}
                >
                  <Icon size={18} />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Page */}
        <div className="flex-1 p-8 overflow-y-auto">
          {page === "home" && (
            <div>
              <Home/>
            </div>
          )}

          {page === "group" && (
            <div>
              <h1 className="text-3xl font-bold">Group Page</h1>
            </div>
          )}

          {page === "contribution" && (
            <div>
              <h1 className="text-3xl font-bold">Contribution Page</h1>
            </div>
          )}

          {page === "activity" && (
            <div>
              <h1 className="text-3xl font-bold">Activity Page</h1>
            </div>
          )}

          {page === "friendlist" && (
            <div>
              <h1 className="text-3xl font-bold">Friend List Page</h1>
            </div>
          )}

          {page === "setting" && (
            <div>
              <h1 className="text-3xl font-bold">Setting Page</h1>
            </div>
          )}
        </div>
      </div>

      {/* Popup Modals */}
      {friendopen && <Addfriend setfriendOpen={setfriendOpen}/>}
      {open && <UserDetails setOpen={setOpen} />}
      {groupopen && <Creategroup setgroupOpen={setgroupOpen} />}
    </div>
  );
}