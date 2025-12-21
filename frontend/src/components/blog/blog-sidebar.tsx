import Image from 'next/image';
import { Search } from '../svg';
import { blog_postbox_data } from '@/data/blog-data';
import Link from 'next/link';

const blogCategoryData = [
    {
        id: 1,
        imgSrc: "/assets/img/blog/blog-sidebar/categoris/1.jpg",
        title: "Business",
    },
    {
        id: 2,
        imgSrc: "/assets/img/blog/blog-sidebar/categoris/2.jpg",
        title: "Hotel",
    },
    {
        id: 3,
        imgSrc: "/assets/img/blog/blog-sidebar/categoris/3.jpg",
        title: "Travel",
    },
    {
        id: 4,
        imgSrc: "/assets/img/blog/blog-sidebar/categoris/4.jpg",
        title: "Creative",
    },
];

type IProps = {
    top_cls?: string
}
export default function BlogSidebar({top_cls=''}: IProps) {
    const recent_posts = [...blog_postbox_data].slice(0, 3);
    return (
        <div className={`tp-sidebar-wrapper ${top_cls}`}>
            <div className="tp-sidebar-widget mb-45">
                <div className="tp-sidebar-search">
                    <form action="#">
                        <div className="tp-sidebar-search-input">
                            <input type="email" placeholder="Search ..." />
                            <button className="tp-sidebar-search-btn">
                                <Search />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="tp-sidebar-widget">
                <h3 className="tp-sidebar-widget-title mb-25">Recent Posts</h3>
                {recent_posts.map((item) => (
                    <div key={item.id} className="tp-sidebar-widget-content tp-sidebar-border">
                        <span className="tp-sidebar-post-cetagory">UI Design</span>
                        <h4 className="tp-sidebar-post-title">
                            <Link href={`/blog-details/${item.id}`}>{item.title}</Link>
                        </h4>
                        <div className="tp-sidebar-post-meta">
                            <span>{item.date}</span>
                            <span className="dvdr"></span>
                            <span>Minute</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="tp-sidebar-widget pt-20 mb-55">
                <h3 className="tp-sidebar-widget-title mb-30">Categories</h3>
                {blogCategoryData.map((item) => (
                    <div key={item.id} className="tp-sidebar-categories-item">
                        <Image className="tp-sidebar-categories-img" src={item.imgSrc} alt={item.title} width={324} height={74} />
                        <h3 className="tp-sidebar-categories-title">
                            <a href="#">{item.title}</a>
                        </h3>
                    </div>
                ))}
            </div>
            <div className="tp-sidebar-widget">
                <h3 className="tp-sidebar-widget-title mb-20">Popular Tags</h3>
                <div className="tp-sidebar-widget-content">
                    <div className="tagcloud">
                        <a href="#">News</a>
                        <a href="#">Counseling</a>
                        <a href="#">Career</a>
                        <a href="#">Software</a>
                        <a href="#">Development</a>
                        <a href="#">Merket</a>
                        <a href="#">Life</a>
                        <a href="#">Research</a>
                        <a href="#">Research</a>
                        <a href="#">UI Desige</a>
                        <a href="#">Team</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
