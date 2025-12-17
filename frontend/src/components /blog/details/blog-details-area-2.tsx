import Image from "next/image";
import { IBlog } from "@/types/blog-d-t";
import { LinkSvg, QuoteIcon, XSvgThree } from "@/components/svg";
import PostboxMoreNavigation from "./postbox-more-navigation";
import PostboxAuthorArea from "./postbox-author-area";
import PostboxCommentArea from "./postbox-comment-area";
import BlogCommentForm from "@/components/form/blog-comment-form";
import details_bg from "@/assets/img/blog/blog-details/thumb.jpg";
import details_bg_2 from "@/assets/img/blog/blog-details/thumb02.jpg";

type IProps = {
  blog: IBlog;
};

export default function BlogDetailsAreaTwo({ blog }: IProps) {
  return (
    <div className="tp-postbox-area pb-120">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tp-postbox-wrapper">
              <div className="tp-postbox-top mb-80">
                <div className="tp-postbox-thumb">
                  <Image className="w-100" src={details_bg} alt="thumb" style={{ height: 'auto' }} />
                </div>
              </div>
              <div className="tp-postbox-main">
                <div className="row">
                  <div className="col-xxl-2 col-xl-2 col-lg-2">
                    <div className="tp-postbox-left-social tp-postbox-left-social-3">
                      <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                      <a className="svg" href="#"><XSvgThree /></a>
                      <a href="#">
                        <LinkSvg />
                      </a>
                    </div>
                  </div>
                  <div className="col-xxl-8 col-xl-10 col-lg-10">
                    <div className="tp-postbox-main-wrapper">
                      <div className="tp-postbox-details-content-wrapper">
                        <div className="tp-postbox-details-content-para mb-50">
                          <p className="first-para mb-10">Nunc gravida velit quis nibh posuere tristique. Integer tincidunt dignissim orci, vel consectetur lacus placerat a. Curabitur ultrices finibus euismod. Sed convallis magna id finibus iaculis. Cras a nulla nunc. Vestibulum suscipit eget nibh in imperdiet. Suspendisse et eros facilisis, vulputate nulla in, pharetra diam.</p>
                          <p className="mb-25">Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas nisi consequat. Fusce sodales augue a accumsan. </p>
                          <p>I do not know why she surrendered - exhaustion, probably - but one afternoon in 1980 I was allowed. It was the remake of Jens Lyn with Max von Sydow, you could see the strings in the spaceships when they flew, and it was wonderful . Five friends in the cinema darkness. We only had money for four tickets, so we took turns sitting on each others laps.</p>
                        </div>
                        <div className="tp-postbox-details-thumb mb-50">
                        <Image className="w-100" src={details_bg_2} alt="thumb" style={{ height: 'auto' }} />
                        </div>
                        <div className="tp-postbox-qoute-wrap">
                          <h3 className="tp-postbox-quote-title mb-10">{blog.title}</h3>
                          <div className="tp-postbox-details-content-para mb-50">
                            <p>Successful people do not see failures as failures. They see them as important learning lessons. Lessons that are capable of giving them insights to prevent such mistakes from happening again. By adopting this mindset of turning each failure into a learning lesson or opportunity.</p>
                          </div>
                          <div className="tp-postbox-quote mb-40">
                            <blockquote>
                              <div className="tp-postbox-quote-icon">
                                <QuoteIcon clr="#031F42" />
                              </div>
                              <div className="tp-postbox-quote-meta">
                                <h6 className="tp-postbox-quote-meta-title mb-15">We are committed to changing the way of mobile UX. We believe that mobile UX has the make a real power.</h6>
                                <span className="first">Ralph Edwards</span>
                                <span className="dvdr"></span>
                                <span>New York</span>
                              </div>
                            </blockquote>
                          </div>
                          <div className="tp-postbox-details-content-para mb-40">
                            <p>You want to succeed, surround yourself with the right kind  people who will support and encourage you all the way. Be with people who have utmost conviction and patience. The battle is never lost until you’ve abandon your vision.</p>
                          </div>
                        </div>
                        <div className="tp-postbox-features mb-60">
                          <h3 className="tp-postbox-features-title mb-10">Procedere</h3>
                          <div className="tp-postbox-details-content-para mb-30">
                            <p>Successful people do not see failures as failures. They see them as important learning lessons. Lessons that are capable of giving them insights to prevent such mistakes from happening again. By adopting this mindset of turning each failure into a learning lesson or opportunity.</p>
                          </div>
                          <ul>
                            <li>Diversity investigation for royal been.</li>
                            <li>Create a structure where participants will add their information.</li>
                            <li>Efforts without a focus.</li>
                            <li>Many contradicting opinions a vision document.</li>
                            <li>A deliverable for workshop participants.</li>
                          </ul>
                        </div>
                        <div className="tp-postbox-share-wrapper mb-45">
                          <div className="row align-items-center">
                            <div className="col-lg-8 col-md-8">
                              <div className="tagcloud tagcloud-details">
                                <a href="#">Education</a>
                                <a href="#">Life Style</a>
                                <a href="#">React</a>
                                <a href="#">Application</a>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                              <div className="tp-postbox-left-social tp-postbox-share-social">
                                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                <a className="svg" href="#"><XSvgThree /></a>
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

                        <div className="tp-postbox-comment-form">
                          <h3 className="tp-postbox-comment-form-title">Leave a comment</h3>
                          <p className="mb-40">Your email address will not be published. Required fields are marked *</p>
                          <div className="tp-postbox-comment-input">
                            {/* form start */}
                            <BlogCommentForm btn_2={true} />
                            {/* form end */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
