import Link from "next/link";
import DeliveryStatus from "../DeliveryStatus";

const DeliveryTrackingUnavailable = () => {
    return (
        <div>
            <div className="flex flex-col space-y-3">
                <span className="self-start py-1 px-3 rounded-full bg-orange-200 font-semibold">Order Confimed</span>
                <h2 className="text-3xl font-semibold">Getting your order ready</h2>
                <p>Your order is in. Tracking will appear as soon as the carrier scans your package.</p>
            </div>
            <div className="flex flex-col">
                <div className="bg-indigo-100 rounded-xl p-4 mt-5">
                    <span className="text-sm">Estimated delivery</span>
                    <h2 className="text-xl font-semibold">Today, Sep 24 . by 8 PM</h2>
                    <span className="text-sm">We will email you when tracking is available.</span>
                </div>
                <div className="col-span-7">
                    <DeliveryStatus></DeliveryStatus>
                </div>
                <div>
                    <Link href={"/"} className="bg-indigo-400 px-3 font-semibold py-1 rounded-full text-white">Get help with this order</Link>
                </div>
            </div>

        </div>
    );
};

export default DeliveryTrackingUnavailable;