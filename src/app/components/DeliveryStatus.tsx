const DeliveryStatus = () => {
    return (
        <div>
            <div className="my-10 w-full overflow-x-scroll">
                <ul className="timeline timeline-vertical lg:timeline-horizontal">
                    <li>
                        <div className="timeline-start">
                            Sep 24
                        </div>
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="text-primary h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-end timeline-box">
                            <h2 className="font-semibold">
                                Processing
                            </h2>
                            <span className="text-xs">
                                Sep 24 - 10.35 PM
                            </span>
                        </div>
                        <hr className="bg-primary" />
                    </li>
                    <li>
                        <hr className="bg-primary" />
                        <div className="timeline-start">
                            Sep 24
                        </div>
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="text-primary h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-end timeline-box">
                            <h2 className="font-semibold">
                                Shipped
                            </h2>
                            <span className="text-xs">
                                In transit - Last scan <br /> Sep 24 - 11.35 PM
                            </span>
                        </div>
                        <hr className="bg-primary" />
                    </li>
                    <li>
                        <hr className="bg-primary" />
                        <div className="timeline-start">
                            Sep 24
                        </div>
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="text-primary h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-end timeline-box">
                            <h2 className="font-semibold">
                                Out for delivery
                            </h2>
                            <span className="text-xs">
                                Awaiting for rider
                            </span>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-start">
                            Pending
                        </div>
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="text-primary h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-end timeline-box">
                            <h2 className="font-semibold">
                                Delivered
                            </h2>
                            <span className="text-xs">
                                Not yet delivered yet
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DeliveryStatus;