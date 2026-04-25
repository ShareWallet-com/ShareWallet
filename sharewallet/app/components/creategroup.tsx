export default function Creategroup({setgroupOpen}) {
    return (
        <div>
            <div className=" animate-in fixed inset-0 backdrop-blur-sm bg-black/10 flex justify-center items-center">

                <div className="bg-[#fafafa] p-6 rounded-2xl w-96  shadow-lg flex items-center justify-center flex-col gap-8">
                    <div>
                        <h1 className="text-xl font-bold text-[#1d1c1c] text-center">Create group in sha<span className="text-[#6D4DFE]">₹</span>e.Wallet</h1>
                        <p className="text-xs text-gray-400">Tell us a bit about yourself to get started.</p>
                    </div>

                    <div className="w-96 h-auto border-[#dddddd] border rounded-2xl flex items-center justify-center flex-col gap-4">
                        <div className="w-full flex flex-col items-center justify-center gap-4 ">
                            <div className="w-[90%] flex flex-col  ">
                                <p className="text-[#1d1c1c] text-sm font-semibold">Group name</p>
                                <input
                                    type="text"
                                    placeholder="Jhone Doe"
                                    className="border border-[#1d1c1c] px-2 py-1 rounded-md outline-none focus:ring-2 focus:ring-black" />
                            </div>
                            <div className="w-[90%] flex flex-col">
                                <p className="text-[#1d1c1c] text-sm font-semibold">Description</p>
                                <textarea
                                    // type="text"
                                    placeholder="Write full details here..."
                                    className="border border-[#1d1c1c] px-2 py-1 rounded-md outline-none focus:ring-2 focus:ring-black"
                                ></textarea>
                            </div>

                            <div className="flex items-center justify-center flex-row gap-2">
                                <div className="w-[40%] flex flex-col">
                                    <p className="text-[#1d1c1c] text-sm font-semibold">Monthly contribution</p>
                                    <input
                                        type="text"
                                        placeholder="jhoneDoe12"
                                        className="border border-[#1d1c1c] px-2 py-1 rounded-md outline-none focus:ring-2 focus:ring-black"
                                    />
                                </div>
                                <div className="w-[40%] flex flex-col">
                                    <p className="text-[#1d1c1c] text-sm font-semibold">Minimum member</p>
                                    <input
                                        type="text"
                                        placeholder="jhoneDoe12"
                                        className="border border-[#1d1c1c] px-2 py-1 rounded-md outline-none focus:ring-2 focus:ring-black"
                                    />
                                </div>
                            </div>
                            <div className="w-[90%] flex flex-col">
                                <p className="text-[#1d1c1c] text-sm font-semibold">Withdrawal conditions</p>
                                <input
                                    type="text"
                                    placeholder="9876543210"
                                    className="border border-[#1d1c1c] px-2 py-1 rounded-md outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-4">
                            <button
                                type="submit"
                                className="bg-[#1d1c1c] text-[#fafafa] px-4 py-2 text-xs rounded-md font-semibold">
                                Save
                            </button>
                            <button
                                onClick={() => setgroupOpen(false)}
                                className="border border-[#1d1c1c] text-[#1d1c1c] px-4 py-2 text-xs rounded-md font-semibold">Close</button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}