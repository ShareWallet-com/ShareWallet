"use client"
import { useRouter } from "next/navigation";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";

export default function Login(){
    const router = useRouter();
    const[formData,setFormData] = useState({
        email:"",
        password:"",
    })
    const[loading,setLoading] = useState(false);
    const [error,setError] = useState("");
    useEffect(() =>{
        const token = document.cookie.includes("token");
        if(token){
            router.push("/dashboard");
        }
    },[router]);
    
    const validateForm = () =>{
        if(!formData.email) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(formData.email)) return "Invalid email format";
        if(!formData.password) return "Password is required";
        if(formData.password.length < 8) return "Password must be at least 8 characters long";
        return null;
    }

    const handleSubmit = async (e:React.FormEvent) =>{
        e.preventDefault();
        setError("");
        const validationError = validateForm();
        if(validationError) return setError(validationError);
        try{
            setLoading(true);
            const res = await fetch("/api/signin",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                credentials: "include",
                body:JSON.stringify({
                    email:formData.email,
                    password:formData.password
                })
            })
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Signup failed");
            router.push("/dashboard");
        }catch(err){
            setError((err as Error).message)
        }finally{
            setLoading(false);
        }
    }

    return(
        <div className="h-screen w-auto bg-[#fafafa] flex items-center justify-center flex-col gap-4">
            <Navbar/>
            <form onSubmit={handleSubmit} className="flex items-center justify-center flex-col gap-2">
                <h1 className="text-3xl font-mono font-bold text-[#1d1c1c] text-center">Welcome back! <br /> Login to your account</h1>
                <div className="w-96 h-96 border-[#dddddd] border rounded-2xl flex items-center justify-center flex-col gap-4">
                    <button className="border border-[#1d1c1c] text-[#1d1c1c] px-4 py-2 text-ls rounded-md font-semibold w-[90%]">Continue with Google</button>
                    <p className="text-xs text-[#9f9f9f]">or continue with email</p>
                <div className="w-full flex flex-col items-center justify-center gap-4 ">
                    <div className="w-[90%] flex flex-col  ">
                        <p className="text-[#1d1c1c] text-sm font-semibold">Email</p>
                        <input
                            type="email"
                            onChange={(e) =>
                                setFormData({...formData,email:e.target.value})
                            }
                            placeholder="you@youremail.com"
                            className="border border-[#1d1c1c] px-2 py-1 rounded-md outline-none focus:ring-2 focus:ring-black"/>
                    </div>
                <div className="w-[90%] flex flex-col">
                    <p className="text-[#1d1c1c] text-sm font-semibold">Password</p>
                    <input
                        type="password"
                        onChange={(e) =>
                            setFormData({...formData,password:e.target.value})
                        }
                        placeholder="At least 8 characters"
                        className="border border-[#1d1c1c] px-2 py-1 rounded-md outline-none focus:ring-2 focus:ring-black"
                    />
                </div>

            </div>
                    <button
                    type="submit"
                    disabled={loading}
                     className=" bg-[#1d1c1c] text-[#fafafa] px-4 py-2 text-ls rounded-md font-semibold w-[90%]">{loading ? "Creating..." : "Create profile"}</button>
                    <p className="text-xs w-2/3 text-center">Forgot Password?</p>
                </div>
            </form>
            <p className="text-xs text-[#9f9f9f]" >Don’t have a Peerlist profile? Create One!</p>
        </div>
    )
}