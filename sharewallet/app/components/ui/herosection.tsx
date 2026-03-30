import Navbar from "../navbar"

export default function Herosection(){
    return(
        <div className="min-h-screen w-full bg-[#fafafa] relative">
            <div className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `
                      linear-gradient(to right, #e5e5e5 1px, transparent 1px)
                    `,
                    backgroundSize: "96px 100%",
                  }}
            />
            <div className="w-full h-screen flex items-center justify-center relative z-10 flex-col gap-8">
                <Navbar/>
                <div className="font-black text-7xl">
                    <h1>Save Together,Grow Together.</h1>
                    <h1>Powering <span className="font-mono text-[#6D4DFE]">Community</span> Banking</h1>
                </div>
                <div className="flex items-center justify-center text-center">
                    <p className="w-2/3">ShareWallet helps students, families, and groups manage collective savings with transparent 
                    contributions, emergency fund requests, and real-time collaboration.</p>
                </div>
                <button className="bg-[#6D4DFE] text-white px-4 py-2 text-xs rounded-md font-semibold">Create Your Account</button>
            </div>
        </div>

    )
}