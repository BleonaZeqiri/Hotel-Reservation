"use client"
import { useVideoModal } from "../provider/video-provider";
import { VideoSvg } from "../svg";


export default function VideoArea() {
    const { playVideo } = useVideoModal();
    return (
        <div className="tp-video-area bg-position jarallax p-relative" style={{ backgroundImage: 'url(/assets/img/video/01.jpg)' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-video-three-wrap tp-video-three-spacing text-center">
                            <div className="tp-video-main mb-45">
                                <button onClick={() => playVideo("go7QYaQR494")} className="tp-video-three-play tp-pulse-border p-relative">
                                    <VideoSvg clr="#FAF5EF"/>
                                </button>
                            </div>
                            <h3 className="tp-video-title">Experience a <a href="#">Memorable</a><br /> Stay at our Hotel.!</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tp-video-great-work">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tp-video-great-content text-center">
                                <p>Let’s make something great work together.
                                    <a href="#">Got a project in mind?
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 11L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M1 1H11V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
