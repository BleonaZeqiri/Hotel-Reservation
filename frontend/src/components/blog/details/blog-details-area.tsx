import Image from "next/image";
import { IBlog } from "@/types/blog-d-t";
import BlogSidebar from "../blog-sidebar";
import { LinkSvg, QuoteIcon, XSvgThree } from "@/components/svg";
import PostboxMoreNavigation from "./postbox-more-navigation";
import PostboxAuthorArea from "./postbox-author-area";
import PostboxCommentArea from "./postbox-comment-area";
import BlogCommentForm from "@/components/form/blog-comment-form";
import details_bg from "@/assets/img/blog/blog-details/bg2.jpg";

type IProps = {
  blog: IBlog;
};
export default function BlogDetailsArea({ blog }: IProps) {
  return (
    <div className="tp-postbox-area pt-80">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tp-postbox-wrapper p-relative">
              <div className="tp-postbox-left-social-2 tp-postbox-left-social-transrent">
                <div className="tp-postbox-left-social tp-postbox-left-social-sticky">
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a className="svg" href="#">
                    <XSvgThree />
                  </a>
                  <a href="#">
                    <LinkSvg />
                  </a>
                </div>
              </div>
              <div className="tp-postbox-main">
                <div className="row">
                  <div className="col-lg-8 mb-40">
                    <div className="tp-postbox-main-wrapper">
                      <div className="tp-postbox-details-content-wrapper">
                        <div className="tp-postbox-details-content-para tp-postbox-details-content-para-2 mb-50">
                          <p className="first-para first-para-2 mb-10">
                            Nunc gravida velit quis nibh posuere tristique.
                            Integer tincidunt dignissim orci, vel consectetur
                            lacus placerat a. Curabitur ultrices finibus
                            euismod. Sed convallis magna id finibus iaculis.
                            Cras a nulla nunc. Vestibulum suscipit eget nibh in
                            imperdiet. Suspendisse et eros facilisis, vulputate
                            nulla in, pharetra diam.
                          </p>
                          <p className="mb-25">
                            Proin faucibus nec mauris a sodales, sed elementum
                            mi tincidunt. Sed eget viverra egestas nisi
                            consequat. Fusce sodales augue a accumsan.{" "}
                          </p>
                          <p>
                            I do not know why she surrendered - exhaustion,
                            probably - but one afternoon in 1980 I was allowed.
                            It was the remake of Jens Lyn with Max von Sydow,
                            you could see the strings in the spaceships when
                            they flew, and it was wonderful . Five friends in
                            the cinema darkness. We only had money for four
                            tickets, so we took turns sitting on each others
                            laps.
                          </p>
                        </div>
                        <div className="tp-postbox-details-thumb tp-postbox-details-thumb-2 mb-50">
                          <Image
                            className="w-100"
                            src={details_bg}
                            alt="thumb"
                            style={{ height: "auto" }}
                          />
                        </div>
                        <div className="tp-postbox-qoute-wrap">
                          <h3 className="tp-postbox-quote-title tp-postbox-quote-title-2 mb-10">
                            {blog.title}
                          </h3>
                          <div className="tp-postbox-details-content-para tp-postbox-details-content-para-2 mb-50">
                            <p>
                              Successful people do not see failures as failures.
                              They see them as important learning lessons.
                              Lessons that are capable of giving them insights
                              to prevent such mistakes from happening again. By
                              adopting this mindset of turning each failure into
                              a learning lesson or opportunity.
                            </p>
                          </div>
                          <div className="tp-postbox-quote tp-postbox-quote-2 mb-40">
                            <blockquote>
                              <div className="tp-postbox-quote-icon">
                                <QuoteIcon />
                              </div>
                              <div className="tp-postbox-quote-meta tp-postbox-quote-meta-2">
                                <h6 className="tp-postbox-quote-meta-title tp-postbox-quote-meta-title-2 mb-15">
                                  We are committed to changing the way of mobile
                                  UX. We believe that mobile UX has the make a
                                  real power.
                                </h6>
                                <span className="first">Ralph Edwards</span>
                                <span className="dvdr"></span>
                                <span>New York</span>
                              </div>
                            </blockquote>
                          </div>
                          <div className="tp-postbox-details-content-para tp-postbox-details-content-para-2 mb-40">
                            <p>
                              You want to succeed, surround yourself with the
                              right kind people who will support and encourage
                              you all the way. Be with people who have utmost
                              conviction and patience. The battle is never lost
                              until you’ve abandon your vision.
                            </p>
                          </div>
                        </div>
                        <div className="tp-postbox-features tp-postbox-features-2 mb-60">
                          <h3 className="tp-postbox-features-title tp-postbox-features-title-2 mb-10">
                            Procedere
                          </h3>
                          <div className="tp-postbox-details-content-para tp-postbox-details-content-para-2 mb-30">
                            <p>
                              Successful people do not see failures as failures.
                              They see them as important learning lessons.
                              Lessons that are capable of giving them insights
                              to prevent such mistakes from happening again. By
                              adopting this mindset of turning each failure into
                              a learning lesson or opportunity.
                            </p>
                          </div>
                          <ul>
                            <li>Diversity investigation for royal been.</li>
                            <li>
                              Create a structure where participants will add
                              their information.
                            </li>
                            <li>Efforts without a focus.</li>
                            <li>
                              Many contradicting opinions a vision document.
                            </li>
                            <li>A deliverable for workshop participants.</li>
                          </ul>
                        </div>
                        <div className="tp-postbox-share-wrapper tp-postbox-share-wrapper-2 mb-45">
                          <div className="row align-items-center">
                            <div className="col-lg-8 col-md-8">
                              <div className="tagcloud tagcloud-details tagcloud-details-2">
                                <a href="#">Education</a>
                                <a href="#">Life Style</a>
                                <a href="#">React</a>
                                <a href="#">Application</a>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                              <div className="tp-postbox-left-social tp-postbox-share-social tp-postbox-share-social-2">
                                <a href="#">
                                  <i className="fa-brands fa-facebook-f"></i>
                                </a>
                                <a className="svg" href="#">
                                  <XSvgThree />
                                </a>
                                <a href="#">
                                  <LinkSvg />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* postbox navigation */}
                        <PostboxMoreNavigation />
                        {/* postbox navigation */}

                        {/* postbox author area */}
                        <PostboxAuthorArea />
                        {/* postbox author area */}

                        {/* postbox comment area start */}
                        <PostboxCommentArea />
                        {/* postbox comment area end */}

                        <div className="tp-postbox-comment-form tp-postbox-comment-form-2">
                          <h3 className="tp-postbox-comment-form-title">
                            Leave a comment
                          </h3>
                          <p className="mb-40">
                            Your email address will not be published. Required
                            fields are marked *
                          </p>
                          <div className="tp-postbox-comment-input tp-postbox-comment-input-2">
                            {/* form start */}
                            <BlogCommentForm />
                            {/* form end */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 pb-50">
                    {/* blog sidebar */}
                    <BlogSidebar top_cls="tp-sticky" />
                    {/* blog sidebar */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
