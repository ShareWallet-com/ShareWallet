import Navbar from "../components/navbar";

export default function VerifyEmail(){
    return(
        <div className="h-screen shadow w-auto bg-[#fafafa] flex items-center justify-center flex-col gap-4">
            <Navbar/>
            <div className="flex items-center justify-center flex-col gap-2">
                <div className="w-96 h-auto p-4 border-[#dddddd] border rounded-2xl flex items-center justify-center flex-col gap-4">
                    <p className="text-xl font-bold">Forgot password</p>
                    <p className="text-xs">Please enter the email associated with your account.</p>
                <div className="w-full flex flex-col items-center justify-center gap-4 ">
                    <div className="w-[90%] flex flex-col  ">
                        <p className="text-[#1d1c1c] text-sm font-semibold">Email</p>
                        <input
                            type="email"
                            placeholder="you@youremail.com"
                            className="border border-[#1d1c1c] px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-black"/>
                    </div>
            </div>
                    <button className=" bg-[#1d1c1c] text-[#fafafa] px-4 py-2 text-xs rounded-md font-semibold w-auto">Next</button>
                </div>
            </div>
            <p className="text-xs text-[#9f9f9f]" >Remember password? Log In</p>
        </div>
    )
}