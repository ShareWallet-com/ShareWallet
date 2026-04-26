"use client"
import { useEffect, useState } from "react";
import { Pencil, Check, X } from "lucide-react";
import { toast } from "react-toastify";

interface Userdetails {
  fullName: string;
  username: string;
  phoneNo: string;
};

export default function Userprofile() {
  const [profile, setProfile] = useState<Userdetails | null>(null);
  const [editMode, setEditMode] = useState(false);
  
  useEffect(() => {
    const fetchprofile = async () => {
      try {
        const res = await fetch("/api/details");
        const data = await res.json();
        console.log("Fetched profile:", data || "No data");
        if (data.userDetails) {
          setProfile({
            fullName: data.userDetails.fullName || "",
            username: data.userDetails.username || "",
            phoneNo: data.userDetails.phoneNo || "",
          });
        }
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    };
    fetchprofile();
  }, [])

  const handleUpdate = async () => {

    const res = await fetch("/api/details", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profile),


    })
    const data = await res.json();
    if (data.success) {
      toast.success(data.message || "Profile updated successfully");
      setEditMode(false);
    } else {
      toast.error(data.error || "Failed to update profile");
    }

  }

  if (!profile) return null;


  return (
    <div className="flex items-center justify-center">
      <div className="bg-white w-90 rounded-3xl shadow-lg border border-gray-100 p-6">

        {/* Top */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center text-lg font-semibold">
            {profile.fullName?.charAt(0) || "U"}
          </div>
          <div>
            <h1 className="text-base font-semibold text-gray-800">{profile.fullName || "Unknown User"} </h1>
            <p className="text-sm text-gray-400">@{profile.username || "username"}</p>
          </div>
          {!editMode ? (
            <button
              onClick={() => setEditMode(true)}
              className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200"
            >
              <Pencil size={18} />
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={handleUpdate}
                className="p-2 rounded-xl bg-green-100 hover:bg-green-200"
              >
                <Check size={18} />
              </button>

              <button
                onClick={() => setEditMode(false)}
                className="p-2 rounded-xl bg-red-100 hover:bg-red-200"
              >
                <X size={18} />
              </button>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="space-y-3 text-sm">

          <div className="bg-gray-50 rounded-xl p-3">
            <p className="text-gray-400 text-xs">Phone</p>
            {editMode ? (
              <input
                value={profile.phoneNo}
                onChange={(e) =>
                  setProfile({ ...profile, phoneNo: e.target.value })
                }
                className="w-full bg-transparent outline-none font-medium"
              />
            ) : (
              <p className="font-medium text-gray-800">{profile.phoneNo}</p>
            )}
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