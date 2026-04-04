export default function Review(){
    return(
        <div className="w-full h-screen bg-[#fafafa] flex items-center justify-center gap-8">
            <div className="flex items-center justify-center flex-col">
                <div className="w-full flex items-center justify-center flex-col">
                    <p className="text-2xl">Don’t take our word for it!</p>
                    <h1 className="font-black text-4xl">Hear what our <span className="font-mono text-[#6D4DFE]">Customers</span> say</h1>
                    <p className="text-xs">With over 100k+ clients served, here’s what they have to say</p>
                </div>
                <div className="flex items-center justify-center m-4 gap-16">
                    <div className="shadow-xl rounded-3xl w-[25vw] h-[25vw] bg-white flex flex-col items-center justify-center p-8 gap-4">
                        <img 
                            src="https://randomuser.me/api/portraits/women/65.jpg" 
                            alt="Customer avatar" 
                            className="w-20 h-20 rounded-full object-cover mb-2 border-4 border-[#6D4DFE]"
                        />
                        <p className="text-lg font-semibold text-[#6D4DFE]">Amina Yusuf</p>
                        <p className="text-xs text-gray-500 italic text-center">
                            "ShareWallet makes group savings so much easier! We can see everyone’s contributions, 
                            and withdrawals are transparent. I love how our student club stays organized and trusts 
                            the process now."
                        </p>
                        <div className="flex gap-1 mt-2">
                            <span className="text-yellow-400">★</span>
                            <span className="text-yellow-400">★</span>
                            <span className="text-yellow-400">★</span>
                            <span className="text-yellow-400">★</span>
                            <span className="text-yellow-400">★</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center flex-col gap-4">
                        <div className="shadow-xl rounded-3xl w-[45vw] h-[15vw] bg-white flex items-center justify-center p-8 gap-8">
                            <img 
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt="Customer avatar"
                                className="w-20 h-20 rounded-full object-cover border-4 border-[#6D4DFE]"
                            />
                            <div className="flex flex-col justify-center">
                                <p className="text-lg font-semibold text-[#6D4DFE]">Emeka Obi</p>
                                <p className="text-xs text-gray-500 italic">
                                    "Managing our family fund has never been easier. With ShareWallet, everyone can contribute and request support when needed. The platform is simple, transparent, and brings us closer together!"
                                </p>
                                <div className="flex gap-1 mt-2">
                                    <span className="text-yellow-400">★</span>
                                    <span className="text-yellow-400">★</span>
                                    <span className="text-yellow-400">★</span>
                                    <span className="text-yellow-400">★</span>
                                    <span className="text-yellow-400">★</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-10">
                            <div className="shadow-xl rounded-3xl w-[21vw] h-[10vw] bg-white flex items-center p-6 gap-4">
                                <img 
                                    src="https://randomuser.me/api/portraits/women/44.jpg"
                                    alt="Customer avatar"
                                    className="w-14 h-14 rounded-full object-cover border-4 border-[#6D4DFE]"
                                />
                                <div className="flex flex-col justify-center">
                                    <p className="text-md font-semibold text-[#6D4DFE]">Priya Singh</p>
                                    <p className="text-xs text-gray-500 italic">
                                        "As roommates, we always struggled to keep track of our shared expenses. With ShareWallet, splitting bills"
                                    </p>
                                    <div className="flex gap-1 mt-1">
                                        <span className="text-yellow-400">★</span>
                                        <span className="text-yellow-400">★</span>
                                        <span className="text-yellow-400">★</span>
                                        <span className="text-yellow-400">★</span>
                                        <span className="text-yellow-400">★</span>
                                    </div>
                                </div>
                            </div>
                            <div className="shadow-xl rounded-3xl w-[21vw] h-[10vw] bg-[#6D4DFE] flex items-center p-6 gap-4">
                                <img 
                                    src="https://randomuser.me/api/portraits/men/85.jpg"
                                    alt="Customer avatar"
                                    className="w-14 h-14 rounded-full object-cover border-4 border-white"
                                />
                                <div className="flex flex-col justify-center">
                                    <p className="text-md font-semibold text-white">Samuel Adeyemi</p>
                                    <p className="text-xs text-white italic">
                                        "ShareWallet helped our student group save for our annual trip effortlessly."
                                    </p>
                                    <div className="flex gap-1 mt-1">
                                        <span className="text-yellow-300">★</span>
                                        <span className="text-yellow-300">★</span>
                                        <span className="text-yellow-300">★</span>
                                        <span className="text-yellow-300">★</span>
                                        <span className="text-yellow-300">★</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}