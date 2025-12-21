import Link from "next/link";

type IProps = {
    title: string;
};

export default function BreadcrumbSeven({title}:IProps) {
    return (
        <div className="tp-breadcrumb-area pt-130 pb-100 p-relative">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="tp-breadcrumb-title-wrap text-center">
                            <h2 className="tp-breadcrumb-title-blog tp-breadcrumb-title-blog-3 mb-15">Checkout</h2>
                            <div className="tp-breadcrumb-list">
                                <span> <Link href="/">Home</Link></span>
                                <span> {title}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
