import Link from "next/link";

export default function BlogCategory() {
    return (
        <div className="tp-post-cetagory pb-50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-post-cetagory-list">
                            <ul>
                                <li className="active">
                                    All Topics
                                </li>
                                <li>
                                    <Link href="/blog-grid">Insight</Link>
                                </li>
                                <li>
                                    <Link href="/blog-grid">Hotel</Link>
                                </li>
                                <li>
                                    <Link href="/blog-grid">Travel</Link>
                                </li>
                                <li>
                                    <Link href="/blog-grid">Disinfection</Link>
                                </li>
                                <li>
                                    <Link href="/blog-grid">Culture</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
