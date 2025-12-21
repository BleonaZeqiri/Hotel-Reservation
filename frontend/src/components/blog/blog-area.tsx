import Link from "next/link";
import { home_blog_data } from "@/data/blog-data";
import BlogItem from "./single/blog-item";
import { UpArrow } from "../svg";


export default function BlogArea() {
    return (
        <div className="tp-blog-area pt-95 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-section-title-wrapper text-center">
                            <h6 className="tp-section-title-pre-red tp-section-title-pre  wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">Hotel News & Event</h6>
                            <h2 className="tp-section-title mb-60  wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s">Explore Our Blog</h2>
                        </div>
                    </div>
                    {home_blog_data.map(blog => (
                        <div className="col-xl-4 col-lg-6 col-md-6 mb-50" key={blog.id}>
                            <BlogItem blog={blog} />
                        </div>
                    ))}

                    <div className="col-12">
                        <div className="tp-blog-btn text-center">
                            <Link className="tp-btn-square" href="/blog-grid">All Publications
                                <span className="ml-5">
                                    <UpArrow/>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
