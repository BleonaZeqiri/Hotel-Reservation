import { IBlog } from "@/types/blog-d-t";

export const home_blog_data: IBlog[] = [
  {
    id: 1,
    date: "April 10, 2024",
    title: "Weighing the pros and cons of each choice.",
    description:
      "Navigating the world of hotel booking is a crucial aspect of ensuring.",
    imgSrc: "/assets/img/blog/01.jpg",
    authorImg: "/assets/img/blog/01.png",
    authorName: "Jane Cooper",
    readTime: "4 Min Read",
  },
  {
    id: 2,
    date: "April 16, 2024",
    title: "We'll delve into the art of seamless hotel booking.",
    description:
      "Navigating the world of hotel booking is a crucial aspect of ensuring.",
    imgSrc: "/assets/img/blog/03.jpg",
    authorImg: "/assets/img/blog/02.png",
    authorName: "Cody Fisher",
    readTime: "7 Min Read",
  },
  {
    id: 3,
    date: "April 18, 2024",
    title: "Identifying your travel goals and preferences.",
    description:
      "Navigating the world of hotel booking is a crucial aspect of ensuring.",
    imgSrc: "/assets/img/blog/02.jpg",
    authorImg: "/assets/img/blog/03.png",
    authorName: "Devon Lane",
    readTime: "4 Min Read",
  },
];


export const blog_grid_data: IBlog[] = [
  ...home_blog_data,
  {
    id: 4,
    date: "May 05, 2024",
    title: "Weighing the pros and cons of each choice.",
    description:
      "Navigating the world of hotel booking is a crucial aspect of ensuring.",
    imgSrc: "/assets/img/blog/01.jpg",
    authorImg: "/assets/img/blog/01.png",
    authorName: "Jane Cooper",
    readTime: "4 Min Read",
  },
  {
    id: 5,
    date: "June 10, 2024",
    title: "We'll delve into the art of seamless hotel booking.",
    description:
      "Navigating the world of hotel booking is a crucial aspect of ensuring.",
    imgSrc: "/assets/img/blog/03.jpg",
    authorImg: "/assets/img/blog/02.png",
    authorName: "Cody Fisher",
    readTime: "7 Min Read",
  },
  {
    id: 6,
    date: "April 20, 2024",
    title: "Identifying your travel goals and preferences.",
    description:
      "Navigating the world of hotel booking is a crucial aspect of ensuring.",
    imgSrc: "/assets/img/blog/02.jpg",
    authorImg: "/assets/img/blog/03.png",
    authorName: "Devon Lane",
    readTime: "4 Min Read",
  },
];


export const blog_postbox_data: IBlog[] = [
  {
    id: 7,
    date: "November 07, 2024",
    title: "Maintaining the highest work Environment.",
    description:
      "Aliquam eget turpis vehicula, auctor elit ac, rutrum turpis. Donec enim elit, interdum eu tellus quis, fermentum vehicula dolor. Praesent in quam erat. Nam rutrum justo vitae eros efficitur accumsan. Phasellus scelerisque, massa ut venenatis tristique",
    imgSrc: "/assets/img/blog/blog-sidebar/thumb.jpg",
    authorImg: "/assets/img/blog/blog-sidebar/user.png",
    authorName: "Jane Cooper",
    readTime: "4 Min Read",
  },
  {
    id: 8,
    date: "December 11, 2024",
    title: "Identifying your travel goals and preferences.",
    description:
      "Aliquam eget turpis vehicula, auctor elit ac, rutrum turpis. Donec enim elit, interdum eu tellus quis, fermentum vehicula dolor. Praesent in quam erat. Nam rutrum justo vitae eros efficitur accumsan. Phasellus scelerisque, massa ut venenatis tristique",
    imgSrc: "/assets/img/blog/blog-sidebar/thumb2.jpg",
    authorImg: "/assets/img/blog/02.png",
    image_slider:[
      '/assets/img/blog/blog-sidebar/thumb2.jpg',
      '/assets/img/blog/blog-sidebar/thumb3.jpg',
      '/assets/img/blog/blog-sidebar/thumb4.jpg',
    ],
    authorName: "Vera Parker",
    readTime: "5 Min Read",
  },
  {
    id: 9,
    date: "December 15, 2024",
    title: "We'll delve into the art of seamless hotel booking.",
    description:
      "Aliquam eget turpis vehicula, auctor elit ac, rutrum turpis. Donec enim elit, interdum eu tellus quis, fermentum vehicula dolor. Praesent in quam erat. Nam rutrum justo vitae eros efficitur accumsan. Phasellus scelerisque, massa ut venenatis tristique",
    imgSrc: "/assets/img/blog/blog-sidebar/thumb3.jpg",
    authorImg: "/assets/img/blog/03.png",
    authorName: "Alexander Smith",
    video_id:'go7QYaQR494',
    readTime: "6 Min Read",
  },
  {
    id: 10,
    date: "December 20, 2024",
    title: "Weighing the pros and cons of each choice.",
    description:
      "Aliquam eget turpis vehicula, auctor elit ac, rutrum turpis. Donec enim elit, interdum eu tellus quis, fermentum vehicula dolor. Praesent in quam erat. Nam rutrum justo vitae eros efficitur accumsan. Phasellus scelerisque, massa ut venenatis tristique",
    imgSrc: "/assets/img/blog/blog-sidebar/thumb4.jpg",
    authorImg: "/assets/img/blog/blog-sidebar/user.png",
    authorName: "Brandon Scott",
    readTime: "7 Min Read",
  },
]


export const all_blogs = [
  ...home_blog_data,
  ...blog_grid_data,
  ...blog_postbox_data
]