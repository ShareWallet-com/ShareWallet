import Navbar from "../components/navbar";

export default function Signup(){
    return(
        <div className="h-screen w-auto bg-[#fafafa] flex items-center justify-center flex-col gap-4">
            <Navbar/>
            <div className="flex items-center justify-center flex-col gap-2">
                <h1 className="text-3xl font-mono font-bold text-[#1d1c1c]">Signup & create your profile</h1>
                <div className="w-96 h-96 border rounded-2xl flex items-center justify-center flex-col gap-4">
                    <button className="border border-[#1d1c1c] text-[#1d1c1c] px-4 py-2 text-ls rounded-md font-semibold w-[90%]">Continue with Google</button>
                    <p className="text-xs text-[#9f9f9f]">or continue with email</p>
                <div className="w-full flex flex-col items-center justify-center gap-4 ">
                    <div className="w-[90%] flex flex-col  ">
                        <p className="text-[#1d1c1c] text-sm font-semibold">Email</p>
                        <input
                            type="email"
                            placeholder="you@youremail.com"
                            className="border border-[#1d1c1c] px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-black"/>
                    </div>
                <div className="w-[90%] flex flex-col">
                    <p className="text-[#1d1c1c] text-sm font-semibold">Password</p>
                    <input
                        type="password"
                        placeholder="At least 8 characters"
                        className="border border-[#1d1c1c] px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-black"
                    />
                </div>

            </div>
                    <button className=" bg-[#1d1c1c] text-[#fafafa] px-4 py-2 text-ls rounded-md font-semibold w-[90%]">Create profile</button>
                    <p className="text-xs w-2/3 text-center">By clicking &quot;Create Profile&quot; you agree to our Code of Conduct, Terms of Service and Privacy Policy.</p>
                </div>
            </div>
            <p className="text-xs text-[#9f9f9f]" >Already have a profile?Log In</p>
        </div>
    )
}