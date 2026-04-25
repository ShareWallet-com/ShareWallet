import { ClockFading } from "lucide-react";
export default function TransactionHistory() {
    return(
        <div>
            <div className="bg-white shadow-xl rounded-2xl w-80 h-96 p-4 border border-gray-100">

                <h1 className="text-sm font-semibold flex items-center gap-2 border-b pb-3 text-gray-800">
                    <ClockFading size={20} color="#000000" strokeWidth={1.5} />
                    Your Transaction History
                </h1>

                <div className="flex flex-col items-center justify-center h-[85%] text-center">
                    <ClockFading size={45} className="text-gray-300 mb-3" strokeWidth={1.2} />

                    <p className="text-sm font-semibold text-gray-700">
                        No transactions yet
                    </p>

                    <p className="text-xs text-gray-400 mt-1 px-6">
                        Your recent deposits, withdrawals, and transfers will appear here.
                    </p>
                </div>

            </div>
        </div>
    )
}