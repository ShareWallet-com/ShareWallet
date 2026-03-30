import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
export  default function Footer(){
    return(
        <div className="w-full h-screen bg-[#fafafa] flex items-center justify-center">
            <div className="w-2/3 h-[60%] shadow-2xl rounded-2xl flex items-start justify-center flex-col p-8">
                <div className="flex items-start justify-between">
                    <div className="w-1/2">
                        <div>
                        <img className="w-40" src="https://ik.imagekit.io/sharewallet/Group%2068.png?updatedAt=1749847778836" alt="ShareWallet Logo" />
                        </div>
                        <div>
                            <p className="text-justify text-sm text-[#6b6b6b]">ShareWallet is building the future of community-driven finance, enabling 
                            people to save, grow, and support each other with trust and transparency.</p>
                        </div>
                        <div className="flex items-center justify-center gap-8">
                            <FaInstagram />
                            <FaLinkedin />
                            <FaGithub />
                            <FaFacebook />
                        </div>
                    </div>
                    <div className="flex items-start justify-start">
                        <div>
                            <p className="font-bold ">Product</p>
                            <p className="text-xs">Features</p>
                            <p className="text-xs">Pricing</p>
                            <p className="text-xs">Changelog</p>
                        </div>
                        <div>
                            <p className="font-bold ">Resources</p>
                            <p className="text-xs">Documentation</p>
                            <p className="text-xs">Tutorials</p>
                            <p className="text-xs">Blog</p>
                            <p className="text-xs">Support</p>
                        </div>
                        <div>
                            <p className="font-bold ">Company</p>
                            <p className="text-xs">About</p>
                            <p className="text-xs">Careers</p>
                            <p className="text-xs">Contact</p>
                            <p className="text-xs">Partners</p>
                        </div>
                    </div>
                </div>
                <div className="border-t border-[#e5e5e5] my-4 w-[90%]"></div>
                <div className="text-[#6b6b6b] text-sm flex items-center justify-between">
                    <div>
                        <p>© 2026 ShareWallet. All rights reserved.</p>
                    </div>
                    <div className="flex items-center justify-center gap-8 underline p-4">
                        <p>Privacy Policy</p>
                        <p>Terms of Services</p>
                        <p>Cookies Settings</p>
                    </div>
                </div>
            </div>
        </div>
    )
}