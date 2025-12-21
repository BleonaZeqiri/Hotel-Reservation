import Image from "next/image";
import { IBlog } from "@/types/blog-d-t";
import Link from "next/link";

type IProps = {
    blog: IBlog;
    top_cls?: string
}
export default function BlogItem({ blog,top_cls='' }: IProps) {
    return (
        <div className={`tp-blog-wrapper ${top_cls}`}>
            <div className="tp-blog-thumb mb-25">
                <Image className="w-100" src={blog.imgSrc} alt="blog" width={362} height={219} />
            </div>
            <div className="tp-blog-content pb-30 mb-10">
                <span className="tp-blog-date mb-10">{blog.date}</span>
                <h3 className="tp-blog-title mb-15">
                    <Link href={`/blog-details/${blog.id}`}>{blog.title}</Link>
                </h3>
                <p>{blog.description}</p>
            </div>
            <div className="tp-blog-user-wrap d-flex align-items-center justify-content-between">
                <div className="tp-blog-user">
                    <Image src={blog.authorImg} alt="author" width={30} height={30} />
                    <span>{blog.authorName}</span>
                </div>
                <div className="tp-blog-read">
                    <span>
                        <i className="fa-regular fa-clock"></i> {blog.readTime}
                    </span>
                </div>
            </div>
        </div>
    )
}
