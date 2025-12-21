import Image from "next/image";
import { all_blogs } from "@/data/blog-data";
import BreadcrumbFour from "@/components/breadcrumb/breadcrumb-four";
import big_img from '@/assets/img/blog/blog-details/bg.jpg';
import BlogDetailsArea from "@/components/blog/details/blog-details-area";
import RelatedBlogs from "@/components/blog/details/related-blogs";

type IParams = Promise<{ id: string }>;

export async function generateMetadata({ params }: { params: IParams}) {
  const {id} = await params;
  const blog = all_blogs.find((item) => item.id == Number(id));
  return {
    title: blog?.title ? blog.title : "Blog Details",
  };
}


export default async function BlogDetailsPage({params}: {params: IParams}) {
  const { id } = await params;
  const blog = all_blogs.find((blog) => blog.id.toString() === id);
  return (
    <main>
      {blog ? (
        <>
          <BreadcrumbFour
            title={blog.title}
            authorName={blog.authorName}
            date={blog.date}
            authorImg={blog.authorImg}
          />

          <div className="tp-postbox-big-thumb jarallax fix p-relative">
            <Image className="w-100 jarallax-img" src={big_img} alt="thumb" style={{height:'auto'}}/>
         </div>

          <BlogDetailsArea blog={blog} />

          <RelatedBlogs/>
        </>
      ) : (
        <div className="text-center mt-100 mb-80">
          No blog found with id: {id}
        </div>
      )}
    </main>
  );
}
