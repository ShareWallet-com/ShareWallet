export default function Friendlist() {
  return (
    <div>
      <div className="bg-white shadow-xl rounded-2xl w-80 h-96 p-5 border border-gray-100">

        {/* Header */}
        <div className="flex items-center justify-between mb-5 border-b pb-3">
          <h1 className="text-lg font-semibold text-gray-800">
            Friends
          </h1>
          <p className="text-sm text-gray-400">12</p>
        </div>

        {/* Friend List */}
        <div className="space-y-3">

          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-medium">
              A
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">Aman</p>
              <p className="text-xs text-gray-400">@aman12</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
            <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-medium">
              R
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">Rohit</p>
              <p className="text-xs text-gray-400">@rohit45</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
            <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-medium">
              S
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">Sneha</p>
              <p className="text-xs text-gray-400">@sneha09</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}