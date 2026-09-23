import DeliveryDetails from "./DeliveryDetails";

const TrackYourOrder = () => {
    return (
        <section className="container mx-auto max-w-300 mt-10 bg-indigo-50 p-5">
            {/* Common Header */}
            <div className="space-y-2 flex flex-col mb-5">
                <h1 className="text-xl font-semibold">Track Your Order</h1>
                <div className="flex gap-2">
                    <span className="">Order-id-123434</span>
                    <span>Placed September 24,2026</span>
                </div>
            </div>
            <div>
                {/* Left side */}
                <div>
                    <DeliveryDetails></DeliveryDetails>
                </div>
                {/* common right side */}
            </div>
        </section>
    );
};

export default TrackYourOrder;