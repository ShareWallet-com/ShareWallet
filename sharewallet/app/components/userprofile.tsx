export default function Userprofile() {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white w-80 rounded-3xl shadow-lg border border-gray-100 p-6">

        {/* Top */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center text-lg font-semibold">
            B
          </div>

          <div>
            <h1 className="text-base font-semibold text-gray-800">Bikesh</h1>
            <p className="text-sm text-gray-400">@Bikesh803</p>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-3 text-sm">

          <div className="bg-gray-50 rounded-xl p-3">
            <p className="text-gray-400 text-xs">Phone</p>
            <p className="font-medium text-gray-800">+91 XXXXX XXXXX</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-3">
            <p className="text-gray-400 text-xs">Email</p>
            <p className="font-medium text-gray-800">bikesh@email.com</p>
          </div>

        </div>

      </div>
    </div>
  );
}