"use client";

import { useEffect, useState } from "react";

interface FriendRequest {
  id: string;
  sender: {
    id: string;
    uniqueuserCode: string;
    userDetails?: {
      fullName?: string;
    };
  };
}

interface Props {
  user: {
    id: string;
  };
}

export default function Friendrequest({ user }: Props) {
  const [request, setRequest] = useState<FriendRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await fetch(
          `/api/friends/accept?userId=${user.id}`
        );

        const data = await res.json();

        if (!res.ok) {
          console.log(data.error);
          return;
        }

        setRequest(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (user?.id) {
      fetchRequests();
    }
  }, [user?.id]);

  return (
    <div className="bg-white shadow-xl rounded-2xl w-96 min-h-[35vh] p-5 border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-5 border-b pb-3">
        <h1 className="text-lg font-semibold text-gray-800">
          Friend Requests
        </h1>
      </div>

      <div className="space-y-3">
        {loading ? (
          <p className="text-sm text-gray-500">Loading...</p>
        ) : request.length === 0 ? (
          <p className="text-sm text-gray-500">No requests found</p>
        ) : (
          request.map((req) => (
            <div
              key={req.id}
              className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl"
            >
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-medium">
                {req.sender.userDetails?.fullName?.[0] || "U"}
              </div>

              <div>
                <p className="text-sm font-medium text-gray-800">
                  {req.sender.userDetails?.fullName}
                </p>
                <p className="text-xs text-gray-400">
                  @{req.sender.uniqueuserCode}
                </p>
              </div>

              <button className="ml-auto bg-green-500 text-white px-3 py-1 rounded-lg text-sm">
                Accept
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}