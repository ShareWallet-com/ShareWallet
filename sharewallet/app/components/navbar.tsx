export default function Navbar(){
    return(
        <div className="w-[90%]  h-14 absolute z-10 top-4 left-1/2 -translate-x-1/2 flex items-center justify-between">
            <div>
                <img className="w-40" src="https://ik.imagekit.io/sharewallet/Group%2068.png?updatedAt=1749847778836" alt="ShareWallet Logo" />
            </div>
            <div className="flex items-center justify-center gap-8  text-[#1d1c1c] font-semibold text-[15px]">
                <p>Home</p>
                <p>About</p>
                <p>Work</p>
                <p>Testimonial</p>
            </div>
            <div className="flex items-center justify-center gap-8">
                <button className="bg-[#1d1c1c] text-white px-4 py-2 text-xs rounded-md font-semibold">Contact Us</button>
                <button className="border border-[#1d1c1c] text-[#1d1c1c] px-4 py-2 text-xs rounded-md font-semibold">Explore Now</button>
            </div>
        </div>
    )
}