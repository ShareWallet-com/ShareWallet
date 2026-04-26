"use client"
import { useState } from "react"

export default function UserDetails({ setOpen }) {
    const [formData, setFormData] = useState({
        fullName: "",
        phoneNo: "",
        username: ""
    })
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const validateForm = () => {
        if (!formData.fullName) return "Fullname is required";
        if (!formData.username) return "Username is required";
        if (!formData.phoneNo) return "Phone number is required";
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(formData.phoneNo)) return "Invalid phone number format";
        return null;
    }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        
        const validationError = validateForm();
        if (validationError) return setError(validationError);
        try {
            setLoading(true);

            const res = await fetch("/api/details", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fullName: formData.fullName,
                    username: formData.username,
                    phoneNo: formData.phoneNo,
                })
            })
            if (!res.ok) throw new Error("Something went wrong");
            setOpen(false);
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className=" animate-in fixed inset-0 backdrop-blur-sm bg-black/10 flex justify-center items-center">

                <div className="bg-[#fafafa] p-6 rounded-2xl w-96  shadow-lg flex items-center justify-center flex-col gap-8">
                    <div>
                        <h1 className="text-xl font-bold text-[#1d1c1c] text-center">Welcome to sha<span className="text-[#6D4DFE]">₹</span>e.Wallet</h1>
                        <p className="text-xs text-gray-400">Tell us a bit about yourself to get started.</p>
                    </div>

                    <form 
                    onSubmit={handleSubmit}
                    className="w-96 h-80 border-[#dddddd] border rounded-2xl flex items-center justify-center flex-col gap-4">
                        <div
                        
                        className="w-full flex flex-col items-center justify-center gap-4 ">
                            <div className="w-[90%] flex flex-col  ">
                                <p className="text-[#1d1c1c] text-sm font-semibold">Fullname</p>
                                <input
                                    onChange={(e) =>
                                        setFormData({ ...formData, fullName: e.target.value })
                                    }
                                    type="text"
                                    placeholder="Jhone Doe"
                                    className="border border-[#1d1c1c] px-2 py-1 rounded-md outline-none focus:ring-2 focus:ring-black" />
                            </div>
                            <div className="w-[90%] flex flex-col">
                                <p className="text-[#1d1c1c] text-sm font-semibold">Username</p>
                                <input
                                    onChange={(e) =>
                                        setFormData({ ...formData, username: e.target.value })
                                    }
                                    type="text"
                                    placeholder="jhoneDoe12"
                                    className="border border-[#1d1c1c] px-2 py-1 rounded-md outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>
                            <div className="w-[90%] flex flex-col">
                                <p className="text-[#1d1c1c] text-sm font-semibold">Phone No.</p>
                                <input
                                    onChange={(e) =>
                                        setFormData({ ...formData, phoneNo: e.target.value })
                                    }
                                    type="text"
                                    placeholder="9876543210"
                                    className="border border-[#1d1c1c] px-2 py-1 rounded-md outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-4">
                            <button
                                type="submit"
                                className="bg-[#1d1c1c] text-[#fafafa] px-4 py-2 text-xs rounded-md font-semibold cursor-pointer">
                                {loading ? (
                                    <>

                                        Saving...
                                    </>
                                ) : (
                                    "Save"
                                )}
                            </button>
                            <button
                                onClick={() => setOpen(false)}
                                className="border border-[#1d1c1c] text-[#1d1c1c] px-4 py-2 text-xs rounded-md font-semibold">Close</button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    )
}