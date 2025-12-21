import Link from "next/link";
import Image from "next/image";
import NavMenus from "./components/nav-menus";
import HeaderTopArea from "./components/header-top-area";
import logo from "@/assets/img/logo/logo.png";
import HeaderStickyProvider from "./components/header-sticky-provider";
import HeaderSearch from "../form/header-search";
import OffcanvasBtn from "../offcanvas/offcanvas-btn";

type IProps = {
   style_2?: boolean;
};

export default function HeaderOne({style_2}: IProps) {
   return (
      <header className="tp-header-height">
         <div className="tp-header-area">

            {/* header top area */}
            <HeaderTopArea />
            {/* header top area */}

            <HeaderStickyProvider top_cls={`tp-header-bottom tp-header-sm-spacing ${style_2?'tp-header-bottom-2':''}`}>
               <div className="container">
                  <div className="tp-header-main-wrap p-relative">
                     <div className="row align-items-center">
                        <div className="col-xl-2 col-lg-2 col-6">
                           <div className="tp-header-logo">
                              <Link href="/">
                                 <Image src={logo} alt="logo" width={138} height={30} />
                              </Link>
                           </div>
                        </div>
                        <div className="col-xl-6 col-lg-8 d-none d-lg-block">
                           <div className="tp-main-menu">
                              {/* main menu */}
                              <NavMenus />
                              {/* main menu */}
                           </div>
                        </div>
                        <div className="col-xl-4 col-lg-2 col-6">
                           <div className="tp-header-action d-flex justify-content-end">
                              <div className="tp-header-search tp-search-click d-none d-xl-block">
                                 <HeaderSearch/>
                              </div>
                              <div className="tp-header-btn-wrap d-none d-lg-block ml-30">
                                 <Link className="tp-header-btn" href="/contact">Book Now</Link>
                              </div>
                              <div className="tp-header-3-menu-bar d-lg-none tp-header-menu-btn-black">
                                 <OffcanvasBtn/>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </HeaderStickyProvider>
         </div>
      </header>
   )
}
