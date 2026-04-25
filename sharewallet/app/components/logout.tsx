"use client"

import { useRouter } from "next/navigation";

export default function Logout(){
    const router = useRouter(); 
    const handleLogout = async () => {
        await fetch("/api/logout", {
            method: "POST",
    });

    router.push("/login");
};
    return(
        <div>
            <button className="bg-[#1d1c1c] text-white px-4 py-2 text-xs rounded-md font-semibold" onClick={handleLogout}>
                Logout
            </button>
        </div>
    )
}