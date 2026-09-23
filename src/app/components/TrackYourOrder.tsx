import DeliveryDetails from "./DeliveryTrackings/DeliveryDetailsDelayed";
import DeliveryDetailsDeliveredNotRecieved from "./DeliveryTrackings/DeliveryDetailsDeliveredNotRecieved";
import DeliveryTrackingUnavailable from "./DeliveryTrackings/DeliveryTrackingUnavailable";
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
                    {/* name of each tab group should be unique */}
                    <div className="tabs">
                        <input type="radio" name="my_tabs_6" className="tab text-sm font-semibold checked:border checked:rounded-full checked:bg-indigo-400 checked:text-white checked:border-indigo-500" aria-label="Delayed Order" defaultChecked />
                        <div className="tab-content mt-5">
                            <DeliveryDetails></DeliveryDetails>
                        </div>

                        <input type="radio" name="my_tabs_6" className="tab text-sm font-semibold checked:border checked:rounded-full checked:bg-indigo-400 checked:text-white checked:border-indigo-500" aria-label="Delivered but not received" />
                        <div className="tab-content mt-5">
                            <DeliveryDetailsDeliveredNotRecieved></DeliveryDetailsDeliveredNotRecieved>
                        </div>

                        <input type="radio" name="my_tabs_6" className="tab text-sm font-semibold checked:border checked:rounded-full checked:bg-indigo-400 checked:text-white checked:border-indigo-500" aria-label="Tracking Not available yet" />
                        <div className="tab-content mt-5">
                            <DeliveryTrackingUnavailable></DeliveryTrackingUnavailable>
                        </div>
                    </div>
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