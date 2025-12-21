import { Metadata } from "next";
import BreadcrumbArea from "@/components/breadcrumb/breadcrumb-area";
import BlogStandardArea from "@/components/blog/blog-standard-area";


export const metadata: Metadata = {
    title: "Blog Sidebar Page - Housey",
}

export default function BlogGridPage() {
    return (
        <div>
            <BreadcrumbArea subtitle="News & Insights" title="News & Insights" />

            <BlogStandardArea/>
        </div>
    )
}
