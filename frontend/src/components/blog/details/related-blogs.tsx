import { home_blog_data } from "@/data/blog-data";
import BlogItem from "../single/blog-item";


export default function RelatedBlogs() {
    const related_blogs = [...home_blog_data]
    return (
        <div className="tp-blog-area tp-blog-top-border pb-95 pt-90">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tp-blog-details-title-wrap mb-25">
                            <h2 className="tp-blog-details-title">You may also like</h2>
                        </div>
                    </div>
                    {related_blogs.map(blog => (
                        <div className="col-xl-4 col-lg-6 col-md-6 mb-25" key={blog.id}>
                            <BlogItem blog={blog} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
