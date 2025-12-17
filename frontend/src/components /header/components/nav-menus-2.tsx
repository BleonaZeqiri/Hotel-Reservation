import Link from "next/link";
import Image from "next/image";
import { IMenuItemTwo } from "@/types/menu-d-t";

type IProps = {
  menu_data_two: IMenuItemTwo[];
};
export default function NavMenusTwo({ menu_data_two }: IProps) {
  return (
    <nav className="tp-mobile-menu-active">
      <ul>
        {menu_data_two.map((menuItem) => (
          <li key={menuItem.id} className="p-lg-inherit">
            <Link href={menuItem.url}>
              {menuItem.label}
              {(menuItem.submenu || menuItem.home_menus || menuItem.pagesMenus) && (
                <i className="fa-regular fa-angle-down"></i>
              )}
            </Link>
            {menuItem.home_menus && (
              <div className="tp-mega-menu tp-megamenu-active-left">
                <div className="tp-main-has-submenu tp-main-has-submenu-2">
                  <div className="row gx-6 row-cols-1 row-cols-md-2 row-cols-lg-5">
                    {menuItem.home_menus.map((subItem) => (
                      <div className="col homemenu" key={subItem.id}>
                        <div className="homemenu-thumb mb-15">
                          <Link href={subItem.url}>
                              <Image
                                src={subItem.img!}
                                alt={subItem.label}
                                width={213}
                                height={208}
                              />
                          </Link>
                        </div>
                        <div className="homemenu-content text-center">
                          <h4 className="homemenu-title">
                            <Link href={subItem.url}>{subItem.label}</Link>
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {menuItem.pagesMenus && (
              <div className="tp-mega-menu">
                <div className="tp-megamenu-small">
                  <div className="row gx-6 row-cols-1 row-cols-lg-3">
                    {menuItem.pagesMenus.map((subPage) => (
                      <div className="col" key={subPage.id}>
                        <div className="tp-megamenu-list">
                          <ul>
                            {subPage.links.map((link) => (
                              <li key={link.id}>
                                <Link href={link.url}>{link.label}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {menuItem.submenu &&
              !menuItem.home_menus &&
              !menuItem.pagesMenus && (
                <ul className="tp-submenu submenu">
                  {menuItem.submenu.map((subItem) => (
                    <li key={subItem.id}>
                      <Link href={subItem.url}>{subItem.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
