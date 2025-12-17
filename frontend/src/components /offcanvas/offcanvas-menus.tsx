'use client'
import { MenuData } from "@/data/menu-data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function OffcanvasMenus() {
    const [navTitle, setNavTitle] = useState("");
    //openMobileMenu
    const openMobileMenu = (menu: string) => {
        if (navTitle === menu) {
            setNavTitle("");
        } else {
            setNavTitle(menu);
        }
    };
    return (
        <ul>
            {MenuData.menu_data_one.map((menu) => (
                <li key={menu.id} className={menu.home_menu ? 'position-static' : navTitle === menu.label ? 'active' : ''}>
                    <Link href={menu.url}>{menu.label}</Link>
                    {menu.home_menu && (
                        <div className="tp-mega-menu" style={{ display: navTitle === menu.label ? "block" : "none" }}>
                            <div className="tp-main-has-submenu">
                                <div className="row gx-6 row-cols-1 row-cols-md-2 row-cols-lg-5">
                                    {menu.submenu?.map((hm) => (
                                        <div key={hm.id} className="col homemenu">
                                            <div className="homemenu-thumb mb-15">
                                                <Link href={hm.url}>
                                                    <Image src={hm.img!} alt={hm.label} width={364} height={355} />
                                                </Link>
                                            </div>
                                            <div className="homemenu-content text-center">
                                                <h4 className="homemenu-title">
                                                    <Link href={hm.url}>{hm.label}</Link>
                                                </h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                    {!menu.home_menu && menu.submenu && <ul className="tp-submenu submenu" style={{ display: navTitle === menu.label ? "block" : "none" }}>
                        {menu.submenu.map((sm) => (
                            <li key={sm.id}>
                                <Link href={sm.url}>{sm.label}</Link>
                            </li>
                        ))}
                    </ul>}
                    {(menu.submenu || menu.home_menu) && (
                        <button onClick={() => openMobileMenu(menu.label)} className="tp-menu-close">
                            <i className="far fa-chevron-right"></i>
                        </button>
                    )}
                </li>
            ))}
        </ul>
    )
}
