import React from 'react';
import DeliveryStatus from '../DeliveryStatus';
import Link from 'next/link';

const DeliveryDetailsDeliveredNotRecieved = () => {
    return (
        <div>
            <div className="flex flex-col space-y-3">
                <span className="self-start py-1 px-3 rounded-full bg-orange-200 font-semibold">Delivery issue</span>
                <h2 className="text-3xl font-semibold">Delivered, but not here ?</h2>
                <p>The carrier marked your package as delivered. If you can’t find it, we’ll help you track it down.</p>
            </div>
            <div className="flex flex-col">
                <div className="bg-indigo-100 rounded-xl p-4 mt-5">
                    <span className="text-sm">Marked delivered</span>
                    <h2 className="text-xl font-semibold">Today, Sep 24 . by 8 PM</h2>
                    <span className="text-sm">Carrier note: left at the front door</span>
                </div>
                <div className="col-span-7">
                    <DeliveryStatus></DeliveryStatus>
                </div>
                <div>
                    <Link href={"/"} className="bg-indigo-400 px-3 font-semibold py-1 rounded-full text-white">Report a missing package</Link>
                </div>
            </div>

        </div>
    );
};

export default DeliveryDetailsDeliveredNotRecieved;