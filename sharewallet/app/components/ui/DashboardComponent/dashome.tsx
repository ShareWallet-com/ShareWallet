import Friendlist from "../../friendlist";
import Friendrequest from "../../friendrequest";
import TransactionHistory from "../../TransactionHistory";
import Userprofile from "../../userprofile";

export default function Home( user) {
    return (
        <div>
            <div className="flex gap-4">
                <div>
                    <Userprofile />
                    <Friendrequest user={user}/>
                </div>
                <Friendlist />
                <TransactionHistory />


            </div>
        </div>
    )
}