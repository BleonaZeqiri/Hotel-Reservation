import { blog_grid_data } from "@/data/blog-data"
import BlogItem from "./single/blog-item";



export default function BlogGridArea() {
    const blogsItems = [...blog_grid_data];
    return (
        <div className="tp-blog-grid-area pb-105">
            <div className="container">
                <div className="row">
                    {blogsItems.map((blog,i) => (
                        <div key={blog.id} className="col-xl-4 col-lg-6 col-md-6 mb-25 wow fadeInUp" data-wow-delay={`.${i+1}s`} data-wow-duration="1s">
                            <BlogItem blog={blog} top_cls="tp-blog-grid-wrapper" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
