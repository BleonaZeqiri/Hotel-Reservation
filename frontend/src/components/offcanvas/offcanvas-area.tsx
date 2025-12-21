import Link from "next/link";
import Image from "next/image";
import logo from '@/assets/img/logo/logo-2.png';
import { BehanceSvg, CloseSvg, DribbleSvg, InstagramSvg, YoutubeSvg } from "../svg";
import OffcanvasMenus from "./offcanvas-menus";


type IProps = {
    open: boolean;
    onClose: () => void
};
export default function OffcanvasArea({ open, onClose }: IProps) {
    return (
        <>
            <div className={`tp-offcanvas-area ${open ? 'opened' : ''}`}>
                <div className="tp-offcanvas-wrapper">
                    <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
                        <div className="tp-offcanvas-logo">
                            <Link href="/">
                                <Image data-width="138" src={logo} alt="logo" width={138} />
                            </Link>
                        </div>
                        <div className="tp-offcanvas-close">
                            <button onClick={onClose} className="tp-offcanvas-close-btn">
                                <CloseSvg />
                            </button>
                        </div>
                    </div>
                    <div className="tp-offcanvas-main">
                        <div className="tp-offcanvas-content">
                            <h3 className="tp-offcanvas-title">Hello There!</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                        </div>
                        <div className="tp-offcanvas-menu d-lg-none">
                            <nav>
                                {/* nav menus */}
                                <OffcanvasMenus />
                                {/* nav menus */}
                            </nav>
                        </div>
                        <div className="tp-offcanvas-contact">
                            <h3 className="tp-offcanvas-title sm">Information</h3>
                            <ul>
                                <li><a href="tel:1245654">+ 4 20 7700 1007</a></li>
                                <li><a href="mailto:hello@housey.com">hello@housey.com</a></li>
                                <li><a href="#">Avenue de Roma 158b, Lisboa</a></li>
                            </ul>
                        </div>
                        <div className="tp-offcanvas-social">
                            <h3 className="tp-offcanvas-title sm">Follow Us</h3>
                            <ul>
                                <li>
                                    <a href="#">
                                        <InstagramSvg />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <DribbleSvg />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <BehanceSvg />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <YoutubeSvg />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Offcanvas Overlay */}
            <div onClick={onClose} className={`body-overlay ${open ? 'opened' : ''}`}/>
            {/* Offcanvas Overlay */}
        </>
    )
}
