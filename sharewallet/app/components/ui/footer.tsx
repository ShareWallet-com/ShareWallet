import { FaInstagram, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full h-screen bg-[#fafafa] py-20 flex items-center justify-center relative">
      
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-[12vw] font-black w-full text-center z-0 text-[#dadada]">
        Sha₹e Wallet
    </div>

      <div className="w-[85%] max-w-6xl bg-white shadow-2xl rounded-3xl p-10 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          <div className="lg:w-1/2 space-y-6">
            <img
              className="w-40"
              src="https://ik.imagekit.io/sharewallet/Group%2068.png?updatedAt=1749847778836"
              alt="ShareWallet Logo"
            />

            <p className="text-sm text-[#6b6b6b] leading-relaxed max-w-md">
              ShareWallet is building the future of community-driven finance,
              enabling people to save, grow, and support each other with trust
              and transparency.
            </p>

            <div className="flex gap-5 text-lg text-[#4a4a4a]">
              <FaInstagram className="hover:text-black cursor-pointer" />
              <FaLinkedin className="hover:text-black cursor-pointer" />
              <FaGithub className="hover:text-black cursor-pointer" />
              <FaFacebook className="hover:text-black cursor-pointer" />
            </div>
          </div>
          <div className="flex gap-12">
            <div className="space-y-3">
              <p className="font-semibold text-sm">Product</p>
              <p className="text-sm text-[#6b6b6b] hover:text-black cursor-pointer">Features</p>
              <p className="text-sm text-[#6b6b6b] hover:text-black cursor-pointer">Pricing</p>
              <p className="text-sm text-[#6b6b6b] hover:text-black cursor-pointer">Changelog</p>
            </div>
            <div className="space-y-3">
              <p className="font-semibold text-sm">Resources</p>
              <p className="text-sm text-[#6b6b6b] hover:text-black cursor-pointer">Documentation</p>
              <p className="text-sm text-[#6b6b6b] hover:text-black cursor-pointer">Tutorials</p>
              <p className="text-sm text-[#6b6b6b] hover:text-black cursor-pointer">Blog</p>
              <p className="text-sm text-[#6b6b6b] hover:text-black cursor-pointer">Support</p>
            </div>

            {/* Company */}
            <div className="space-y-3">
              <p className="font-semibold text-sm">Company</p>
              <p className="text-sm text-[#6b6b6b] hover:text-black cursor-pointer">About</p>
              <p className="text-sm text-[#6b6b6b] hover:text-black cursor-pointer">Careers</p>
              <p className="text-sm text-[#6b6b6b] hover:text-black cursor-pointer">Contact</p>
              <p className="text-sm text-[#6b6b6b] hover:text-black cursor-pointer">Partners</p>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#6b6b6b]">

          <p>© 2026 ShareWallet. All rights reserved.</p>

          <div className="flex gap-6 underline">
            <p className="cursor-pointer hover:text-black">Privacy Policy</p>
            <p className="cursor-pointer hover:text-black">Terms of Services</p>
            <p className="cursor-pointer hover:text-black">Cookies Settings</p>
          </div>

        </div>

      </div>
    </div>
  );
}