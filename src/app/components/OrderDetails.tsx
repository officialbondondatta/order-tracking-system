import React from 'react';
import { BiArrowToBottom } from 'react-icons/bi';
import { GiChatBubble } from 'react-icons/gi';
import { HiHomeModern } from 'react-icons/hi2';

interface IOrderProps {
    customerName: string,
    customerAddress: string,
    productName: string,
    productDesc: string,
    quantity: number,
    price: number
    productImg?: string
    deliveryPartner: string
}
const OrderDetails = () => {
    const orderDetails: IOrderProps = {
        customerName: "Bondon Datta",
        customerAddress: "Farmgate,Dhaka",
        productName: "Everyday Backpack",
        productDesc: "Sage . 18L . ",
        quantity: 1,
        price: 68.00,
        deliveryPartner: "foodpanda"
    }
    return (
        <div className="flex flex-col space-y-5">
            <div className="mb-3 space-y-3">
                <h2 className="text-xl font-semibold">In this order</h2>
                <div className="bg-indigo-100 rounded-xl px-5 grid gap-5 lg:grid-cols-2 grid-cols-1 py-8">
                    <div className=" bg-indigo-200 rounded-full flex items-center justify-center">
                        <HiHomeModern className="text-2xl"></HiHomeModern>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-lg font-semibold">{orderDetails.productName}</h2>
                        <span className="text-xs">{orderDetails.productDesc} Qty.{orderDetails.quantity}</span>
                        <span>${orderDetails.price}</span>
                    </div>
                </div>
            </div>
            <div>
                <details className="collapse bg-green-50 border border-base-300" name="my-accordion-det-1">
                    <summary className="collapse-title font-semibold flex items-center gap-2"> <BiArrowToBottom className="text-xl"></BiArrowToBottom> View order Details</summary>
                    <div className="collapse-content text-sm space-y-3">
                        <div>
                            <h2>{orderDetails.productName} - ${orderDetails.price}</h2>
                            <span>Shipping - Free</span>
                            <span>Total - ${orderDetails.price}</span>
                        </div>
                        <div>
                            <h2>Deliver to {orderDetails.customerName}</h2>
                            <span>{orderDetails.customerAddress}</span>
                        </div>
                        <div>
                            <h2>Delivery Partner: {orderDetails.deliveryPartner}</h2>
                        </div>
                    </div>
                </details>
            </div>
            <div className="bg-indigo-100 rounded-md px-5 py-8 flex flex-col gap-2">
                <h2 className="text-lg font-semibold">Delivery Address</h2>
                <span>{orderDetails.customerName}</span>
                <span>{orderDetails.customerAddress}</span>
            </div>
            <div className="flex flex-col gap-3 bg-indigo-200 rounded-xl p-5">
                <h2 className="text-lg font-semibold"> A real person, ready to help.</h2>
                <span>Have a question about your delivery ?</span>
                <div className="flex items-center gap-2">
                    <GiChatBubble></GiChatBubble>
                    <h2>Contact Support</h2>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;