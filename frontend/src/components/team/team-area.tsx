import Image from "next/image";
import teamData from "@/data/team-data";


export default function TeamArea() {
    return (
        <div className="tp-team-area pb-95">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-team-title-box mb-50">
                            <h6 className="tp-about-top-subtitle"><span></span> Team Members</h6>
                            <h2 className="tp-about-top-title tp-about-top-title-2">Meet our  <span>team </span></h2>
                        </div>
                    </div>
                    {teamData.slice(0, 4).map((item) => (
                        <div key={item.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="tp-team-item mb-25 p-relative">
                                <div className="tp-team-thumb box-transition">
                                    <Image className="w-100" src={item.image} alt="member-1" width={282} height={360} style={{ height: 'auto' }} />
                                </div>
                                <div className="tp-team-content">
                                    <h3 className="tp-team-title"><a href="#">{item.name}</a></h3>
                                    <p className="tp-team-subtitle">{item.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
