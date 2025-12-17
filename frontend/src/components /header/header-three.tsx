import Link from "next/link";
import Image from "next/image";
import logo_1 from "@/assets/img/logo/logo3.png";
import logo_2 from "@/assets/img/logo/logo-2.png";
import { MenuData } from "@/data/menu-data";
import NavMenusTwo from "./components/nav-menus-2";
import { Calender } from "../svg";
import HeaderStickyProvider from "./components/header-sticky-provider";
import HeaderSearch from "../form/header-search";
import OffcanvasBtn from "../offcanvas/offcanvas-btn";


type Props = {
  transparentWhite?: boolean;
  transparentHeader2?: boolean;
  top_spacing?: string
};
// tp-header-three-area p-relative tp-header-4-border
export default function HeaderThree({ transparentWhite = true, transparentHeader2 = false, top_spacing = 'mb-50' }: Props) {
  return (
    <header className="tp-header-height">
      <HeaderStickyProvider
        top_cls={`tp-header-three-area p-relative ${transparentHeader2 ? 'tp-header-4-border' : 'z-index-1 tp-header-3-border'} ${transparentWhite ? 'header-sticky-white tp-transparent' : transparentHeader2 ? '' : `tp-header-bg ${top_spacing}`}`}
      >
        <div className="container container-1700">
          <div className="row align-items-center">
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-2">
              <div className="tp-header-3-menu-wrap d-flex align-items-center">
                <div className={`tp-header-3-menu-bar ${transparentWhite ? '' : 'tp-black'}`}>
                  <OffcanvasBtn lines={2}/>
                </div>
                <div className={`tp-main-menu tp-main-menu-3 ${transparentWhite ? '' : 'tp-main-menu-4'} d-none d-lg-block`}>
                  <NavMenusTwo menu_data_two={MenuData.menu_data_two} />
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-2 col-lg-2 col-10">
              <div className="tp-header-logo tp-header-logo-3 text-center">
                <Link className="p-relative" href="/">
                  <Image
                    data-width="155"
                    style={{ width: "155px" }}
                    className="logo-normal"
                    src={transparentWhite ? logo_1 : logo_2}
                    alt="logo"
                    width={155}
                  />
                  <Image
                    data-width="155"
                    style={{ width: "155px" }}
                    className="logo-sticky"
                    src={logo_2}
                    alt="logo"
                    width={155}
                  />
                </Link>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-4">
              <div className="tp-header-3-right d-flex align-items-center justify-content-end">
                <div className={`tp-header-search tp-search-click d-none d-xl-block ${transparentWhite ? 'tp-header-3-search' : 'tp-black'}`}>
                  <HeaderSearch/>
                </div>
                <div className={`tp-header-lang d-none d-lg-block ml-5 ${transparentWhite ? '' : 'tp-black'}`}>
                  <button>en</button>
                  <button>de</button>
                </div>
                <div className="tp-header-3-btn d-none d-lg-block ml-30">
                  <Link className="tp-btn-4" href="/contact">
                    <Calender />
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HeaderStickyProvider>
    </header>
  );
}
