import { all_blogs } from "@/data/blog-data";
import RelatedBlogs from "@/components/blog/details/related-blogs";
import BreadcrumbFive from "@/components/breadcrumb/breadcrumb-five";
import BlogDetailsAreaTwo from "@/components/blog/details/blog-details-area-2";

type IParams = Promise<{ id: string }>;

export async function generateMetadata({ params }: { params: IParams}) {
    const { id } = await params;
    const blog = all_blogs.find((item) => item.id == Number(id));
    return {
        title: blog?.title ? blog.title : "Blog Details",
    };
}

export default async function BlogDetailsPageTwo({ params }: { params: IParams}) {
    const { id } = await params;
    const blog = all_blogs.find((blog) => blog.id.toString() === id);
    return (
        <main>
            {blog ? (
                <>
                    <BreadcrumbFive title={blog.title} authorName={blog.authorName} date={blog.date} authorImg={blog.authorImg} />

                    <BlogDetailsAreaTwo blog={blog} />

                    <RelatedBlogs />
                </>
            ) : (
                <div className="text-center mt-100 mb-80">
                    No blog found with id: {id}
                </div>
            )}
        </main>
    );
}
