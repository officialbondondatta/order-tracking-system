import Link from "next/link";
import DeliveryStatus from "../DeliveryStatus";
const DeliveryDetails = () => {
    return (
        <div>
            <div className="flex flex-col space-y-3">
                <span className="self-start py-1 px-3 rounded-full bg-orange-200 font-semibold">Delivery delayed</span>
                <h2 className="text-3xl font-semibold">Running a little late</h2>
                <p>Your package is still on its way. It was expected yesterday, and we are sorry for the wait.</p>
            </div>
            <div className="flex flex-col">
                <div className="bg-indigo-100 rounded-xl p-4 mt-5">
                    <span className="text-sm">Updated delivery estimate</span>
                    <h2 className="text-xl font-semibold">Today, Sep 24 . by 8 PM</h2>
                    <span className="text-sm">Previous estimate: Sep 23 . by 8 PM</span>
                </div>
                <div className="col-span-7">
                    <DeliveryStatus state="Delayed Order"></DeliveryStatus>
                </div>
                <div>
                    <Link href={"/"} className="bg-indigo-400 px-3 font-semibold py-1 rounded-full text-white">Ask for a delivery update</Link>
                </div>
            </div>

        </div>
    );
};

export default DeliveryDetails;