import CounterItem from "./counter-item";

const counterData = [
    { end: 45, title: "Realized Projects" },
    { end: 16, title: "Years Experiences" },
    { end: 96, title: "Happy Customers" },
    { end: 14, title: "Trusted Partners" },
];

export default function CounterArea() {
    return (
        <div className="tp-counter-area pb-120">
            <div className="container">
                <div className="row gx-0">
                    {counterData.map((counter, index) => (
                        <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
                            <div className="tp-counter-item">
                                <h3 className="tp-counter-number">
                                    <CounterItem min={0} max={counter.end}/>+
                                </h3>
                                <span className="tp-counter-title">{counter.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
