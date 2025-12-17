import React from "react";

type GuestCounterProps = {
    label: string;
    count: number;
    onIncrement: () => void;
    onDecrement: () => void;
    description: string;
};

export default function GuestCounter({
    label,
    count,
    onIncrement,
    onDecrement,
    description,
}: GuestCounterProps) {
    return (
        <li>
            <div className="tp-hero-quantity-content">
                <span>{label}</span>
                <p>{description}</p>
            </div>
            <div className="tp-hero-quantity-inner">
                <input
                    className="tp-hero-quantity-input"
                    type="text"
                    value={count}
                    readOnly
                />
                <span onClick={onIncrement} className="tp-increment">
                    <i className="fa-regular fa-angle-up"></i>
                </span>
                <span onClick={onDecrement} className="tp-dreckment">
                    <i className="fa-regular fa-angle-down"></i>
                </span>
            </div>
        </li>
    );
}
