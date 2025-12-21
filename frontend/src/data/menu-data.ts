import { IMenuItem, IMenuItemTwo } from "@/types/menu-d-t";

const menu_data_one: IMenuItem[] = [
  {
    id: 1,
    label: "Home",
    url: "/",
    home_menu: true,
    submenu: [
      {
        id: 1,
        label: "Modern Hotel",
        url: "/",
        img: "/assets/img/menu-demo/demo.jpg",
      },
      {
        id: 2,
        label: "City Hotel",
        url: "/city-hotel",
        img: "/assets/img/menu-demo/demo-2.jpg",
      },
      {
        id: 3,
        label: "Luxury Hotel",
        url: "/luxury-hotel",
        img: "/assets/img/menu-demo/demo-3.jpg",
      },
      {
        id: 4,
        label: "Modern Resort",
        url: "/modern-resort",
        img: "/assets/img/menu-demo/demo-4.jpg",
      },
      {
        id: 5,
        label: "Sea Hotel",
        url: "/sea-hotel",
        img: "/assets/img/menu-demo/demo-5.jpg",
      },
    ],
  },
  { id: 2, label: "About Us", url: "/about" },
  {
    id: 3,
    label: "Room",
    url: "/room-1",
    submenu: [
      { id: 1, label: "Room One", url: "/room-1" },
      { id: 2, label: "Room Two", url: "/room-2" },
      { id: 3, label: "Room Three", url: "/room-3" },
      { id: 4, label: "Room Details One", url: "/room-details/6722f5a4bf533ecf1e775960" },
      { id: 5, label: "Room Details Two", url: "/room-details-2/6722f5a4bf533ecf1e775960" },
      { id: 6, label: "Room Details Three", url: "/room-details-3/6722f5a4bf533ecf1e775960" },
    ],
  },
  { id: 4, label: "Gallery", url: "/gallery" },
  {
    id: 5,
    label: "Blog",
    url: "/blog-grid",
    submenu: [
      { id: 1, label: "Blog Grid", url: "/blog-grid" },
      { id: 2, label: "Blog Sidebar", url: "/blog-sidebar" },
      { id: 3, label: "Blog Details", url: "/blog-details/1" },
      { id: 4, label: "Blog Details Two", url: "/blog-details-2/1" },
    ],
  },
  {
    id: 6,
    label: "Pages",
    url: "#",
    submenu: [
      { id: 1, label: "Faq", url: "/faq" },
      { id: 2, label: "Offer", url: "/offer" },
      { id: 3, label: "Pricing Plan", url: "/pricing-plan" },
      { id: 4, label: "Destination", url: "/destination" },
      { id: 5, label: "Destination Details", url: "/destination-details/6725b87efde8824654c5890b" },
      { id: 6, label: "Login", url: "/login" },
      { id: 7, label: "Register", url: "/register" },
      { id: 8, label: "Forgot", url: "/forgot" },
      { id: 10, label: "Checkout", url: "/checkout" },
      { id: 12, label: "Privacy Policy", url: "/privacy-policy" },
    ],
  },
  { id: 7, label: "Contact", url: "/contact" },
];


const menu_data_two:IMenuItemTwo[] = [
  {
    id: 1,
    label: "Our Hotel",
    url: "/",
    home_menus: [
      {
        id: 1,
        label: "Modern Hotel",
        url: "/",
        img: "/assets/img/menu-demo/demo.jpg",
      },
      {
        id: 2,
        label: "City Hotel",
        url: "/city-hotel",
        img: "/assets/img/menu-demo/demo-2.jpg",
      },
      {
        id: 3,
        label: "Luxury Hotel",
        url: "/luxury-hotel",
        img: "/assets/img/menu-demo/demo-3.jpg",
      },
      {
        id: 4,
        label: "Modern Resort",
        url: "/modern-resort",
        img: "/assets/img/menu-demo/demo-4.jpg",
      },
      {
        id: 5,
        label: "Sea Hotel",
        url: "/sea-hotel",
        img: "/assets/img/menu-demo/demo-5.jpg",
      },
    ],
  },
  {
    id: 2,
    label: "Room",
    url: "/room-1",
    submenu: [
      { id: 1, label: "Room One", url: "/room-1" },
      { id: 2, label: "Room Two", url: "/room-2" },
      { id: 3, label: "Room Three", url: "/room-3" },
      { id: 4, label: "Room Details One", url: "/room-details/6722f5a4bf533ecf1e775960" },
      { id: 5, label: "Room Details Two", url: "/room-details-2/6722f5a4bf533ecf1e775960" },
      { id: 6, label: "Room Details Three", url: "/room-details-3/6722f5a4bf533ecf1e775960" },
    ],
  },
  {
    id: 3,
    label: "Pages",
    url: "#",
    pagesMenus: [
      {
        id: 1,
        links: [
          {id:1, label: "About Us", url: "/about" },
          {id:2, label: "Gallery", url: "/gallery" },
          {id:3, label: "Pricing Plan", url: "/pricing-plan" },
          {id:4, label: "Blog Grid", url: "/blog-grid" },
          {id:5, label: "Blog Sidebar", url: "/blog-sidebar" },
          {id:6, label: "Blog Details", url: "/blog-details/1" },
          {id:7, label: "Blog Details Two", url: "/blog-details-2/1" },
        ],
      },
      {
        id:2,
        links: [
          {id:1, label: "Faq", url: "/faq" },
          {id:2, label: "Destination", url: "/destination" },
          {id:3, label: "Destination Details", url: "/destination-details/6725b87efde8824654c5890b" },
          {id:4, label: "Offer", url: "/offer" },
          {id:5, label: "Contact", url: "/contact" },
          {id:6, label: "Privacy Policy", url: "/privacy-policy" },
        ],
      },
      {
        id: 3,
        links: [
          {id:1, label: "Login", url: "/login" },
          {id:2, label: "Register", url: "/register" },
          {id:3, label: "Forgot", url: "/forgot" },
          {id:5, label: "Checkout", url: "/checkout" },
        ],
      },
    ]
  }
];

export const MenuData = {
  menu_data_one,
  menu_data_two,
}
