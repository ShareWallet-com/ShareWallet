"use client"

import { useEffect, useState } from "react";

interface Friend {
    id: string;
    uniqueuserCode: string;
    userDetails?: {
        fullName?: string;
    };
}

interface AddfriendProps {
    setfriendOpen: (open: boolean) => void;
}

export default function Addfriend({ setfriendOpen }: AddfriendProps) {
    const [search, setSearch] = useState("");
    const [friends, setFriends] = useState<Friend[]>([]);
    const [sendingRequest, setSendingRequest] = useState(false);

    const handlesendRequest = async (user: Friend) => {
        try {
            setSendingRequest(true);
            const res = await fetch("/api/friends/request", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    senderId: user.id,
                    uniqueuserCode: user.uniqueuserCode
                })
            })
            const data = await res.json();
            if (!res.ok) {
                alert(data.error || "Failed to send request");
                return;
            }
            alert("Friend request sent successfully");
        }
        catch (error) {
            console.log(error);
            alert("Something went wrong");
        } finally {
            setSendingRequest(false);
        }
    }

    useEffect(() => {
        if (search.length > 2) {
            fetch(`/api/friends/request?q=${search}`)
                .then((res) => res.json())
                .then((data) => setFriends(data));
        }
    }, [search]);



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
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Enter User ID"
                            className="w-full px-4 py-1 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-[#6D4DFE]"
                        />


                    </div>
                </div>

                {/* Result Card */}
                <div className="mt-6 bg-gray-50 border border-gray-200 rounded-2xl p-4 flex items-center justify-between">
                    {friends.map((user) => (
                        <div key={user.id} className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                            <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-medium">
                                {user.userDetails?.fullName?.[0]}
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-800">{user.userDetails?.fullName}</p>
                                <p className="text-xs text-gray-400">@{user.uniqueuserCode}</p>
                            </div>
                            <button
                                onClick={() => handlesendRequest(user)}
                                disabled={sendingRequest}
                                className="bg-[#1d1c1c] ml-4 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:opacity-90 transition disabled:opacity-50"
                            >
                                {sendingRequest ? "Sending..." : "Send Request"}
                            </button>
                        </div>
                    ))}


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