"use client"

import { useState } from "react";

type UserSearchResult = {
  userDetails?: {
    fullName?: string;
  };
  uniquserCode?: string;
};

export default function Addfriend({ setfriendOpen }) {
    const [code, setCode] = useState("");
    const [user, setuser] = useState<UserSearchResult | null>(null);

    const searchUser = async () =>{
        const res = await fetch(
            `/api/friends/request/search?uniqueuserCode=${code}`
        );
        const data = await res.json();
        setuser(data);
    }



  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
      
      {/* Modal */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 animate-in fade-in zoom-in-95 duration-300">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-[#111]">
            Add Friend to Sha<span className="text-[#6D4DFE]">₹</span>e.Wallet
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Search your friend using their User ID
          </p>
        </div>

        {/* Search Box */}
        <div className="space-y-4">
          <label className="text-sm font-medium text-gray-700">
            Friend User ID
          </label>

          <div className="flex gap-2">
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter User ID"
              className="w-full px-4 py-1 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-[#6D4DFE]"
            />

            <button 
            onClick={searchUser}
            className="px-4 py-2 bg-[#111] text-white rounded-md text-xs font-semibold hover:scale-105 transition">
              Search
            </button>
          </div>
        </div>

        {/* Result Card */}
        <div className="mt-6 bg-gray-50 border border-gray-200 rounded-2xl p-4 flex items-center justify-between">
          {user && (
                <div>
            <h2 className="font-semibold text-[#111]">{user.userDetails?.fullName}</h2>
            <p className="text-sm text-gray-500">@{user.uniquserCode ?? ""}</p>
          </div>
          )}
          

          <button className="px-4 py-2 bg-[#6D4DFE] text-white text-sm rounded-xl font-medium hover:scale-105 transition">
            Send
          </button>
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => setfriendOpen(false)}
            className="px-5 py-2 border border-gray-300 rounded-xl text-sm font-medium hover:bg-gray-100 transition"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}