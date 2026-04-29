import Friendlist from "../../friendlist";
import Friendrequest from "../../friendrequest";
import TransactionHistory from "../../TransactionHistory";
import Userprofile from "../../userprofile";

export default function Home() {
    return (
        <div>
            <div className="flex gap-4">
                <div>
                    <Userprofile />
                    <Friendrequest/>
                </div>
                <Friendlist />
                <TransactionHistory />


            </div>
        </div>
    )
}