import Image from "next/image";
import logo from '@/assets/img/logo/logo.png';
import NavMenus from "./components/nav-menus";
import Link from "next/link";
import HeaderStickyProvider from "./components/header-sticky-provider";
import OffcanvasBtn from "../offcanvas/offcanvas-btn";


export default function HeaderFour() {
    return (
        <>
            <header className="tp-header-height">
                <HeaderStickyProvider top_cls="tp-header-area tp-header-2-border tp-header-sm-spacing">
                    <div className="container">
                        <div className="tp-header-main-wrap p-relative">
                            <div className="row align-items-center">
                                <div className="col-xl-2 col-lg-2 col-6">
                                    <div className="tp-header-logo">
                                        <Link href="/">
                                            <Image data-width="138" src={logo} alt="logo" width={138}/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-8  d-none d-lg-block">
                                    <div className="tp-main-menu tp-main-menu-2 text-center">
                                        <div className="tp-main-menu">
                                            {/* main menu */}
                                            <NavMenus />
                                            {/* main menu */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-2 col-6">
                                    <div className="tp-header-action d-flex justify-content-end">
                                        <div className="tp-header-btn-wrap d-none d-lg-block ml-30">
                                            <Link className="tp-header-btn" href="/contact">Book Now</Link>
                                        </div>
                                        <div className="tp-header-2-menu-bar  tp-header-3-menu-bar d-lg-none tp-header-menu-btn-black">
                                            <OffcanvasBtn/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </HeaderStickyProvider>
            </header>
        </>
    )
}
