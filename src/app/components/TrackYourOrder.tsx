import DeliveryDetails from "./DeliveryDetails";
import OrderDetails from "./OrderDetails";

const TrackYourOrder = () => {
    return (
        <section className="container mx-auto max-w-300 mt-10 bg-indigo-50 p-5 rounded-2xl">
            {/* Common Header */}
            <div className="space-y-2 flex flex-col mb-5">
                <h1 className="text-xl font-semibold">Track Your Order</h1>
                <div className="flex gap-2">
                    <span className="">Order-id-123434</span>
                    <span>Placed September 24,2026</span>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-5">
                {/* Left side */}
                <div className="col-span-7 bg-green-50 p-5 py-8 rounded-xl">
                    <DeliveryDetails></DeliveryDetails>
                </div>
                {/* common right side */}
                <div className="col-span-5">
                    <OrderDetails></OrderDetails>
                </div>
            </div>
        </section>
    );
};

export default TrackYourOrder;