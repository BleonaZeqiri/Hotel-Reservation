import Image from "next/image";


type IProps = {
    title: string;
    authorName: string;
    date: string;
    authorImg: string;
}

export default function BreadcrumbFive({ title, authorName, date, authorImg }: IProps) {
    return (
        <div className="tp-breadcrumb-area tp-breadcrumb-spacing-3 p-relative">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="tp-breadcrumb-title-wrap text-center">
                            <span className="tp-breadcrumb-tag">VACATION</span>
                            <h2 className="tp-breadcrumb-title-blog tp-breadcrumb-title-blog-3 mb-15">{title}</h2>
                            <div className="tp-breadcrumb-blog-meta">
                                <span>
                                    <Image src={authorImg} alt="panda" width={46} height={46} />
                                    {authorName}
                                </span>
                                <span>{date}</span>
                                <span> 2 Comments</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
