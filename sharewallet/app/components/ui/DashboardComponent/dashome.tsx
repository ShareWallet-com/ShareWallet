import Friendlist from "../../friendlist";
import TransactionHistory from "../../TransactionHistory";
import Userprofile from "../../userprofile";

export default function Home() {
    return (
        <div>
            <div className="flex gap-4">
                <Userprofile/>
                <Friendlist/>
                <TransactionHistory/>
            </div>
        </div>
    )
}