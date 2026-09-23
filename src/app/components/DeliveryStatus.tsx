import { IoCheckmarkDoneCircle, IoCheckmarkDoneCircleOutline } from "react-icons/io5";

interface IStatusProps {
    state: "Delayed Order" | "Delivered, not received" | "Tracking unavailable"
}

const isStepActive = (step: number, state: IStatusProps["state"]) => {
    const lastActiveStep = state === "Delayed Order"
        ? 1
        : state === "Delivered, not received"
            ? 3
            : 0;

    return step <= lastActiveStep;
};

const DeliveryStatus = ({ state }: IStatusProps) => {
    return (
        <div>
            <div className="my-10 w-full overflow-x-scroll">
                <ul className="timeline timeline-vertical lg:timeline-horizontal">
                    <li>
                        <div className={`timeline-start ${isStepActive(0, state) ? "text-primary" : "text-base-content/40"}`}>
                            Processing
                        </div>
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className={`h-5 w-5 ${isStepActive(0, state) ? "text-primary" : "text-base-content/40"}`}
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-end timeline-box">
                            <span className="text-xs">
                                Sep 24 - 10.35 PM
                            </span>
                        </div>
                        <hr className={isStepActive(0, state) ? "bg-primary" : ""} />
                    </li>
                    <li>
                        <hr className={isStepActive(0, state) ? "bg-primary" : ""} />
                        <div className={`timeline-start ${isStepActive(1, state) ? "text-primary" : "text-base-content/40"}`}>
                            Shipped
                        </div>
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className={`h-5 w-5 ${isStepActive(1, state) ? "text-primary" : "text-base-content/40"}`}
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-end timeline-box">
                            <span className="text-xs">
                                In transit - Last scan <br /> Sep 24 - 11.35 PM
                            </span>
                        </div>
                        <hr className={isStepActive(1, state) ? "bg-primary" : ""} />
                    </li>
                    <li>
                        <hr className={isStepActive(1, state) ? "bg-primary" : ""} />
                        <div className={`timeline-start ${isStepActive(2, state) ? "text-primary" : "text-base-content/40"}`}>
                            Out for delivery
                        </div>
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className={`h-5 w-5 ${isStepActive(2, state) ? "text-primary" : "text-base-content/40"}`}
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-end timeline-box">
                            <span className="text-xs">
                                Awaiting for rider
                            </span>
                        </div>
                        <hr className={isStepActive(2, state) ? "bg-primary" : ""} />
                    </li>
                    <li>
                        <hr className={isStepActive(2, state) ? "bg-primary" : ""} />
                        <div className={`timeline-start ${isStepActive(3, state) ? "text-primary" : "text-base-content/40"}`}>
                            {
                                state === "Delivered, not received" ?
                                    "Marked Delivered"
                                    :
                                    "Pending"
                            }
                        </div>
                        <div className="timeline-middle">
                            {
                                state === "Delivered, not received" ?
                                    <IoCheckmarkDoneCircle className={`text-2xl ${isStepActive(3, state) ? "text-primary" : "text-base-content/40"}`} />
                                    :
                                    <IoCheckmarkDoneCircleOutline className={`text-2xl ${isStepActive(3, state) ? "text-primary" : "text-base-content/40"}`} />
                            }

                        </div>
                        <div className="timeline-end timeline-box">
                            <span className="text-xs">
                                {
                                    state === "Delivered, not received" ?
                                        "Delivered"
                                        :
                                        "Not yet delivered yet"
                                }
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DeliveryStatus;