import React from 'react';
import { GiChatBubble } from 'react-icons/gi';
import { HiHomeModern } from 'react-icons/hi2';

interface IOrderProps {
    customerName: string,
    customerAddress: string,
    productName: string,
    productDesc: string,
    price: number
    productImg?: string
    deliveryPartner: string
}
const OrderDetails = () => {
    const orderDetails: IOrderProps = {
        customerName: "Bondon Datta",
        customerAddress: "Farmgate,Dhaka",
        productName: "Everyday Backpack",
        productDesc: "Sage . 18L . Qty 1",
        price: 68.00,
        deliveryPartner: "foodpanda"
    }
    return (
        <div className="flex flex-col space-y-5">
            <div>
                <h2>In this order</h2>
                <div>
                    <div>
                        <HiHomeModern></HiHomeModern>
                    </div>
                    <div>
                        <h2>{orderDetails.productName}</h2>
                        <span>{orderDetails.productDesc}</span>
                        <span>${orderDetails.price}</span>
                    </div>
                </div>
            </div>
            <div>
                <details className="collapse bg-base-100 border border-base-300" name="my-accordion-det-1">
                    <summary className="collapse-title font-semibold">View order Details</summary>
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
            <div>
                <h2>Delivery Address</h2>
                <span>{orderDetails.customerName}</span>
                <span>{orderDetails.customerAddress}</span>
            </div>
            <div>
                <h2> A real person, ready to help.</h2>
                <span>Have a question about your delivery ?</span>
                <div>
                    <GiChatBubble></GiChatBubble>
                    <h2>Contact Support</h2>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;