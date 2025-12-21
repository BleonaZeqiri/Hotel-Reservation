import Image from "next/image";
import { LinkSvg, XSvgThree } from "@/components/svg";
import author_img from '@/assets/img/blog/blog-details/author.png';

export default function PostboxAuthorArea() {
    return (
        <div className="tp-postbox-author tp-postbox-author-2 mb-75">
            <div className="tp-postbox-author-thumb">
                <Image src={author_img} alt="author" />
            </div>
            <div className="tp-postbox-author-content tp-postbox-author-content-2">
                <h6 className="tp-postbox-author-subtitle">ABOUT AUTHOR</h6>
                <h3 className="tp-postbox-author-title mb-15"><a href="#">Alison Baker</a></h3>
                <p>Digital content wrangler I UX enthusiast I Recovering educator I
                    Shameless nerd & GIF connoisseur I Hockey fan.</p>
                <div className="tp-postbox-left-social pt-5 tp-postbox-author-social tp-postbox-author-social-2">
                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                    <a className="svg" href="#"><XSvgThree /></a>
                    <a href="#"><LinkSvg /></a>
                </div>
            </div>
        </div>
    )
}
